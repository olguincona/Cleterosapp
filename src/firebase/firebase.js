import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAk3OIUAk1yFjuvtWYY_gcIRBRCv26Dx-g",
  authDomain: "reactappcoder.firebaseapp.com",
  projectId: "reactappcoder",
  storageBucket: "reactappcoder.appspot.com",
  messagingSenderId: "613923411746",
  appId: "1:613923411746:web:7c6d3621b41d6abe3e377b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);