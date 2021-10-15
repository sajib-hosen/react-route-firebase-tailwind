import { useEffect, useState } from "react";
import FirebaseInit from "../firebase/firebase.init";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, GithubAuthProvider, onAuthStateChanged, sendEmailVerification } from "firebase/auth";

FirebaseInit()

 const useFirebase = () => {
     const [user, setUser ] = useState({});
     const [error, setError] = useState("");
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [isRegis, setIsRegis] = useState(false);

     const auth = getAuth();
     


    //  Log In Form ========================================
   
     const handleCreatUser = event => {
         event.preventDefault();
         createUserWithEmailAndPassword(auth, email, password)
         .then(userCredential => console.log(userCredential))
         .catch(error => {
            setError(error);
            // console.log(error.code);
         });
         console.log(email, password);
     }

     const loginEmailPassword = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            setUser(userCredential);
        })
        .catch(error => setError(error))
     }

    //  TAKING INPUT VALUE ANP PUSHING INTO STATE 
     const handleEmail = event => {
        setEmail(event.target.value)
     }

     const handlePassword = event => {
        setPassword(event.target.value)
     }
     const handleCheckBox = event => {
         setIsRegis(event.target.checked);
         console.log(isRegis);
     }

    // ***


    //  Popup Sign In =====================================

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

    //  Email verification =================================
     const verifyEmail = () =>{
        sendEmailVerification(auth.currentUser)
        .then(result => console.log(result))
        .catch(error => console.log( error))
     }

    //  Log Out ============================================
     const logOut = () => {
         signOut(auth)
         .then(() => {})
         .catch(error => setError(error))
     }

    //  user monitore 
     useEffect((user) => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                setUser(user);
            }
            else{
                logOut();
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
         isRegis,
         handleCreatUser, 
         googleSignIn,
         searchMeals,
         handleEmail,
         handlePassword,
         gitSignIn,
         handleCheckBox,
         loginEmailPassword,
         logOut
        }
 
 }
 export default useFirebase;