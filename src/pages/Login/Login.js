import React from 'react';
import { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TitlePage from '../TitlePage/TitlePage';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const resetEmailpassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Email verification send');
        }
        else {
            toast('Enter your email');
        }

        
    }
    if (sending) {
        return <p className='text-center text-2xl'>sending......</p>;
    }
    if (error) {
        errorElement = <p className='text-center text-red-500'><small>Error : {error?.message} </small></p>
    }
    if (user) {
        navigate(from, { replace: true });
    }

    if (loading) {
        return <div className='h-screen flex justify-center align-middle '>
            <div className='h-96 animate-spin flex justify-center items-center'>
                <svg className='h-11 w-11' viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><rect fill="none" height="256" width="256" /><line fill="none" stroke="#000" strokeLinecap="round" stroke-linejoin="round" strokeWidth="16" x1="128" x2="128" y1="32" y2="64" /><line fill="none" stroke="#000" strokeLinecap="round" stroke-linejoin="round" strokeWidth="16" x1="195.9" x2="173.3" y1="60.1" y2="82.7" /><line fill="none" stroke="#000" strokeLinecap="round" stroke-linejoin="round" strokeWidth="16" x1="224" x2="192" y1="128" y2="128" /><line fill="none" stroke="#000" strokeLinecap="round" stroke-linejoin="round" strokeWidth="16" x1="195.9" x2="173.3" y1="195.9" y2="173.3" /><line fill="none" stroke="#000" strokeLinecap="round" stroke-linejoin="round" strokeWidth="16" x1="128" x2="128" y1="224" y2="192" /><line fill="none" stroke="#000" strokeLinecap="round" stroke-linejoin="round" strokeWidth="16" x1="60.1" x2="82.7" y1="195.9" y2="173.3" /><line fill="none" stroke="#000" strokeLinecap="round" stroke-linejoin="round" strokeWidth="16" x1="32" x2="64" y1="128" y2="128" /><line fill="none" stroke="#000" strokeLinecap="round" stroke-linejoin="round" strokeWidth="16" x1="60.1" x2="82.7" y1="60.1" y2="82.7" /></svg>
            </div>
        </div>
    }

    const handelSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
    }
    const navigateRegister = event => {
        navigate('/register');
    }



    return (
        <div>
            <TitlePage title='Login'></TitlePage>
            <h1 className='text-2xl text-center mt-6 mb-3'>Please login</h1>

            <div className='border border-t-red-500 border-l-green-500 border-b-yellow-500 border-r-blue-500 h-full w-96 rounded-md flex  justify-center align-middle mx-auto'>
                <div>
                    <form onSubmit={handelSubmit}>
                        <label className='block mb-3 mt-4' htmlFor="Name">Email :</label>
                        <input ref={emailRef} className='border border-black rounded-md p-2 w-64' type="email" name="email" id="" placeholder='your email' required />
                        <label className='block mb-3 mt-4' htmlFor="">Password :</label>
                        <input ref={passwordRef} className='border border-black rounded-md p-2 w-64' type="password" name="password" id="" placeholder='your password' required />
                        <input className='block px-5 py-2 border border-black rounded-md mt-3' type="submit" value="Login" />
                    </form>
                    <p><small>New to Genius car ? <span className='text-yellow-900700 cursor-pointer hover:text-green-500' onClick={navigateRegister}>please register</span></small></p>
                    <p><small>Forget password ? <span className='text-red-500 cursor-pointer hover:text-green-500' onClick={resetEmailpassword}>Reset password</span></small></p>
                    {errorElement}
                    <SocialLogin></SocialLogin>
                    <ToastContainer />
                </div>
            </div>

        </div>
    );
};

export default Login;