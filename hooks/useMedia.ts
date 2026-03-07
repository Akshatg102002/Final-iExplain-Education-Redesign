import { useState, useEffect } from 'react';
import { db, collection, addDoc, deleteDoc, doc, onSnapshot, query, orderBy, serverTimestamp } from '../firebase';

export interface MediaFile {
  id: string;
  name: string;
  type: string;
  size: number;
  data: string; // URL
  storagePath: string; // For deletion
  createdAt: any;
}

export const useMedia = () => {
  const [media, setMedia] = useState<MediaFile[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const q = query(collection(db, 'media'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const files = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as MediaFile[];
      setMedia(files);
      setLoading(false);
    }, (err) => {
      console.error("Error fetching media:", err);
      setError("Failed to load media library.");
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const uploadFile = async (file: File) => {
    setError(null);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.details || 'Upload failed');
      }

      const { url, storagePath } = await response.json();

      await addDoc(collection(db, 'media'), {
        name: file.name,
        type: file.type,
        size: file.size,
        data: url,
        storagePath: storagePath,
        createdAt: serverTimestamp(),
      });
    } catch (err: any) {
      console.error("Upload error:", err);
      setError(err.message || "Failed to upload file.");
      throw err;
    }
  };

  const deleteFile = async (id: string) => {
    setError(null);
    try {
      const fileToDelete = media.find(f => f.id === id);
      if (!fileToDelete) return;

      // Delete from storage via API
      if (fileToDelete.storagePath) {
        const response = await fetch('/api/delete', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ storagePath: fileToDelete.storagePath }),
        });

        if (!response.ok) {
            console.warn("Failed to delete from storage, but proceeding to delete from Firestore.");
        }
      }

      // Delete from Firestore
      await deleteDoc(doc(db, 'media', id));
    } catch (err: any) {
      console.error("Delete error:", err);
      setError("Failed to delete file.");
    }
  };

  return { media, loading, error, uploadFile, deleteFile };
};
