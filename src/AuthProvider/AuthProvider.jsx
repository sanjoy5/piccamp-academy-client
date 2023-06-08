import React, { createContext, useContext, useEffect, useState } from 'react';
import app from '../firebase/firebae.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import axios from 'axios';

export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider()

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (currenUser, name, photo) => {
        return updateProfile(currenUser, {
            displayName: name,
            photoURL: photo
        })
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }


    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currenUser => {
            setUser(currenUser)
            console.log('OnAuthState Current User : ', currenUser);

            // get and set token to localStorage 
            if (currenUser) {
                axios.post('http://127.0.0.1:5000/jwt', {
                    email: currenUser.email
                })
                    .then(data => {
                        console.log(data.data.token);
                        localStorage.setItem('token', data.data.token)
                        setLoading(false)
                    })
            } else {
                localStorage.removeItem('token')
            }

        })
        return () => {
            return unsubscribe()
        }
    }, [])


    const authInfo = {
        user,
        createUser,
        signIn,
        updateUserProfile,
        googleSignIn,
        logOut,
        loading,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    return useContext(AuthContext)
}

export default AuthProvider;