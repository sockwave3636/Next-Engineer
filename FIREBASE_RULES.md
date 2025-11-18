# Firebase Security Rules

## Important: Set Up These Rules in Your Firebase Console

### 1. Firestore Security Rules

Go to Firebase Console → Firestore Database → Rules

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow authenticated users to read courses
    match /courses/{courseId} {
      allow read: if request.auth != null;
      
      // Only allow owner email to write
      allow write: if request.auth != null && 
                     request.auth.token.email == 'aahabhisheksingh@gmail.com';
    }
    
    // Allow authenticated users to read blog posts (filtering for published posts is done client-side)
    // Note: Collection queries cannot check resource.data, so we allow read access and filter client-side
    match /blogPosts/{postId} {
      allow read: if request.auth != null;
      
      // Only allow owner email to write blog posts
      allow write: if request.auth != null && 
                     request.auth.token.email == 'aahabhisheksingh@gmail.com';
    }
  }
}
```

**Owner email: `aahabhisheksingh@gmail.com`**

### 2. Storage Security Rules

Go to Firebase Console → Storage → Rules

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // Allow authenticated users to read notes
    match /notes/{course}/{year}/{semester}/{subject}/{fileName} {
      allow read: if request.auth != null;
      
      // Only allow owner email to upload/delete notes
      allow write: if request.auth != null && 
                     request.auth.token.email == 'aahabhisheksingh@gmail.com';
    }
    
    // Allow authenticated users to read blog media
    match /blog/{postId}/{fileName} {
      allow read: if request.auth != null;
      
      // Only allow owner email to upload/delete blog media
      allow write: if request.auth != null && 
                     request.auth.token.email == 'aahabhisheksingh@gmail.com';
    }
  }
}
```

**Owner email: `aahabhisheksingh@gmail.com`**

### 3. Authentication Setup

1. Go to Firebase Console → Authentication → Sign-in method
2. Enable "Email/Password" provider
3. (Optional) Create a test user with your owner email or sign up through the app

### 4. Update Owner Email in Code

1. Open `app/context/AuthContext.tsx`
2. Find the line: `const OWNER_EMAIL = 'your-email@example.com';`
3. Replace `'your-email@example.com'` with your actual email

### 5. Firestore Database Structure

The app uses the following structure:

```
courses/
  {courseId}/
    name: string
    years/
      {yearId}/
        id: string
        name: string
        semesters/
          {semesterId}/
            id: string
            name: string
            subjects/
              {subjectId}/
                id: string
                name: string
                code: string
                description: string
                links: Array<{
                  id: string
                  title: string
                  url: string
                  type: 'video' | 'article' | 'tutorial'
                }>
                notes: Array<{
                  id: string
                  title: string
                  fileUrl: string
                  fileName: string
                  size: string
                  uploadedAt: Timestamp
                }>
```

### 6. Storage Structure

Notes are stored in the following path structure:

```
notes/
  {course}/
    {year}/
      {semester}/
        {subject}/
          {fileName}
```

## Testing

After setting up the rules:

1. Try logging in as a regular user - should be able to read courses and subjects
2. Try logging in as owner - should be able to access admin panel and edit data
3. Try uploading a note as owner - should work
4. Try uploading a note as regular user - should be denied

## Troubleshooting

- **"Permission denied" errors**: Check that your email matches the one in the rules
- **"User not authenticated" errors**: Make sure Authentication is enabled
- **Storage upload fails**: Check Storage rules and make sure the path matches the pattern



