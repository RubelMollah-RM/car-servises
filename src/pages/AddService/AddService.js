import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/service`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)

            });
    };
    return (
        <div className='text-center flex justify-center align-middle'>
            <div>
                <h1 className='mt-5 text-2xl'>please Add your Service</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className='block w-60 p-3  border border-black rounded-md mt-4' {...register("name", { required: true, maxLength: 20 })} placeholder='Name' />
                    <textarea className='block w-60 p-3  border border-black rounded-md my-2' {...register("description")} placeholder='Description' />
                    <input className='block w-60 p-3  border border-black rounded-md' type="number" {...register("price")} placeholder='Price' />
                    <input className='block w-60 p-3  border border-black rounded-md mt-2' type="text" {...register("img")} placeholder='photo URL' />
                    <input className='rounded-md border px-4 py-3 mt-4 hover:bg-transparent hover:bg-fuchsia-300 hover:border-black border-t-red-400 border-b-yellow-400 border-l-green-400 border-r-amber-700' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddService;