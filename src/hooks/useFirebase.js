import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.initialize';
initializeAuthentication();


const useFirebase = () => {
    const auth = getAuth();
    const [user, setuser] = useState({})
    // Sign in With Google

    const signInGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setuser(user);
            }).catch(error => alert(error.message));


    }

    //Sing out user
    const signOutUser = () => {
        signOut(auth)
            .then(() => {
                setuser({});
            })
    }

    // State Change Page reload
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setuser(user);
        }else {
            setuser({});
        }
    })


    return {
        user,
        setuser,
        signInGoogle,
        signOutUser
    }
}

export default useFirebase;