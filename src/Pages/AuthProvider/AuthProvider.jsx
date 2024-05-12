import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../../firebase/firebase';



export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const googleAuthProvider = new GoogleAuthProvider()
    const [user, setUser] = useState(null)
    const [loading, setLoading]=useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleAuthProvider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
           setUser(currentUser)
           setLoading(false)
        })

        return () => {
            unsubscribe()
        }
    }, [])

    const AuthInfo = {createUser, loginUser, logOutUser, googleSignIn, user, loading}

    return (
        <AuthContext.Provider value={AuthInfo} >
            {children}
        </AuthContext.Provider>
    )



};

export default AuthProvider;