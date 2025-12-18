import { 
  collection, 
  doc, 
  getDoc, 
  getDocs, 
  setDoc, 
  updateDoc, 
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  Timestamp
} from "firebase/firestore";
import { db } from "./config";

// Types
export interface Course {
  id: string;
  name: string;
  years: Record<string, Year>;
}

export interface Year {
  id: string;
  name: string;
  semesters: Record<string, Semester>;
}

export interface Semester {
  id: string;
  name: string;
  subjects: Record<string, Subject>;
}

export interface Subject {
  id: string;
  name: string;
  code: string;
  description: string;
  links: StudyLink[];
  notes: Note[];
}

export interface StudyLink {
  id: string;
  title: string;
  url: string;
  type: 'video' | 'article' | 'tutorial';
}

export interface Note {
  id: string;
  title: string;
  fileUrl: string;
  fileName: string;
  originalFileName?: string;
  size: string;
  type: 'notes' | 'book';
  uploadedAt: Timestamp;
}

// Course operations
export async function getCourses(): Promise<Record<string, Course>> {
  const coursesRef = collection(db, "courses");
  const snapshot = await getDocs(coursesRef);
  const courses: Record<string, Course> = {};
  
  snapshot.forEach((doc) => {
    courses[doc.id] = { id: doc.id, ...doc.data() } as Course;
  });
  
  return courses;
}

export async function getCourse(courseId: string): Promise<Course | null> {
  const courseRef = doc(db, "courses", courseId);
  const courseSnap = await getDoc(courseRef);
  
  if (courseSnap.exists()) {
    return { id: courseSnap.id, ...courseSnap.data() } as Course;
  }
  return null;
}

export async function saveCourse(courseId: string, courseData: Omit<Course, 'id'>): Promise<void> {
  const courseRef = doc(db, "courses", courseId);
  await setDoc(courseRef, courseData, { merge: true });
}

export async function deleteCourse(courseId: string): Promise<void> {
  const courseRef = doc(db, "courses", courseId);
  await deleteDoc(courseRef);
}

// Subject operations
export async function getSubjects(courseId: string, yearId: string, semesterId: string): Promise<Subject[]> {
  const course = await getCourse(courseId);
  if (!course || !course.years[yearId] || !course.years[yearId].semesters[semesterId]) {
    return [];
  }
  
  const subjects = course.years[yearId].semesters[semesterId].subjects;
  return Object.values(subjects);
}

export async function getSubject(
  courseId: string, 
  yearId: string, 
  semesterId: string, 
  subjectId: string
): Promise<Subject | null> {
  const course = await getCourse(courseId);
  if (!course || !course.years[yearId] || !course.years[yearId].semesters[semesterId]) {
    return null;
  }
  
  return course.years[yearId].semesters[semesterId].subjects[subjectId] || null;
}

export async function saveSubject(
  courseId: string,
  yearId: string,
  semesterId: string,
  subjectId: string,
  subjectData: Omit<Subject, 'id'>
): Promise<void> {
  const course = await getCourse(courseId);
  if (!course) {
    throw new Error("Course not found");
  }

  // Ensure nested structure exists
  if (!course.years) course.years = {};
  if (!course.years[yearId]) {
    course.years[yearId] = { id: yearId, name: `Year ${yearId}`, semesters: {} };
  }
  if (!course.years[yearId].semesters) course.years[yearId].semesters = {};
  if (!course.years[yearId].semesters[semesterId]) {
    course.years[yearId].semesters[semesterId] = { id: semesterId, name: `Semester ${semesterId}`, subjects: {} };
  }
  if (!course.years[yearId].semesters[semesterId].subjects) {
    course.years[yearId].semesters[semesterId].subjects = {};
  }

  course.years[yearId].semesters[semesterId].subjects[subjectId] = {
    id: subjectId,
    ...subjectData
  };

  await saveCourse(courseId, course);
}

export async function deleteSubject(
  courseId: string,
  yearId: string,
  semesterId: string,
  subjectId: string
): Promise<void> {
  const course = await getCourse(courseId);
  if (!course || !course.years[yearId] || !course.years[yearId].semesters[semesterId]) {
    return;
  }

  delete course.years[yearId].semesters[semesterId].subjects[subjectId];
  await saveCourse(courseId, course);
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



