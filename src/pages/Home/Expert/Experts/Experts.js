import React from 'react';
import expert1 from '../../../../images/experts/expert-1.jpg';
import expert2 from '../../../../images/experts/expert-2.jpg';
import expert3 from '../../../../images/experts/expert-3.jpg';
import expert4 from '../../../../images/experts/expert-4.jpg';
import expert5 from '../../../../images/experts/expert-5.jpg';
import expert6 from '../../../../images/experts/expert-6.png';
import Expert from '../Expert';

const experts = [
    {id:1, name:'wiliam', img:expert1},
    {id:2, name:'justin', img:expert2},
    {id:3, name:'luche', img:expert3},
    {id:4, name:'james', img:expert4},
    {id:5, name:'tom', img:expert5},
    {id:6, name:'leja', img:expert6}
]

const Experts = () => {
    return (
       <div>
         <h1 className='text-center text-3xl text-amber-500 mb-5 underline underline-offset-8'>Our Experts</h1>
         <div className='grid lg:grid-cols-3 gap-2 container mx-auto md:grid-cols-2 md:gap-4'>
            {
                experts.map(expert => <Expert
                key={expert.id}
                expert = {expert}
                ></Expert>)
            }
        </div>
       </div>
    );
};

export default Experts;