import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import { storage } from "./config";

export async function uploadNoteFile(file: File, path: string): Promise<string> {
  const storageRef = ref(storage, path);
  await uploadBytes(storageRef, file);
  return await getDownloadURL(storageRef);
}

export async function deleteNoteFile(path: string): Promise<void> {
  const storageRef = ref(storage, path);
  await deleteObject(storageRef);
}

export function getFileSize(file: File): string {
  const sizeInMB = file.size / (1024 * 1024);
  if (sizeInMB < 1) {
    return `${(file.size / 1024).toFixed(2)} KB`;
  }
  return `${sizeInMB.toFixed(2)} MB`;
}

export async function uploadBlogMedia(file: File, path: string): Promise<string> {
  const storageRef = ref(storage, path);
  await uploadBytes(storageRef, file);
  return await getDownloadURL(storageRef);
}

export async function deleteBlogMedia(path: string): Promise<void> {
  const storageRef = ref(storage, path);
  await deleteObject(storageRef);
}




