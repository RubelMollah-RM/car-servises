import React from 'react';


const Servic = ({serv}) => {
    console.log(serv);
    const {name, price, img} = serv;
    return (
        <div className='mb-8 text-center'>
            <img src={img} alt="" />
            <h1>Name : {name}</h1>
            <p>price : {price}</p>
            <button className='border border-black rounded-md px-3 mt-2'>name:{name}</button>
        </div>
    );
};

export default Servic;