# Firebase Rules for Blog Posts

## Important: Update Your Firebase Rules

The blog/notice/article feature requires additional Firestore and Storage rules. Please update your Firebase Console with these rules.

### 1. Updated Firestore Security Rules

Go to Firebase Console → Firestore Database → Rules and replace with:

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

### 2. Updated Storage Security Rules

Go to Firebase Console → Storage → Rules and replace with:

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

## Quick Setup Steps

1. **Copy the Firestore rules** above
2. Go to Firebase Console → Firestore Database → Rules
3. Paste and click "Publish"
4. **Copy the Storage rules** above
5. Go to Firebase Console → Storage → Rules
6. Paste and click "Publish"

After updating these rules, you should be able to create blog posts successfully!

## Troubleshooting

- **"Permission denied" error**: Make sure you've updated both Firestore and Storage rules
- **Still can't create posts**: Check that your logged-in email matches `aahabhisheksingh@gmail.com`
- **Media upload fails**: Ensure Storage rules include the `/blog/{postId}/{fileName}` pattern




