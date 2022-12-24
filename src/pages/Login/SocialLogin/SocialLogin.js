import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const SocialLogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

    let errorElement;
    if (error || error1) {
        errorElement = 
            <p className='text-center text-red-500'><small>Error : {error?.message} {error1?.message}</small></p>
        

    }
    if (loading || loading1) {
        return <div className='h-screen flex justify-center align-middle '>
            <div className='h-full animate-spin flex justify-center items-center mt-8'>
                <svg className='h-11 w-11' viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><rect fill="none" height="256" width="256" /><line fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" x1="128" x2="128" y1="32" y2="64" /><line fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" x1="195.9" x2="173.3" y1="60.1" y2="82.7" /><line fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" x1="224" x2="192" y1="128" y2="128" /><line fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" x1="195.9" x2="173.3" y1="195.9" y2="173.3" /><line fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" x1="128" x2="128" y1="224" y2="192" /><line fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" x1="60.1" x2="82.7" y1="195.9" y2="173.3" /><line fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" x1="32" x2="64" y1="128" y2="128" /><line fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" x1="60.1" x2="82.7" y1="60.1" y2="82.7" /></svg>
            </div>
        </div>
    }
    if (user || user1) {
        navigate('/home');
    }

    return (
        <div>
            <div className='flex justify-center items-center p-1'>
                <div className='h-0.5 w-1/2 bg-black  m-2'></div>
                <p>or</p>
                <div className='h-0.5 w-1/2 bg-black m-2'></div>
            </div>
            {errorElement}
            <button onClick={() => signInWithGoogle()} className='border border-b-yellow-500 text-center w-full h-11 rounded-lg bg-green-200 hover:bg-green-500 hover:text-white mt-3'>Sign in google</button>
            <button onClick={() => signInWithGithub()} className='border border-b-green-500 text-center w-full h-11 rounded-lg bg-green-50 hover:bg-green-500 hover:text-white mt-3 mb-6'>Sign in Github</button>
        </div>
    );
};

export default SocialLogin;