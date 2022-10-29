import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import SocialLogin from '../Login/SocialLogin/SocialLogin';
const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile] = useUpdateProfile(auth);
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    if (loading) {
        return <div className='h-screen flex justify-center align-middle '>
            <div className='h-full animate-spin flex justify-center items-center mt-8'>
                <svg className='h-11 w-11' viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><rect fill="none" height="256" width="256" /><line fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" x1="128" x2="128" y1="32" y2="64" /><line fill="none" stroke="#000" strokeLinecap="round" stroke-linejoin="round" strokeWidth="16" x1="195.9" x2="173.3" y1="60.1" y2="82.7" /><line fill="none" stroke="#000" strokeLinecap="round" stroke-linejoin="round" strokeWidth="16" x1="224" x2="192" y1="128" y2="128" /><line fill="none" stroke="#000" strokeLinecap="round" stroke-linejoin="round" strokeWidth="16" x1="195.9" x2="173.3" y1="195.9" y2="173.3" /><line fill="none" stroke="#000" strokeLinecap="round" stroke-linejoin="round" strokeWidth="16" x1="128" x2="128" y1="224" y2="192" /><line fill="none" stroke="#000" strokeLinecap="round" stroke-linejoin="round" strokeWidth="16" x1="60.1" x2="82.7" y1="195.9" y2="173.3" /><line fill="none" stroke="#000" strokeLinecap="round" stroke-linejoin="round" strokeWidth="16" x1="32" x2="64" y1="128" y2="128" /><line fill="none" stroke="#000" strokeLinecap="round" stroke-linejoin="round" strokeWidth="16" x1="60.1" x2="82.7" y1="60.1" y2="82.7" /></svg>
            </div>
        </div>
    }

    if (error) {
        return <div>
            <p className='text-center text-red-500'>Error : {error.message}</p>
        </div>
    }

    const handelRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        navigate('/home'); 
    }
    return (
        <div>
            <h1 className='text-green-600 text-center text-2xl'>Register here</h1>
            <div className='flex justify-center align-middle'>
                <div className='border border-t-green-500 border-r-red-500 border-l-yellow-600 border-b-blue-600 mt-5 rounded-md w-96 flex justify-center '>
                    <div>
                        <form onSubmit={handelRegister} className='flex flex-col'>
                            <label htmlFor="name" className='mt-4'>Name :</label>
                            <input className='w-80 rounded-md border p-2' type="text" name="text" id="" required />
                            <label htmlFor="email" className='mt-3'>Email :</label>
                            <input className='w-80 rounded-md border p-2' type="email" name="email" id="" required />
                            <label htmlFor="password" className='mt-3'>Password :</label>
                            <input className='w-80 rounded-md border p-2' type="password" name="password" id="" required />
                            <input className='px-3 py-2 mt-4 border border-black rounded-lg hover:bg-gray-500 hover:text-white w-32' type="submit" value="Register" />
                        </form>
                        <p className='mt-4'><small>Already Register ? <span className='text-red-500 text-center cursor-pointer' onClick={navigateLogin}>Please Login</span></small></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;