import Button from '@restart/ui/esm/Button';
import React from 'react';
import logo from '../../assets/images/google-logo.jpg'
import { useHistory, useLocation } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInGoogle, setUser, setIsLoading } = useAuth();
    const history = useHistory();
    const location = useLocation();
    const REDIRECT_URL = location.state?.from || '/home';

    const handleGoogleSignIn = () => {
        signInGoogle()
            .then(result => {
                const user = result.user;
                setUser(user);
                setIsLoading(false);
                history.push(REDIRECT_URL);
            }).catch(error => alert(error.message, 'line'));
    }

    return (
        <div style={{ backgroundColor: '#D6FAFF' }} className='w-full py-5'>
            <div className='bg-white col-md-6 rounded-3 mx-auto py-5 my-5'>
                <Button onClick={handleGoogleSignIn} className='d-flex col-10 col-xl-4 my-auto lh-lg btn btn-outline-dark mx-auto'>
                    <img className='col-1 me-2 mt-1 text-center' src={logo} alt="" />
                    <h6 className='lh-base text-center text-md'>Sign in With Google</h6>
                </Button>
            </div>
        </div>
    );
};

export default Login;