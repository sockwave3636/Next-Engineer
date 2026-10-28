// Client-side Firestore helpers for blog posts, contact messages and premium passes.
// The study catalog (programs, subjects, resources) lives in lib/catalog/.
import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  limit,
  onSnapshot,
  Timestamp,
  Unsubscribe
} from "firebase/firestore";
import { db } from "./config";

// Written only by the server after a verified payment (see lib/server/passes.ts).
// Document id is the scope key: subject:{id} or branch:{program}:{branch}.
export interface UserPass {
  scopeKey: string;
  label: string;
  expiresAt: Timestamp;
}

export function subscribeToUserPasses(
  uid: string,
  onChange: (passes: Record<string, UserPass>) => void,
  onError?: (error: Error) => void
): Unsubscribe {
  const passesRef = collection(db, "users", uid, "passes");
  return onSnapshot(
    passesRef,
    (snapshot) => {
      const passes: Record<string, UserPass> = {};
      snapshot.forEach((passDoc) => {
        passes[passDoc.id] = { scopeKey: passDoc.id, ...passDoc.data() } as UserPass;
      });
      onChange(passes);
    },
    onError
  );
}

// Blog Post types
export interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: string;
  type: 'blog' | 'notice' | 'article';
  mediaType: 'video' | 'article' | 'image' | 'file' | 'none';
  // Primary media URL (for backward compatibility and single-media posts)
  mediaUrl?: string;
  // Optional list of media URLs for posts with multiple images/videos
  mediaUrls?: string[];
  fileUrl?: string;
  fileName?: string;
  author: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  published: boolean;
}

// Blog Post operations
export async function getBlogPosts(limitCount: number = 10): Promise<BlogPost[]> {
  const postsRef = collection(db, "blogPosts");
  // Query without where clause to avoid composite index requirement
  // Filter published posts and sort client-side
  const q = query(postsRef, orderBy("createdAt", "desc"), limit(limitCount * 2)); // Get extra to account for filtering
  const snapshot = await getDocs(q);

  // Filter published posts and limit client-side
  const publishedPosts = snapshot.docs
    .map(doc => ({ id: doc.id, ...doc.data() } as BlogPost))
    .filter(post => post.published === true)
    .slice(0, limitCount);

  return publishedPosts;
}

export async function getBlogPost(postId: string): Promise<BlogPost | null> {
  const postRef = doc(db, "blogPosts", postId);
  const postSnap = await getDoc(postRef);

  if (postSnap.exists()) {
    return { id: postSnap.id, ...postSnap.data() } as BlogPost;
  }
  return null;
}

export async function saveBlogPost(postId: string, postData: Omit<BlogPost, 'id'>): Promise<void> {
  const postRef = doc(db, "blogPosts", postId);
  await setDoc(postRef, postData, { merge: true });
}

export async function deleteBlogPost(postId: string): Promise<void> {
  const postRef = doc(db, "blogPosts", postId);
  await deleteDoc(postRef);
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const postsRef = collection(db, "blogPosts");
  const q = query(postsRef, orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);

  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as BlogPost));
}

// Contact Message types
export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: Timestamp;
  read: boolean;
  // 'request' messages come from a subject page's "Request a resource" button
  kind?: 'contact' | 'request';
  subjectId?: string;
  subjectCode?: string;
  pageUrl?: string;
}

// Contact Message operations
export async function saveContactMessage(messageData: Omit<ContactMessage, 'id' | 'createdAt' | 'read'>): Promise<string> {
  const messagesRef = collection(db, "contactMessages");
  const messageToSave = {
    ...messageData,
    createdAt: Timestamp.now(),
    read: false,
  };
  const docRef = await addDoc(messagesRef, messageToSave);
  return docRef.id;
}

export async function getContactMessages(): Promise<ContactMessage[]> {
  const messagesRef = collection(db, "contactMessages");
  const q = query(messagesRef, orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);

  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as ContactMessage));
}

export async function markMessageAsRead(messageId: string): Promise<void> {
  const messageRef = doc(db, "contactMessages", messageId);
  await updateDoc(messageRef, { read: true });
}

export async function deleteContactMessage(messageId: string): Promise<void> {
  const messageRef = doc(db, "contactMessages", messageId);
  await deleteDoc(messageRef);
}
