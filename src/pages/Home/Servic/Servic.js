import React from 'react';


const Servic = ({serv}) => {
    const {name, price, img} = serv;
    
    return (
        <div className='lg:mb-8 text-center rounded-md bg-gray-300 mx-auto p-3 hover:bg-slate-400 shadow-lg hover:shadow-gray-400 md:mb-3 sm:mb-3 mb-3'>
            <img src={img} alt="" />
            <h1>Name : {name}</h1>
            <p>price : {price}</p>
            <button className='border border-black rounded-md px-3 mt-2 hover:bg-green-300 bg-blue-50'>name:{name}</button>
        </div>
    );
};

export default Servic;