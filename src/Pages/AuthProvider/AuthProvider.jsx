import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../../firebase/firebase';
import Swal from 'sweetalert2';
import axios from 'axios';



export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {




    const googleAuthProvider = new GoogleAuthProvider()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

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

            const emailOfUser = currentUser?.email || user?.email
            const loggedUser = { email: emailOfUser }
            setUser(currentUser)
            setLoading(false)
            if (currentUser) {
                axios.post('http://localhost:5000/jwt', loggedUser, { withCredentials: true })

                    .then(res => {
                        console.log(res.data)
                    })
            }
            else {
                axios.post('http://localhost:5000/logout', loggedUser, { 
                    withCredentials:true
                })
            }
        })

        return () => {
            return unsubscribe()
        }
    }, [])

    const AuthInfo = { createUser, loginUser, logOutUser, googleSignIn, user, loading }

    return (
        <AuthContext.Provider value={AuthInfo} >
            {children}
        </AuthContext.Provider>
    )



};

export default AuthProvider;