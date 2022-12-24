import React from 'react';
import { useNavigate } from 'react-router-dom';


const Servic = ({serv}) => {
    const {_id, name, price, img, description} = serv;
    const navigate = useNavigate();
    const navigateToServiceDetails = (id) =>{
        navigate(`/servic/${id}`);
    }
    return (

        <div className='lg:mb-8 text-center rounded-md bg-gray-300 mx-auto p-3 hover:bg-slate-400 shadow-lg hover:shadow-gray-400 md:mb-3 sm:mb-3 mb-3'>
            <img className='mx-auto' src={img} alt="" />
            <h1>Name : {name}</h1>
            <p>price : {price}</p>
            <p><small>{description}</small></p>
            <button onClick={ () => navigateToServiceDetails(_id)} className='border border-black rounded-md px-3 mt-2 hover:bg-green-300 bg-blue-50'>name:{name}</button>
        </div>
    );
};

export default Servic;