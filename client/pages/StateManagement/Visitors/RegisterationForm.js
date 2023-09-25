import React, { useState } from 'react'
import { visitorType } from '../Onboarding/Data'
import { useRouter } from 'next/router';
import { Controller, useForm } from 'react-hook-form';

const RegisterationForm = ({handleButtonClick, progress}) => {
    const [toggle, setToggle] = useState(true)
    const { register, handleSubmit, control, formState: { errors } } = useForm();
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
    <div>
        <form onSubmit={handleSubmit(onSubmit2)}>
        <div className="content mt-2 border-1 bg-[#ffff] border-gray-400 rounded-xl p-2 w-full max-w-[40rem] ml-3">
                                    {visitorType?.map((item, index) => {
                                        return <div key={index}>
                                            <div className="flex justify-center items-center">
                                            <label className='text-black flex justify-center font-bold items-center text-xl max-w-[10rem] w-full ml-4 ' htmlFor={item?.title}>{item.title}</label> <br />
                                            </div>
                                            <div className="flex m-2 justify-around items-center">
                                                {item?.info?.map((item2, index) => (
                                                    <div key={index} className='flex items-center'>
                                                        <input type={item2?.type} className='w-5 h-5 shadow-green-600'/>
                                                        <span className='ml-2 text-black text-base'>{item2?.title}</span>
                                                    </div>
                                                ))}
                                            </div>
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
                                                                            className='w-full max-w-[36rem]  text-black p-2.5 border-[1.5px] rounded-lg m-2 focus:border-blue-900 focus:outline-blue-900'
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
                                                                                className='w-full max-w-[36rem]  text-black p-2.5 border-[1.5px] rounded-lg m-2 focus:border-blue-900 focus:outline-blue-900'
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
                                    <div className="grid grid-cols-2 gap-2">
                                        {item?.date?.map((item2, index) => (
                                            <div key={index} className='relative'>
                                                <label className='text-black text-base ml-4' htmlFor={item2?.title}>
                                                    {item2?.title}
                                                </label>
                                                <input type={item2?.type} placeholder={item2?.placeholder} className='w-full max-w-[13rem] text-black p-2.5 border-[1.5px] rounded-lg m-2 focus:border-blue-900 focus:outline-blue-900'/>
                                                {/* <span className='absolute right-[.1rem] top-[2.5rem] bg-black text-white rounded-md text-3xl'>{item2?.icon}</span> */}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="grid grid-cols-2 gap-2 mt-3">
                                        {item?.exTime?.map((item2, index) => (
                                            <>
                                            <div key={index} className='relative mb-2.5'>
                                                <label className='text-black text-base ml-4' htmlFor={item2?.title}>
                                                    {item2?.title}
                                                </label>
                                                <div className="flex items-center">
                                                {item2?.info?.map((item3, index) => (
                                                    <div key={index} className='flex items-center w-full m-2'>
                                                        <label htmlFor={item3?.title}>{item3?.title}</label>
                                                    <input style={{width:"12rem"}} type={item3?.type} className='w-full max-w-[17rem] text-black p-2.5 border-[1.5px] rounded-lg m-2 focus:border-blue-900 focus:outline-blue-900'/>
                                                    </div>
                                                ))}
                                                </div>
                                            </div>

                                            </>
                                            
                                        ))}
                                    </div>
                                        </div>
                                    })}
                                    <div className="flex justify-around items-center pb-3">
                                            <button className='text-white text-base bg-black p-1.5 rounded-full' onClick={handleButtonClick} value={progress}>Generate Access Code</button>
                                    </div>
                                </div>
        </form>
    </div>
  )
}

export default RegisterationForm

// import React from 'react'
// import Header from '../../../layouts/Header';
// import Navbar from '../../../_components/State/Header';
// import Invoices from '../../../_components/State/Invoices';
// import Link from 'next/link';
// import { visitorType } from '../Onboarding/Data';
// import Sidebar from '../../../layouts/Sidebar';

// const RegisterationForm = () => {
//     let arr = [];
//     return (
//         <>
//             <div>
//                 <div className="">
//                     <Header />
//                     <div className="flex">
//                         <div className="mt-[2.6%] fixed pt-3 z-10">
//                             <Sidebar />
//                         </div>
//                         <div className="absolute right-4">
//                             <Navbar />
//                             <div className="flex ">
//                                 <div className="content mt-2 border-1 bg-[#ffff] border-gray-400 rounded-xl p-2 w-full max-w-[34rem] ml-3">
//                                     {visitorType?.map((item, index) => {
//                                         return <div key={index}>
//                                             <div className="flex justify-center items-center">
//                                             <label className='text-black flex justify-center font-bold items-center text-xl max-w-[10rem] w-full ml-4 ' htmlFor={item?.title}>{item.title}</label> <br />
//                                             </div>
//                                             <div className="flex m-2 justify-around items-center">
//                                                 {item?.info?.map((item2, index) => (
//                                                     <div key={index} className='flex items-center'>
//                                                         <input type={item2?.type} className='w-5 h-5 shadow-green-600'/>
//                                                         <span className='ml-2 text-black text-base'>{item2?.title}</span>
//                                                     </div>
//                                                 ))}
//                                             </div>
//                                             <div className="flex flex-col">
//                                                 {item?.form?.map((item2, index) => (
//                                                     <div key={index} className='mb-2.5'>
//                                                         <label className='text-black text-base ml-4' htmlFor={item2?.title}>
//                                                             {item2?.title}
//                                                         </label> <br />
//                                                         {item2?.type === 'select' ? (
//                                                             <select className='w-full max-w-[30rem] text-black p-2.5 border-[1.5px] rounded-lg m-2 focus:border-blue-900 focus:outline-blue-900'>
//                                                                 {item2?.options?.map((option, index) => (
//                                                                     <option key={index} value={option.value} className='focus:shadow-md'>
//                                                                         {option.label}
//                                                                     </option>
//                                                                 ))}
//                                                             </select>
//                                                         ) : (
//                                                             <div className='relative'>
//                                                                 <input
//                                                                     type={item2?.type}
//                                                                     placeholder={item2?.placeholder}
//                                                                     className='w-full relative max-w-[30rem] text-black p-2.5 border-[1.5px] rounded-lg m-2 focus:border-blue-900 focus:outline-blue-900'
//                                                                 />
//                                                                 <span className='absolute right-[3.5rem] top-[1rem] text-black text-3xl'>{item2?.icon}</span>
//                                                             </div>
//                                                         )}
//                                                     </div>
//                                                 ))}
//                                             </div>
//                                     <div className="grid grid-cols-2 gap-2">
//                                         {item?.date?.map((item2, index) => (
//                                             <div key={index} className='relative'>
//                                                 <label className='text-black text-base ml-4' htmlFor={item2?.title}>
//                                                     {item2?.title}
//                                                 </label>
//                                                 <input type={item2?.type} placeholder={item2?.placeholder} className='w-full max-w-[13rem] text-black p-2.5 border-[1.5px] rounded-lg m-2 focus:border-blue-900 focus:outline-blue-900'/>
//                                                 {/* <span className='absolute right-[.1rem] top-[2.5rem] bg-black text-white rounded-md text-3xl'>{item2?.icon}</span> */}
//                                             </div>
//                                         ))}
//                                     </div>
//                                     <div className="grid grid-cols-2 gap-2 mt-3">
//                                         {item?.exTime?.map((item2, index) => (
//                                             <>
//                                             <div key={index} className='relative mb-2.5'>
//                                                 <label className='text-black text-base ml-4' htmlFor={item2?.title}>
//                                                     {item2?.title}
//                                                 </label>
//                                                 <div className="flex items-center">
//                                                 {item2?.info?.map((item3, index) => (
//                                                     <div key={index} className='flex items-center w-full m-2'>
//                                                         <label htmlFor={item3?.title}>{item3?.title}</label>
//                                                     <input style={{width:"12rem"}} type={item3?.type} className='w-full max-w-[17rem] text-black p-2.5 border-[1.5px] rounded-lg m-2 focus:border-blue-900 focus:outline-blue-900'/>
//                                                     </div>
//                                                 ))}
//                                                 </div>
//                                             </div>

//                                             </>
                                            
//                                         ))}
//                                     </div>
//                                         </div>
//                                     })}
//                                     <div className="flex justify-around items-center pb-3">
//                                         <Link href='/StateManagement/Pricing/HouseDetail'>
//                                             <button className='text-white text-base bg-black p-1.5 rounded-full'>Generate Access Code</button>
//                                         </Link>
//                                     </div>
//                                 </div>
//                                 <div className='ml-7'>
//                                     <Invoices />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div >
//         </>
//     )
// }

// export default RegisterationForm