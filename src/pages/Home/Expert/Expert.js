import React from 'react';

const Expert = ({expert}) => {
    const {name, img} = expert;
    return (
        <div className='lg:mb-8 text-center rounded-md pt-3 lg:mx-4 sm:grid-cols-1  bg-gray-300 hover:bg-slate-400 shadow-lg hover:shadow-gray-400 md:mb-3 sm:mb-3 mb-3 '>
            <img className='mx-auto' src={img} alt="" />
            <p>Name : {name}</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis in aliquid autem nostrum ut voluptate dolores vero!</p>
        </div>
    );
};

export default Expert;