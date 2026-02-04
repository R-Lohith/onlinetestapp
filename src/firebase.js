import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Firebase config (copy exactly from console)
const firebaseConfig = {
  apiKey: "AIzaSyDBUJ8o5IBLPLBLhPiKlVKkNnig_XMa_5g",
  authDomain: "finance-app-a1f2a.firebaseapp.com",
  projectId: "finance-app-a1f2a",
  storageBucket: "finance-app-a1f2a.appspot.com",
  messagingSenderId: "250904259247",
  appId: "1:250904259247:web:41603bd9d8b69ce8f9025a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth & Google provider
export const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Sign in with Google
export const signInWithGoogle = async () => {
  console.log("🔥 Firebase Google Sign-In called");
  const result = await signInWithPopup(auth, googleProvider);
  return result.user;
};
