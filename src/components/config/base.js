import {initializeApp} from 'firebase/app'
import {getFirestore} from "firebase/firestore"


const app = initializeApp({
    // apiKey: "AIzaSyAI4bDIm2BT5HsP22CWJ6KFIxUl4fmdYZE",
    // authDomain: "based-projects.firebaseapp.com",
    // projectId: "based-projects",
    // storageBucket: "based-projects.appspot.com",
    // messagingSenderId: "24857484923",
    // appId: "1:24857484923:web:5963b8b0491ae6fb01ccde"
})



const db = getFirestore(app)

export{db}