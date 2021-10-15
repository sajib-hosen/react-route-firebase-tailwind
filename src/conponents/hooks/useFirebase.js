import { useEffect, useState } from "react";
import FirebaseInit from "../firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, GithubAuthProvider, onAuthStateChanged, sendEmailVerification } from "firebase/auth";

FirebaseInit()

 const useFirebase = () => {
     const [user, setUser ] = useState({});
     const [error, setError] = useState("");
     const [meal, setMeal] = useState("");
     const [email, setEmail] = useState("");
     const [ password, setPassword] = useState("");

     const auth = getAuth();
     
    //  console.log("auth:", auth);
     const creatUser = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(response => {
            setUser(response);
            console.log(email, password);
        })
        .catch(error => {
            setError(error.code);
        })
     }

     const googleSignIn = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then( result => setUser(result.user))
        .catch(error => setError(error));
        verifyEmail();
     }

     const gitSignIn = () => {
        const gitProvider = new GithubAuthProvider();
         signInWithPopup(auth, gitProvider)
         .then( result => setUser(result.user))
         .catch(error => setError(error));
         verifyEmail();
     }

     const verifyEmail = () =>{
        sendEmailVerification(auth.currentUser)
        .then(result => console.log(result))
        .catch(error => console.log( error))
     }

     const logOut = () => {
         signOut(auth)
         .then(() => {})
         .catch(error => setError(error))
     }

    //  user monitore 
     useEffect((user) => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                console.log("user from useEffect", user);
            }
            else{
                console.log("user is not avalable")
            }
        })
     }, []);

     const searchMeals = () => {
         const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`;
         console.log(url)
     }

    
     return {
         user,
         error,
         creatUser, 
         googleSignIn,
         searchMeals,
         gitSignIn, 
         logOut
        }
 
 }
 export default useFirebase;