import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../../firebase/firebase';



export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const googleAuthProvider = new GoogleAuthProvider()
    const [user, setUser] = useState(null)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOutUser = () => {
        return signOut(auth)
    }
    const googleSignIn = () => {
        return signInWithPopup(auth, googleAuthProvider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser)
        })

        return () => {
            unsubscribe()
        }
    }, [])

    const AuthInfo = [createUser, loginUser, logOutUser, googleSignIn]

    return (
        <AuthContext.Provider value={AuthInfo} >
            {children}
        </AuthContext.Provider>
    )



};

export default AuthProvider;