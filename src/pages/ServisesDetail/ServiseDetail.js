import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ServiseDetail = () => {
    
    const navigate = useNavigate();
    const {servicId} = useParams();

    const handelCheckOutSection = () =>{
            navigate('/CheckOut');
    }
    return (
        <div className='text-center'>
            <h1 className='text-4xl text-red-500'>Service detail is here :{servicId}</h1>
            <button onClick={handelCheckOutSection} className='p-3 mx-3 my-3 rounded-md border border-x-2'>Please Check Out</button>
        </div>
    );
};

export default ServiseDetail;