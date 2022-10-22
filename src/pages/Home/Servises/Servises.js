import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Servic from '../Servic/Servic';

const Servises = () => {
    const [servise, setServise] = useState([]);

    useEffect(() => {
        fetch("servises.json")
            .then(res => res.json())
            .then(data => setServise(data))
    }, [])
    return (
        <div>
            <h1 id='services' className='text-center text-3xl mb-5 text-blue-400'>Our Services</h1>
            <div className='grid lg:grid-cols-3 gap-2 container mx-auto md:grid-cols-2 md:gap-4'>
                {
                    servise.map(serv => <Servic
                        key={serv.id}
                        serv={serv}
                    ></Servic>)
                }
            </div>
        </div>
    );
};

export default Servises;