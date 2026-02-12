
import React, { useState, useEffect } from 'react';
import { BLOG_POSTS } from '../constants.tsx';
import { 
  db, 
  collection, 
  getDocs, 
  query, 
  orderBy 
} from '../firebase.ts';

const createSlug = (text: string) => text ? text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '') : '';

const BlogSection: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const q = query(collection(db, 'blogs'), orderBy('timestamp', 'desc'));
        const querySnapshot = await getDocs(q);
        const fetchedBlogs = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() as any }));
        
        // Merge with constants for initial variety, but dynamic content comes first
        const combined = [...fetchedBlogs, ...BLOG_POSTS];
        // Remove duplicates if any (based on title)
        const unique = combined.reduce((acc: any[], current) => {
          const x = acc.find(item => item.title === current.title);
          if (!x) return acc.concat([current]);
          else return acc;
        }, []);

        setPosts(unique);
      } catch (error) {
        console.error("Firestore fetch error:", error);
        setPosts(BLOG_POSTS);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <section id="blogs" className="py-24 bg-gray-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-black text-brand-blue dark:text-white mb-6 tracking-tight">Educational <span className="text-brand-gold">Insights</span></h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 font-medium max-w-2xl mx-auto leading-relaxed mb-8">
            Stay updated with the latest news and guides on international medical education and global admissions.
          </p>
          <a 
            href="#/blog-list"
            className="inline-block px-8 py-3 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl text-brand-blue dark:text-brand-gold font-bold text-xs uppercase tracking-widest hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            Read All Articles
          </a>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-10 h-10 border-4 border-brand-gold border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.slice(0, 3).map((post: any) => (
              <a 
                key={post.id} 
                href={`#/blog/${createSlug(post.category || 'General')}/${createSlug(post.title)}`}
                className="group bg-white dark:bg-slate-800 rounded-[2rem] overflow-hidden shadow-sm border border-gray-100 dark:border-slate-700 hover:shadow-2xl transition-all"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={post.img} alt={post.imgAlt || post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <div className="text-[10px] font-black text-brand-gold uppercase tracking-widest mb-3">{post.category || 'Admissions'}</div>
                  <h3 className="text-lg font-bold text-brand-blue dark:text-white mb-4 line-clamp-2 leading-tight group-hover:text-brand-gold transition-colors">
                    {post.title}
                  </h3>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-[11px] font-bold">
                    <i className="fa-solid fa-calendar-day mr-2 opacity-50"></i>
                    {post.date}
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
