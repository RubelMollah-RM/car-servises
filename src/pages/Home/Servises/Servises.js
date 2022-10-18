import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Servises = () => {
    const [servise, setServise] = useState([]);

    useEffect( () =>{
        fetch("servises.json")
        .then(res => res.json())
        .then(data => setServise(data))
    },[])
    return (
        <div>
            <h2>servises : {servise.length}</h2>
        </div>
    );
};

export default Servises;