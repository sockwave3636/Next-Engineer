# Setting Up Owner Access

## Quick Setup

### Option 1: Using Environment Variable (Recommended)

1. Create a `.env.local` file in the root of your project:
```bash
NEXT_PUBLIC_OWNER_EMAIL=your-actual-email@example.com
```

2. Replace `your-actual-email@example.com` with your actual email address

3. Restart your development server:
```bash
npm run dev
```

### Option 2: Direct Code Edit

1. Open `app/context/AuthContext.tsx`
2. Find this line:
```typescript
const OWNER_EMAIL = process.env.NEXT_PUBLIC_OWNER_EMAIL || 'your-email@example.com';
```
3. Replace `'your-email@example.com'` with your actual email:
```typescript
const OWNER_EMAIL = process.env.NEXT_PUBLIC_OWNER_EMAIL || 'admin@yourschool.com';
```

## How Owner Login Works

1. **Same Login Form**: Owner and regular users use the same login page
2. **Email-Based Access**: When you log in with the owner email, you automatically get admin access
3. **Admin Panel Button**: After logging in with owner email, you'll see:
   - A purple "👑 Owner" badge
   - An "Admin Panel" button in the navigation
4. **Sign Up First**: If you don't have an account yet:
   - Click "Sign Up" on the landing page
   - Use your owner email and create a password
   - After signing up, you'll be automatically logged in as owner

## After Setting Up

1. **Sign Up or Login** with your owner email
2. You should see:
   - "👑 Owner" badge next to your name
   - "Admin Panel" button in purple
3. Click "Admin Panel" to start managing courses, subjects, and notes

## Troubleshooting

**Don't see Admin Panel button?**
- Make sure you set the owner email correctly
- Make sure you're logged in with that exact email address
- Restart the dev server if you changed the code

**Can't access admin panel?**
- Check that your email matches exactly (case-sensitive)
- Check browser console for errors
- Make sure Firebase Authentication is working

## Firebase Rules

Remember to also update your Firebase Security Rules with the same owner email:
- Firestore Rules: `app/context/AuthContext.tsx` line 18
- Storage Rules: Same email in Firebase Console

See `FIREBASE_RULES.md` for details.













