import React, { useState } from 'react'
import Header from '../../../layouts/Header';
import Navbar from '../../../_components/State/Header';
import Invoices from '../../../_components/State/Invoices';
import Link from 'next/link';
import { royalGardenEstate, visitorType } from '../Onboarding/Data';
import Sidebar from '../../../layouts/Sidebar';
import { ProgressBar } from '../Onboarding/BranchOffice';
import { Controller, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import RegisterationForm from './RegisterationForm';

const VisitorFrom = () => {
    let arr = [];
    const [progress, setProgress] = React.useState(0);
    const progressPercentage = (progress === 0 ? 0 : progress === 1 ? 50 : 100);
    const [toggle, setToggle] = useState(true)
    const { register, handleSubmit, control, formState: { errors } } = useForm();
    const router = useRouter();
    const onSubmit2 = (data) => {
        console.log(data);
    };

    const handleButtonClick = () => {
        if (progress < 2) {
            setProgress(progress + 1);
        }
    };
    return (
        <>
            <div>
                <div className="">
                    <Header />
                    <div className="flex">
                        <div className="mt-[2.6%] fixed pt-3 z-10">
                            <Sidebar />
                        </div>
                        <div className="absolute w-full max-w-[88rem] right-1">
                            <Navbar />
                            <div className="text-center p-3 text-white text-3xl font-bold  bg-[#000] m-2">Registration</div>
                            <div className="w-full max-w-[87rem]"><ProgressBar percentage={progressPercentage} /></div>
                            <div className="flex -mt-[1.5rem]">
                                <form onSubmit={handleSubmit(onSubmit2)} className='max-w-[43rem] w-full'>
                                    <div className="content mt-2 border-1 bg-[#ffff] border-gray-400 rounded-xl p-2 ml-3">
                                        {royalGardenEstate?.map((item, index) => {
                                            return <div key={index}>
                                                <div className="flex justify-center mb-2 pb-2 m-2 items-center text-2xl bg-gray-400 font-semibold p-2 text-black"><h1>{item?.title}</h1></div>
                                                <div className="flex flex-col">
                                                    {item?.form?.map((item2, index) => (
                                                        <div key={index} className='mb-2.5'>
                                                            <label className='text-black text-base ml-4' htmlFor={item2?.title}>
                                                                {item2?.title}
                                                            </label> <br />
                                                            <Controller
                                                                name={`example[${index}]`} // Use unique names for each input field
                                                                control={control}
                                                                defaultValue=""
                                                                render={({ field }) => (
                                                                    item2?.type === 'select' ? (
                                                                        <select
                                                                            {...field}
                                                                            className='w-full max-w-[38rem]  text-black p-2.5 border-[1.5px] rounded-lg m-2 focus:border-blue-900 focus:outline-blue-900'
                                                                        >
                                                                            {item2?.options?.map((option, index) => (
                                                                                <option key={index} value={option.value} className='focus:shadow-md'>
                                                                                    {option.label}
                                                                                </option>
                                                                            ))}
                                                                        </select>
                                                                    ) : (
                                                                        <div className="relative">
                                                                            <input
                                                                                {...field}
                                                                                style={{ height: item2?.type == 'textarea' && '5rem' }}
                                                                                type={item2?.type}
                                                                                placeholder={item2?.placeholder}
                                                                                className='w-full max-w-[38rem]  text-black p-2.5 border-[1.5px] rounded-lg m-2 focus:border-blue-900 focus:outline-blue-900'
                                                                            />
                                                                            <span className='absolute right-[3.5rem] top-[1rem] text-black text-3xl'>{item2?.icon}</span>
                                                                        </div>
                                                                    )
                                                                )}
                                                                rules={{ required: true }}
                                                            />
                                                            {errors?.example?.[index] && <span className='text-red'>This field is required</span>}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        })}
                                        <div className="flex justify-center items-center">
                                            <p className='text-black'><span className='text-black text-lg font-semibold'>Your Address is:</span>
                                                Unit 69, YamAx Terraces, Silicon Valley, Lakeview Estate, Lagos</p>
                                        </div>
                                        <div className="flex justify-around items-center mt-4 pt-4 ml-5 pb-3">
                                            <button className='text-white text-xl bg-black p-1 w-full max-w-[10rem] rounded-full' onClick={handleButtonClick} value={progress}>Submit</button>
                                            <button className='text-white text-xl bg-gray-500 mr-5 p-1 w-full max-w-[10rem] rounded-full'>Cancel</button>
                                        </div>
                                    </div>
                                </form>
                                <div className=""><RegisterationForm handleButtonClick={handleButtonClick} progress={progress}/></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default VisitorFrom