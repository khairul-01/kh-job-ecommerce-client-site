import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {

   const [user, setUser] = useState(null)
   const [loading, setLoading] = useState(true);
   const googleProvider = new GoogleAuthProvider();

   const userRegister = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   }
   const userLogin = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
   }
   const googleLogin = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
   }
   const userLogout = () => {
      setLoading(true);
      return signOut(auth);
   }

   useEffect(()=>{
      const unSubscribe = onAuthStateChanged(auth, currentUser => {
         setUser(currentUser);
         console.log('current user - ', currentUser);
         setLoading(false);
      })
      return () => {
         return unSubscribe();
      }
   },[])

   const userInfo = {
      userRegister,
      userLogin,
      googleLogin,
      userLogout,
      user,
      loading,
   }
   return (
      <AuthContext.Provider value={userInfo}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;