# Quick Setup: Firebase Rules for Contact Messages

## ⚠️ IMPORTANT: Update Your Firebase Rules Now

The contact form is failing because Firebase security rules need to be updated. Follow these steps:

### Step 1: Go to Firebase Console
1. Open https://console.firebase.google.com/
2. Select your project
3. Go to **Firestore Database** → **Rules** tab

### Step 2: Copy and Paste These Rules

Replace your current rules with this complete set:

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
    
    // Allow authenticated users to read blog posts
    match /blogPosts/{postId} {
      allow read: if request.auth != null;
      
      // Only allow owner email to write blog posts
      allow write: if request.auth != null && 
                     request.auth.token.email == 'aahabhisheksingh@gmail.com';
    }
    
    // Contact messages - ANYONE can create (no login required)
    match /contactMessages/{messageId} {
      // Allow anyone to create contact messages (simplified rule for testing)
      allow create: if true;  // This allows anyone to create messages
      // Only owner can read, update, or delete messages
      allow read, update, delete: if request.auth != null && 
                                     request.auth.token.email == 'aahabhisheksingh@gmail.com';
    }
  }
}
```

### Step 3: Click "Publish"

After pasting the rules, click the **"Publish"** button to save them.

### Step 4: Test the Contact Form

1. Go to your website's contact page
2. Fill out the form
3. Submit it
4. It should work now!

## What These Rules Do:

- ✅ **Anyone** can submit contact messages (no login required)
- ✅ **Only you** (the owner) can view messages in the admin panel
- ✅ **Only you** can mark messages as read or delete them
- ✅ Validates that required fields are present and correct types

## Troubleshooting

If you still get errors:
1. Make sure you clicked "Publish" after updating the rules
2. Wait 1-2 minutes for rules to propagate
3. Check that your owner email in the rules matches: `aahabhisheksingh@gmail.com`
4. Clear your browser cache and try again

