import React from 'react';
import { useParams } from 'react-router-dom';

const ServiseDetail = () => {
    const {servicId} = useParams();
    return (
        <div>
            <h1 className='text-4xl text-red-500'>Service detail is here :{servicId}</h1>
        </div>
    );
};

export default ServiseDetail;