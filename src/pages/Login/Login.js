import React from 'react';
import { useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (user) {
        navigate(from, { replace: true });
    }
    if (loading) {
        return <div className='h-screen flex justify-center align-middle '>
            <div className='h-96 animate-spin flex justify-center items-center'>
                <svg className='h-11 w-11' viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><rect fill="none" height="256" width="256" /><line fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" x1="128" x2="128" y1="32" y2="64" /><line fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" x1="195.9" x2="173.3" y1="60.1" y2="82.7" /><line fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" x1="224" x2="192" y1="128" y2="128" /><line fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" x1="195.9" x2="173.3" y1="195.9" y2="173.3" /><line fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" x1="128" x2="128" y1="224" y2="192" /><line fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" x1="60.1" x2="82.7" y1="195.9" y2="173.3" /><line fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" x1="32" x2="64" y1="128" y2="128" /><line fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" x1="60.1" x2="82.7" y1="60.1" y2="82.7" /></svg>
            </div>
        </div>
    }
    if (error) {
        return <div>
            <p className='text-center text-red-500'>Error : {error.message}</p>
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
                    <p><small>New to Genius car ? <span className='text-red-500 cursor-pointer' onClick={navigateRegister}>please register</span></small></p>
                    <div className='flex justify-center items-center p-1'>
                        <div className='h-0.5 w-1/2 bg-black  m-2'></div>
                        <p>or</p>
                        <div className='h-0.5 w-1/2 bg-black m-2'></div>
                    </div>
                    <button className='border border-b-yellow-500 text-center w-full h-11 rounded-lg bg-green-200 hover:bg-green-500 hover:text-white mt-3'>Sign in google</button>
                    <button className='border border-b-green-500 text-center w-full h-11 rounded-lg bg-green-50 hover:bg-green-500 hover:text-white mt-3 mb-6'>Sign in email and password</button>
                </div>
            </div>

        </div>
    );
};

export default Login;