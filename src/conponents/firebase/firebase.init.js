import firebaseConfig from "./firebase.config"
import { initializeApp } from "firebase/app";

const FirebaseInit = () => {
    initializeApp(firebaseConfig);
}

export default FirebaseInit;