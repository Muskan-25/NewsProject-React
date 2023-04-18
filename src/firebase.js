import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"  

const firebaseConfig = {
    apiKey: "AIzaSyD84vu_kwAanloFNnttz8bsdMBBitP4m1I",
    authDomain: "news-project-8af22.firebaseapp.com",
    projectId: "news-project-8af22",
    storageBucket: "news-project-8af22.appspot.com",
    messagingSenderId: "709655066300",
    appId: "1:709655066300:web:e402e46e133be9fb9602b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db  = getFirestore(app);

export default db;