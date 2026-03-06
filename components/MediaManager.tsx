import React, { useState, useEffect, useRef } from 'react';
import { 
  db, 
  collection, 
  addDoc, 
  deleteDoc, 
  doc, 
  query, 
  orderBy, 
  onSnapshot, 
  serverTimestamp
} from '../firebase';
import { MediaItem } from '../types';

interface MediaManagerProps {
  onLock?: (isLocked: boolean) => void;
}

const MediaManager: React.FC<MediaManagerProps> = ({ onLock }) => {
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<{
    totalFiles: number;
    currentFileIndex: number;
    currentFileName: string;
    currentFileProgress: number;
  } | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const q = query(collection(db, 'media'), orderBy('uploadedAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as MediaItem));
      setMediaItems(items);
      setLoading(false);
    }, (error) => {
      console.error("Media snapshot error:", error);
      setLoading(false);
      if (error.code === 'permission-denied') {
        alert("Permission denied. Please check your Firestore security rules.");
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (onLock) {
      onLock(uploading);
    }
  }, [uploading, onLock]);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleUpload(Array.from(e.target.files));
    }
  };

  const handleUpload = async (files: File[]) => {
    setUploading(true);
    setUploadProgress({
      totalFiles: files.length,
      currentFileIndex: 0,
      currentFileName: '',
      currentFileProgress: 0
    });

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      setUploadProgress(prev => prev ? { ...prev, currentFileIndex: i + 1, currentFileName: file.name, currentFileProgress: 10 } : null);

      try {
        const formData = new FormData();
        formData.append('file', file);

        // Simulate progress since fetch doesn't support it easily
        const progressInterval = setInterval(() => {
          setUploadProgress(prev => {
            if (!prev || prev.currentFileProgress >= 90) return prev;
            return { ...prev, currentFileProgress: prev.currentFileProgress + 10 };
          });
        }, 500);

        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData
        });

        clearInterval(progressInterval);

        if (!response.ok) {
          throw new Error('Upload failed');
        }

        const data = await response.json();
        
        setUploadProgress(prev => prev ? { ...prev, currentFileProgress: 100 } : null);

        // Determine type
        let type: 'image' | 'video' | 'file' = 'file';
        if (file.type.startsWith('image/')) type = 'image';
        else if (file.type.startsWith('video/')) type = 'video';

        // Save to Firestore
        await addDoc(collection(db, 'media'), {
          fileName: file.name,
          fileURL: data.url,
          storagePath: data.storagePath,
          type: type,
          size: file.size,
          uploadedAt: serverTimestamp()
        });

      } catch (error: any) {
        console.error(`Failed to upload ${file.name}`, error);
        alert(`Failed to upload ${file.name}: ${error.message}`);
      }
    }

    setUploading(false);
    setUploadProgress(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleDelete = async (item: MediaItem) => {
    if (!window.confirm(`Are you sure you want to delete ${item.fileName}?`)) return;

    try {
      // Delete via Proxy API
      const response = await fetch('/api/delete', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ storagePath: item.storagePath })
      });

      if (!response.ok) {
        throw new Error('Delete failed');
      }

      // Delete from Firestore
      if (item.id) {
        await deleteDoc(doc(db, 'media', item.id));
      }
    } catch (error) {
      console.error("Delete error:", error);
      alert("Failed to delete media item.");
    }
  };

  const handleCopyURL = (url: string) => {
    navigator.clipboard.writeText(url);
    // Simple toast notification logic could be added here, for now using alert or just console
    // Since user asked for toast, let's try to implement a simple one or use a library if available.
    // I'll add a temporary state for toast.
    showToast("URL copied to clipboard");
  };

  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const formatSize = (bytes: number) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const formatDate = (timestamp: any) => {
    if (!timestamp) return '';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString();
  };

  return (
    <div className="relative min-h-[500px]">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-8 right-8 bg-gray-900 text-white px-6 py-3 rounded-lg shadow-lg z-[200] animate-fade-in-up">
          {toastMessage}
        </div>
      )}

      {/* Upload Overlay */}
      {uploading && uploadProgress && (
        <div className="fixed inset-0 bg-black/80 z-[150] flex items-center justify-center backdrop-blur-sm">
          <div className="bg-white p-8 rounded-3xl max-w-md w-full shadow-2xl text-center">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fa-solid fa-cloud-arrow-up text-2xl text-brand-blue animate-bounce"></i>
            </div>
            <h3 className="text-2xl font-black text-brand-blue mb-2">Uploading Media</h3>
            <p className="text-gray-500 text-sm mb-8">Please wait until all files finish uploading.</p>
            
            <div className="bg-gray-50 rounded-xl p-6 mb-6 text-left">
              <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                <span>File {uploadProgress.currentFileIndex} of {uploadProgress.totalFiles}</span>
                <span>{Math.round(uploadProgress.currentFileProgress)}%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
                <div 
                  className="h-full bg-brand-blue transition-all duration-300 ease-out"
                  style={{ width: `${uploadProgress.currentFileProgress}%` }}
                ></div>
              </div>
              <p className="text-sm font-bold text-gray-800 truncate">{uploadProgress.currentFileName}</p>
            </div>

            <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              {uploadProgress.totalFiles - uploadProgress.currentFileIndex + 1} files remaining
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-black text-brand-blue">Media <span className="text-brand-gold">Library</span></h2>
          <p className="text-sm text-gray-400 mt-1">Manage your images and documents</p>
        </div>
        <div>
          <input 
            type="file" 
            multiple 
            ref={fileInputRef}
            className="hidden" 
            onChange={handleFileSelect}
          />
          <button 
            onClick={() => fileInputRef.current?.click()}
            disabled={uploading}
            className="px-6 py-3 bg-brand-blue text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-brand-gold transition-all shadow-lg flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <i className="fa-solid fa-upload"></i> Upload Files
          </button>
        </div>
      </div>

      {/* Content */}
      {loading ? (
        <div className="flex items-center justify-center h-64">
           <div className="w-8 h-8 border-4 border-brand-gold border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : mediaItems.length === 0 ? (
        <div className="bg-white rounded-[2.5rem] p-12 text-center border-2 border-dashed border-gray-200">
          <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <i className="fa-regular fa-images text-3xl text-gray-300"></i>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">No media uploaded yet</h3>
          <p className="text-gray-400 text-sm mb-6">Upload files to start building your media library.</p>
          <button 
            onClick={() => fileInputRef.current?.click()}
            className="px-6 py-3 bg-gray-100 text-brand-blue rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-gray-200 transition-all"
          >
            Upload Now
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {mediaItems.map((item) => (
            <div key={item.id} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all relative">
              {/* Preview */}
              <div className="aspect-square bg-gray-50 relative overflow-hidden">
                {item.type === 'image' ? (
                  <img src={item.fileURL} alt={item.fileName} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-300">
                    <i className={`fa-solid ${item.type === 'video' ? 'fa-file-video' : 'fa-file'} text-4xl`}></i>
                  </div>
                )}
                
                {/* Overlay Actions */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <button 
                    onClick={() => handleCopyURL(item.fileURL)}
                    className="w-10 h-10 bg-white rounded-full text-gray-800 hover:text-brand-blue hover:scale-110 transition-all flex items-center justify-center"
                    title="Copy URL"
                  >
                    <i className="fa-solid fa-link"></i>
                  </button>
                  <button 
                    onClick={() => handleDelete(item)}
                    className="w-10 h-10 bg-white rounded-full text-red-500 hover:bg-red-50 hover:scale-110 transition-all flex items-center justify-center"
                    title="Delete"
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <h4 className="text-xs font-bold text-gray-800 truncate mb-1" title={item.fileName}>{item.fileName}</h4>
                <div className="flex justify-between items-center text-[10px] text-gray-400 font-medium uppercase tracking-wider">
                  <span>{formatSize(item.size)}</span>
                  <span>{formatDate(item.uploadedAt)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MediaManager;
