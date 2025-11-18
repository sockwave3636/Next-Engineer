import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyApQCcon4dWkA4_9BFMr9YVoL19i54tOYw",
  authDomain: "learn-2f2c9.firebaseapp.com",
  projectId: "learn-2f2c9",
  storageBucket: "learn-2f2c9.firebasestorage.app",
  messagingSenderId: "574563184229",
  appId: "1:574563184229:web:d753d1b527c8b55e94e08c",
  measurementId: "G-51H3272VJ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Initialize Analytics (only on client side)
export const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;

export default app;













