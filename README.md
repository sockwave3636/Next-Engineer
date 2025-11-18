# Learn Platform

A modern web application built with Next.js, React, Tailwind CSS, and Firebase for students to access their courses, study materials, and download notes.

## Features

- **Firebase Authentication**: Secure login and sign up using Firebase Auth
- **Owner/Admin Panel**: Special access for owner email to manage courses, subjects, links, and notes
- **Course Selection**: Multi-step selection process (Course → Year → Semester → Subjects)
- **Study Materials**: Access study links (videos, articles, tutorials) for each subject
- **Notes Download**: Download course notes stored in Firebase Storage
- **Real-time Data**: All data stored in Firestore database
- **Responsive Design**: Beautiful UI that works on all devices
- **Dark Mode Support**: Built-in dark mode

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Firebase project with Authentication, Firestore, and Storage enabled

### Installation

1. Install dependencies:
```bash
npm install
```

2. Configure Firebase:
   - The Firebase config is already set up in `lib/firebase/config.ts`
   - Make sure your Firebase project has:
     - Authentication enabled (Email/Password)
     - Firestore Database enabled
     - Storage enabled

3. Set Owner Email:
   - Open `app/context/AuthContext.tsx`
   - Replace `your-email@example.com` with your actual email address
   - Only this email will have access to the admin panel

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Firebase Setup & Rules

### Firestore Rules

Update your Firestore security rules in Firebase Console:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read access to courses for authenticated users
    match /courses/{courseId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && 
                     request.auth.token.email == 'aahabhisheksingh@gmail.com';
    }
  }
}
```

**Owner email: `aahabhisheksingh@gmail.com`**

### Storage Rules

Update your Firebase Storage rules:

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

**Owner email: `aahabhisheksingh@gmail.com`**

### Authentication Setup

1. Go to Firebase Console → Authentication
2. Enable "Email/Password" sign-in method
3. Create a user account with your owner email, or sign up through the app

## Application Flow

1. **Landing Page**: Users can login or sign up with Firebase Authentication
2. **Home Page**: After authentication, users select their course details:
   - Course (created by admin)
   - Year (created by admin)
   - Semester (created by admin)
3. **Subjects Page**: View all subjects for the selected course/year/semester
4. **Subject Details**: Access study links and download notes for each subject
5. **Admin Panel**: (Owner only) Manage courses, years, semesters, subjects, links, and upload notes

## Admin Panel Features

When logged in with the owner email, you can:
- Add/Delete Courses
- Add/Delete Years to courses
- Add/Delete Semesters to years
- Add/Delete Subjects to semesters
- Edit subject details (name, code, description)
- Add/Remove study links
- Upload notes (PDF, DOC, DOCX files)
- Remove notes

## Tech Stack

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Firebase** - Authentication, Firestore, and Storage
- **Context API** - State management for authentication

## Project Structure

```
app/
  ├── admin/          # Admin panel page
  ├── components/     # Reusable components
  ├── context/        # Auth context
  ├── home/           # Home page
  ├── subject/        # Subject detail page
  └── subjects/       # Subjects listing page
lib/
  └── firebase/       # Firebase configuration and services
```

## Notes

- The owner email is hardcoded in `app/context/AuthContext.tsx` - update it with your email
- All data is stored in Firestore under the `courses` collection
- Notes are stored in Firebase Storage under `notes/{course}/{year}/{semester}/{subject}/`
- Make sure to set up the Firestore and Storage rules as mentioned above for security

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Firebase Documentation](https://firebase.google.com/docs) - learn about Firebase services
