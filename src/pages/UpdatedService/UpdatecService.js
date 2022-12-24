import React from 'react';
import { useForm } from "react-hook-form";
import useServices from '../../hooks/useServices';

const AddService = () => {
    const [service, setServise] = useServices();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    const handelDeleteButton = id => {
        const proceed = window.confirm('Are you sure ?');
        if (proceed) {
            const url = `http://localhost:5000/service/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = service.filter(service => service._id !== id)
                    setServise(remaining);
                })
        }
    };
   
    return (
        <div className='flex justify-evenly'>
            <div>
                {
                    service?.map(service => <li key={service._id}>{service.name} <button onClick={() => handelDeleteButton(service._id)} className=' p-2 rounded-md my-2 px-7 btn bg-red-600'>X</button></li> )
                }
            </div>
            <div className='text-center flex justify-center align-middle'>
                <div>
                    <h1 className='mt-5 text-2xl'>please Updated your Service</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className='block w-60 p-3  border border-black rounded-md mt-4 mx-auto' {...register("Name", { required: true, maxLength: 20 })} placeholder='Name' />
                        <textarea className='block w-60 p-3  border border-black rounded-md my-2  mx-auto  ' {...register("Description")} placeholder='Description' />
                        <input className='block w-60 p-3  border border-black rounded-md mx-auto' type="number" {...register("price")} placeholder='Price' />
                        <input className='block w-60 p-3  border border-black rounded-md mx-auto mt-2' type="text" {...register("img")} placeholder='photo URL' />
                        <input className='rounded-md border px-5 py-3 mt-4 hover:bg-transparent hover:bg-fuchsia-300 hover:border-black border-t-red-400 border-b-yellow-400 border-l-green-400 border-r-amber-700' type="submit" />
                    </form>
                </div>
            </div>

        </div>

    );
};

export default AddService;