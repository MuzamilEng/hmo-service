import React, { useState } from 'react'
import Header from '../../layouts/Header';
import Navbar from '../../_components/State/Header';
import Link from 'next/link';
import Sidebar from '../../layouts/Sidebar';
import Dashboard from '../../_components/State/Dashboard';
import { Icon } from '@iconify/react';
import { form } from './data';
import { Controller, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

const Form = () => {
    const [toggle, setToggle] = useState(true)
    const { register, handleSubmit, control, formState: { errors } } = useForm();
    const router = useRouter();
    const onSubmit2 = (data) => {
        // Check if there are validation errors
        if (Object.keys(errors).length === 0) {
            // No validation errors, navigate to the next page
            router.push('/BusinessMgt/Invoice');
        } else {
            // Validation errors exist, do not navigate
            console.log(data);
        }
    };
    return (
        <>
            <div>
                <div className="">
                    <Header />
                    <div className="flex">
                        <div className="mt-[2.6%] pt-3 fixed top-0 left-0">
                            {/* <DropdownList /> */}
                            <Sidebar />
                        </div>
                        <div className="absolute w-full max-w-[88rem] res_forms right-1">
                            <Navbar />
                            <div className="ml-[1rem]"><Dashboard title={'Property'} url={'BusinessMgt/Form'}/></div>
                            <div className="flex mt-4">
                                <form onSubmit={handleSubmit(onSubmit2)}>
                                <div className=''>
                                    <div className="content border-1 grid grid-cols-2 border-gray-400 rounded-xl p-2 w-full ml-3">
                                        {form?.map((item, index) => {
                                            return <div key={index} className="m-2 mb-2 bg-[#ffff] p-2 rounded-lg w-full max-w-[40rem]">
                                                <div className=" ml-2 pb-2 text-2xl text-black"><h1>{item?.title}</h1></div>
                                                <div className="grid grid-cols-2">
                                                    {item?.form?.map((item2, index) => (
                                                        <div key={index} className='grid grid-cols-2 relative pt-2' >
                                                            <label className='text-black w-[12rem] text-lg ml-4 ' htmlFor={item2?.label}>{item2?.label}</label> <br />
                                                            <Controller
                                                                name={`example[${index}]`} // Use unique names for each input field
                                                                control={control}
                                                                defaultValue=""
                                                                render={({ field }) => (
                                                                    item2?.type === 'select' ? (
                                                                        <select
                                                                            {...field}
                                                                            className='w-full max-w-[36rem]  text-black p-2.5 border-[1.5px] rounded-lg m-2 focus:border-blue-900 focus:outline-blue-900'
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
                                                                                type={item2?.type}
                                                                                placeholder={item2?.placeholder}
                                                                                style={{ width: item2?.type === 'textarea' ? '34rem' : '17rem', height: item2?.type === 'textarea' && '5rem' }} className='w-full text-black p-2.5 border-[1.5px] rounded-md m-2 focus:border-blue-900 focus:outline-blue-900'
                                                                            />
                                                                    )
                                                                )}
                                                                rules={{ required: true }}
                                                            />
                                                            {errors?.example?.[index] && <span className='text-red absolute -bottom-3.5 left-3'>This field is required</span>}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        })}
                                        <div className="bg-[#ffff] p-2 mt-2 rounded-md">
                                                <div className='mt-2'>
                                                    <label htmlFor='Documents' className='text-black text-xl ml-4'>Documents</label>
                                                    <div style={{ borderColor: '#1a7cbc' }} className="p-10 flex mt-[1.5rem] justify-center border-2 border-dotted rounded-md items-center flex-col">
                                                        <span className='text-3xl p-2'><Icon icon="ep:upload-filled"  color="blue" /></span>
                                                        <p className='text-black text-lg font-bold text-center'>Drop files here or click to upload</p>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                        <div style={{marginBottom: '2rem', paddingBottom: '2rem'}} className="relative mt-2 ml-5 pb-3">
                                            {/* <Link href='/BusinessMgt/Invoice'>
                                            </Link> */}
                                                <button type='submit' className='text-white absolute -top-2 right-1 text-xl bg-[#1a7cbc] p-2 w-[10rem] rounded-lg'>Create</button>
                                        </div>
                                </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Form