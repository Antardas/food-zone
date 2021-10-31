import { useEffect, useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import initializeAuthentication from '../Firebase/firebase.initialize';
import { useHistory } from "react-router-dom";

initializeAuthentication();

const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);


    const signInGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)

    }

    //Sing out user
    const signOutUser = () => {
        return signOut(auth)

    }

    // State Change Page reload

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setIsLoading(false);
            } else {
                setUser({});
                setIsLoading(false);
            }
        })

    }, [])
    return {
        user,
        setUser,
        signInGoogle,
        signOutUser,
        isLoading,
        setIsLoading
    }
}

export default useFirebase;