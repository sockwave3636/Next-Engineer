# Owner Account Setup Guide

## Your Owner Credentials
- **Email**: `aahabhisheksingh@gmail.com`
- **Password**: `Amit@9450`

## Method 1: Sign Up Through the App (Recommended)

1. **Start your development server**:
   ```bash
   npm run dev
   ```

2. **Open your browser** and go to: `http://localhost:3000`

3. **Click "Sign Up"** button on the landing page

4. **Fill in the form**:
   - **Full Name**: Enter your name (e.g., "Aahab Hishek Singh")
   - **Email**: `aahabhisheksingh@gmail.com`
   - **Password**: `Amit@9450`

5. **Click "Sign Up"**

6. **After signing up**, you'll be automatically logged in and redirected to the home page

7. **You should see**:
   - A purple "👑 Owner" badge
   - An "Admin Panel" button in the navigation

8. **Click "Admin Panel"** to start managing your courses!

## Method 2: Create User in Firebase Console

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project (`learn-2f2c9`)
3. Go to **Authentication** → **Users**
4. Click **"Add user"** or **"Add user manually"**
5. Enter:
   - **Email**: `aahabhisheksingh@gmail.com`
   - **Password**: `Amit@9450`
6. Click **"Add user"**
7. Now you can log in through the app using these credentials

## Important: Update Firebase Rules

After creating your account, make sure to update your Firebase Security Rules:

### Firestore Rules
Go to **Firestore Database** → **Rules** and use:
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /courses/{courseId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && 
                     request.auth.token.email == 'aahabhisheksingh@gmail.com';
    }
  }
}
```

### Storage Rules
Go to **Storage** → **Rules** and use:
```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /notes/{course}/{year}/{semester}/{subject}/{fileName} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && 
                     request.auth.token.email == 'aahabhisheksingh@gmail.com';
    }
  }
}
```

## Verification

After logging in with your owner account, you should:
1. ✅ See the "👑 Owner" badge
2. ✅ See the "Admin Panel" button
3. ✅ Be able to access `/admin` route
4. ✅ Be able to create/edit courses, subjects, and upload notes

## Troubleshooting

**Can't sign up?**
- Make sure Firebase Authentication → Email/Password is enabled
- Check browser console for errors
- Make sure you're using the exact email: `aahabhisheksingh@gmail.com`

**Don't see Admin Panel button?**
- Make sure you're logged in with: `aahabhisheksingh@gmail.com`
- Check that the email matches exactly (case-sensitive)
- Refresh the page or restart the dev server

**Permission errors in admin panel?**
- Make sure you've updated Firebase Security Rules with your email
- Wait a few seconds for rules to propagate













