import { useEffect, useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import initializeAuthentication from '../Firebase/firebase.initialize';
initializeAuthentication();

const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({})
    // Sign in With Google
    console.log('calling useFirebase')
    const signInGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setUser(user);
            }).catch(error => alert(error.message));


    }

    //Sing out user
    const signOutUser = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({})
        }).catch((error) => {
            // An error happened.
        });
    }

    // State Change Page reload

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {

                setUser({});
            }
        })

    }, [])

    return {
        user,
        setUser,
        signInGoogle,
        signOutUser
    }
}

export default useFirebase;