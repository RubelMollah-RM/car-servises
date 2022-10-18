import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Servic from '../Servic/Servic';

const Servises = () => {
    const [servise, setServise] = useState([]);

    useEffect( () =>{
        fetch("servises.json")
        .then(res => res.json())
        .then(data => setServise(data))
    },[])
    return (
        <div className='grid grid-cols-3 gap-2 container mx-auto'>
            {
                servise.map(serv => <Servic 
                key={serv.id}
                serv = {serv}
                ></Servic>)
            }
        </div>
    );
};

export default Servises;