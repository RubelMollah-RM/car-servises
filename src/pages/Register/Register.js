import React from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();

    const navigateLogin = () =>{
        navigate('/login');
    }
    
    const handelRegister = event =>{
        event.preventDefault();
    }
    return (
        <div>
            <h1 className='text-green-600 text-center text-2xl'>Register here</h1>
            <div className='flex justify-center align-middle'>
                <div className='border border-t-green-500 border-r-red-500 border-l-yellow-600 border-b-blue-600 mt-5 rounded-md h-96 w-96 flex justify-center '>
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
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;