import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
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
                setuser(user);
            }).catch(error => alert(error.message));
        
        
    }


    return {
        user,
        setuser,
        signInGoogle
    }
}

export default useFirebase;