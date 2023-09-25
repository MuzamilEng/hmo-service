import React, { useState } from 'react'
import Header from '../../../layouts/Header';
import Navbar from '../../../_components/State/Header';
import DropdownList from "../../../src/Compoment/DropdownList"
import Invoices from '../../../_components/State/Invoices';
import Link from 'next/link';
import Filter from '../../../_components/State/Filter';
import { affectedTent, piadUnpaid } from '../Onboarding/Data';
import Sidebar from '../../../layouts/Sidebar';
import { Controller, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

const Complaint = () => {
    const [toggle, setToggle] = useState(true)
    const { register, handleSubmit, control, formState: { errors } } = useForm();
    const router = useRouter();
    const onSubmit2 = (data) => {
        // Check if there are validation errors
        if (Object.keys(errors).length === 0) {
            // No validation errors, navigate to the next page
            router.push('/StateManagement/Dashboard/OwnerDashboard');
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
                        <div className="mt-[2.6%] fixed pt-3 z-10">
                            {/* <DropdownList /> */}
                            <Sidebar />
                        </div>
                        <div className="absolute w-full max-w-[88rem] right-1">
                            <Navbar />
                            <div className="flex justify-center items-center">
                                <form onSubmit={handleSubmit(onSubmit2)} className='w-full max-w-[88rem]'>
                                    <div className="content mt-2 border-1 bg-[#ffff] border-gray-400 rounded-xl p-2  ml-3">
                                        <Filter />
                                        <div className="container p-2 m-2">
                                            <div className="grid grid-cols-4 gap-3 p-2 bg-black rounded-md">
                                                <span style={{ width: "2rem" }} className="text-white">Tenet</span>
                                                <span style={{ width: "10rem" }} className="text-white -ml-[2.5rem]">Upcoming Payment</span>
                                                <span style={{ width: "2rem" }} className="text-white">Amount</span>
                                                <span style={{ width: "2rem" }} className="text-white">Status</span>
                                            </div>
                                            <div className="mt-4 pt-3">
                                                {affectedTent?.map((item, index) => (
                                                    <div key={index} className='mb-2.5' >
                                                        <label className='text-black text-base max-w-[10rem] w-full ml-4 ' htmlFor={item?.title}>{item.title}</label> <br />
                                                        <Controller
                                                            name={`example[${index}]`} // Use unique names for each input field
                                                            control={control}
                                                            defaultValue=""
                                                            render={({ field }) => (
                                                                item?.type === 'select' ? (
                                                                    <select
                                                                        {...field}
                                                                        className='w-full max-w-[85rem] text-black p-2.5 border-[1.5px] rounded-lg m-2 focus:border-blue-900 focus:outline-blue-900'
                                                                    >
                                                                        {item?.options?.map((option, index) => (
                                                                            <option key={index} value={option.value} className='focus:shadow-md'>
                                                                                {option.label}
                                                                            </option>
                                                                        ))}
                                                                    </select>
                                                                ) : (
                                                                    <input
                                                                        {...field}
                                                                        style={{ height: item?.type == 'textarea' && '5rem' }}
                                                                        type={item?.type}
                                                                        placeholder={item?.placeholder}
                                                                        className='w-full max-w-[85rem] text-black p-2.5 border-[1.5px] rounded-lg m-2 focus:border-blue-900 focus:outline-blue-900'
                                                                    />
                                                                )
                                                            )}
                                                            rules={{ required: true }}
                                                        />
                                                        {errors?.example?.[index] && <span className='text-red'>This field is required</span>}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="flex justify-center items-center mt-4 ml-5 pb-3">
                                            <button className='text-white text-base bg-black p-1 max-w-[10rem] w-full rounded-full'>Submit</button>
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

export default Complaint



