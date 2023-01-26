
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAMsGGgx1zyvMScvhAFYSlBzGQx1ycFSAU",
  authDomain: "activity-tracker-68dca.firebaseapp.com",
  projectId: "activity-tracker-68dca",
  storageBucket: "activity-tracker-68dca.appspot.com",
  messagingSenderId: "355569188133",
  appId: "1:355569188133:web:e175371fbe74dd92d9eecc"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)