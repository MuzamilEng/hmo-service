import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import { createMantiRequest } from './data';
import { Controller, useForm } from "react-hook-form";
import { useRouter } from 'next/router';

const Request = ({ close }) => {
    const { register, handleSubmit, control, watch, formState: { errors } } = useForm();
    const router = useRouter();
    const onSubmit2 = (data) => {
        // Check if there are validation errors
        if (Object.keys(errors).length === 0) {
            // No validation errors, navigate to the next page
            router.push('/StateManagement/Onboarding/BranchOffice');
        } else {
            // Validation errors exist, do not navigate
            console.log(data);
        }
    };

    return (
        <>
            <div>
                <form onSubmit={handleSubmit(onSubmit2)} className='max-w-[78rem] w-full shadow-gray-400'>
                    <div className="content mt-2 border-1 bg-[#ffff] border-gray-400 rounded-xl p-4  ml-3">
                        {createMantiRequest?.map((item, index) => {
                            return <div key={index}>
                                <div className="flex justify-between mb-2 pb-2 p-2 items-center text-xl border-b-[1px] border-gray-300 text-black">
                                    <h1 className='font-bold'>{item?.title}</h1>
                                    <Icon icon="fluent-mdl2:cancel" className='cursor-pointer' color="blue" onClick={close} />
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                    {item?.form?.map((item2, index) => (
                                        <div key={index} className='mb-2'>
                                            <label className='text-black text-base ml-4 ' htmlFor={item2?.label}>
                                                {item2?.label}
                                            </label> <br />
                                            <Controller
                                                name={`example[${index}]`} // Use unique names for each input field
                                                control={control}
                                                defaultValue=""
                                                render={({ field }) => (
                                                    item2?.type === 'select' ? (
                                                        <select
                                                            {...field}
                                                            className='w-full max-w-[33rem]  text-black p-2.5 border-[1.5px] rounded-lg m-2 focus:border-blue-900 focus:outline-blue-900'
                                                        >
                                                            {item2?.options?.map((option, index) => (
                                                                <option key={index} value={option.value} className='focus:shadow-md'>
                                                                    {option.label}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    ) : (
                                                        <input
                                                            {...field}
                                                            style={{ height: item2?.type == 'textarea' && '5rem', display: item2.type === 'file' && 'block' }} type={item2?.type}
                                                            placeholder={item2?.placeholder}
                                                            className='w-full max-w-[33rem]  text-black p-2.5 border-[1.5px] rounded-lg m-2 focus:border-blue-900 focus:outline-blue-900'
                                                        />
                                                    )
                                                )}
                                                rules={{ required: true }}
                                            />
                                            {errors?.example?.[index] && <span className='text-red ml-[1rem]'>This field is required</span>}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        })}
                        <div style={{ justifyContent: "right" }} className="flex justify-right p-3 mt-[2rem] border-t-[1px] border-gray-300 items-center">
                            {/* <Link href='/StateManagement/Onboarding/Fee'>
                  </Link> */}
                            <button className='text-white text-base bg-orange-400 p-1 w-full max-w-[4rem] m-2 rounded-lg'>Close</button>
                            <button onClick={close} className='text-white text-base bg-blue-500 p-1 w-full max-w-[5rem] rounded-lg'>Create</button>

                        </div>
                    </div>
                </form>
            </div >
        </>
    )
}

export default Request