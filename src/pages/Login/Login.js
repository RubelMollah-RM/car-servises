import React from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const handelSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);
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
                        <input ref={emailRef} className='border border-black rounded-md p-2 w-64' type="email" name="email" id="" placeholder='your email' required/>
                        <label className='block mb-3 mt-4' htmlFor="">Password :</label>
                        <input ref={passwordRef} className='border border-black rounded-md p-2 w-64' type="password" name="password" id="" placeholder='your password' required/>
                        <input className='block px-5 py-2 border border-black rounded-md mt-3' type="submit" value="Login" />
                    </form>
                    <p><small>New to Genius car ? <span className='text-red-500 cursor-pointer' onClick={navigateRegister}>please register</span></small></p>
                    <button className='border border-gray-500 text-center w-full h-11 rounded-lg bg-green-200 hover:bg-green-500 hover:text-white mt-3'>Sign in google</button>
                    <button className='border border-gray-500 text-center w-full h-11 rounded-lg bg-green-50 hover:bg-green-500 hover:text-white mt-3 mb-6'>Sign in email and password</button>
                </div>
            </div>

        </div>
    );
};

export default Login;