import React from 'react';

const Expert = ({expert}) => {
    const {name, img} = expert;
    return (
        <div className='lg:mb-8 text-center rounded-md bg-gray-300 mx-auto p-6 hover:bg-slate-400 shadow-lg hover:shadow-gray-400 md:mb-3 sm:mb-3 mb-3'>
            <img src={img} alt="" />
            <p>Name : {name}</p>
        </div>
    );
};

export default Expert;