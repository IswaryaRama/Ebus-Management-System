// Import Firebase SDKs
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChYw4vQsLh9hF7GJfhY6dwSi3ryQBvnrg",
  authDomain: "ebus-management-system-43745.firebaseapp.com",
  projectId: "ebus-management-system-43745",
  storageBucket: "ebus-management-system-43745.appspot.com",
  messagingSenderId: "787506622291",
  appId: "1:787506622291:web:1d855abea293f28c813ba6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Authentication
const auth = getAuth(app);

// Export Firebase services
export { db, auth };
