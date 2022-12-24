import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ServiseDetail = () => {
    
    const { servicId } = useParams();
    const [servics, setServics] = useState({});
    const url = `http://localhost:5000/service/${servicId}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setServics(data))
    }, [])


    const navigate = useNavigate();

    const handelCheckOutSection = () => {
        navigate('/CheckOut');
    }
    return (
        <div className='text-center'>
            <h1 className='text-4xl text-red-500'>Service detail is here :{servics.name}</h1>
            <button onClick={handelCheckOutSection} className='p-3 mx-3 my-3 rounded-md border border-x-2'>Please Check Out</button>
        </div>
    );
};

export default ServiseDetail;