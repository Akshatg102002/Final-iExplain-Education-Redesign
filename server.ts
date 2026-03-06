
import express from "express";
import { createServer as createViteServer } from "vite";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import dotenv from "dotenv";
import multer from "multer";
import cors from "cors";

// Load environment variables
dotenv.config();

// Firebase Configuration (Server-side)
// Using hardcoded values to match client-side firebase.ts and ensure availability
const firebaseConfig = {
  apiKey: "AIzaSyAerlaB_Lb05q9gqErAjNxOemiijuhO3f0",
  authDomain: "iexplainwebsite.firebaseapp.com",
  projectId: "iexplainwebsite",
  storageBucket: "iexplainwebsite.appspot.com",
  messagingSenderId: "438305327858",
  appId: "1:438305327858:web:18713e75400a609c25de6b"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

// Configure multer for handling file uploads
const upload = multer({ storage: multer.memoryStorage() });

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  // API Routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // File Upload Proxy Route
  app.post("/api/upload", upload.single("file"), async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
      }

      const file = req.file;
      // Create a storage reference
      // Use the original filename, but maybe add a timestamp to avoid collisions
      const timestamp = Date.now();
      const storageRef = ref(storage, `uploads/${timestamp}_${file.originalname}`);

      // Upload the file buffer to Firebase Storage
      const snapshot = await uploadBytes(storageRef, file.buffer);

      // Get the download URL
      const downloadURL = await getDownloadURL(snapshot.ref);

      res.json({ 
        url: downloadURL,
        storagePath: snapshot.ref.fullPath
      });
    } catch (error: any) {
      console.error("Upload error:", error);
      res.status(500).json({ error: "Upload failed", details: error.message });
    }
  });

  // File Delete Proxy Route
  app.post("/api/delete", async (req, res) => {
    try {
      const { storagePath } = req.body;
      if (!storagePath) {
        return res.status(400).json({ error: "No storagePath provided" });
      }

      const storageRef = ref(storage, storagePath);
      await deleteObject(storageRef);

      res.json({ success: true });
    } catch (error: any) {
      console.error("Delete error:", error);
      res.status(500).json({ error: "Delete failed", details: error.message });
    }
  });

  // Sitemap Route
  app.get("/sitemap.xml", async (req, res) => {
    try {
      const docRef = doc(db, "settings", "sitemap");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        res.header("Content-Type", "application/xml");
        res.send(data.content);
      } else {
        // Default sitemap if none exists
        const defaultSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://iexplain.education/</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;
        res.header("Content-Type", "application/xml");
        res.send(defaultSitemap);
      }
    } catch (error) {
      console.error("Error fetching sitemap:", error);
      res.status(500).send("Error generating sitemap");
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Production static file serving (if built)
    app.use(express.static("dist"));
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
