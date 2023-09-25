import React, { useState } from 'react'
import { Location } from './Data'
import { Controller, useForm } from 'react-hook-form'
import Link from 'next/link';
import { useRouter } from 'next/router';


const Locations = ({handleButtonClick, progress}) => {
  const router = useRouter()
  const { register, handleSubmit, control, formState: { errors } } = useForm();
  const [toggle, setToggle] = useState(true)

  const onSubmit2 = (data) => {
    // Check if there are validation errors
    if (Object.keys(errors).length === 0) {
      // No validation errors, navigate to the next page
      router.push('/StateManagement/Onboarding/Maintainer');
    } else {
      // Validation errors exist, do not navigate
      console.log(data);
    }
  };
  
  return (
    <div>
      <div className="">
              <div style={{ width: '700px', maxWidth: "600px"}} className="content mt-2 border-1 bg-[#ffff] border-gray-400 rounded-xl p-2 max-w-[45rem] w-full ml-3">
                <form onSubmit={handleSubmit(onSubmit2)}>

                  {Location?.map((item, index) => {
                    return <div key={index}>
                      <div className="flex justify-center mb-2 pb-2 items-center text-2xl underline text-black"><h1 className='font-bold'>{'Step 2'}</h1></div>
                      <div className="flex flex-col">
                        {item?.form?.map((item2, index) => (
                          <div key={index} className='mb-2.5'>
                            <label className='text-black text-base ml-4 ' htmlFor={item2?.title}>
                              {item2?.title}
                            </label><br />
                            <Controller
                                    name={`example[${index}]`} // Use unique names for each input field
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                      item2?.type === 'select' ? (
                                        <select
                                          {...field}
                                          className='w-full max-w-[38rem] text-black p-2.5 border-[1.5px] rounded-lg m-2 focus:border-blue-900 focus:outline-blue-900'
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
                                          className='w-full max-w-[38rem] text-black p-2.5 border-[1.5px] rounded-lg m-2 focus:border-blue-900 focus:outline-blue-900'
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
                  })}
                <div className="flex justify-center items-center mt-4 ml-5 pb-3">
                  <button onClick={handleButtonClick} value={progress} className='text-white text-xl mt-[7.5rem] bg-black p-1 w-[10rem] rounded-lg'>Continue</button>
                </div>
                </form>
              </div>
              </div>
    </div>
  )
}

export default Locations

// import React from 'react'
// import Header from '../../../layouts/Header';
// import Navbar from '../../../_components/State/Header';
// import DropdownList from "../../../src/Compoment/DropdownList"
// import { Location } from './Data';
// import Invoices from '../../../_components/State/Invoices';
// import Link from 'next/link';
// import Sidebar from '../../../layouts/Sidebar';

// const LOcation = () => {
//   let arr = [];
//   return (
//     <>
//       <div>
//         <div className="">
//           <Header />
//           <div className="flex">
//             <div className="mt-[2.6%] pt-3 fixed top-0 left-0">
//               {/* <DropdownList /> */}
//               <Sidebar />
//             </div>
//             <div className="absolute right-4">
//               <Navbar />
//               <div className="flex ">
//                 <div className="content mt-2 border-1 bg-[#ffff] border-gray-400 rounded-xl p-2 max-w-[33rem] w-full ml-3">
//                   {Location?.map((item, index) => {
//                     return <div key={index}>
//                       <div className="flex justify-center mb-2 pb-2 items-center text-2xl underline text-black"><h1>{item?.title}</h1></div>
//                       <div className="flex flex-col">
//                         {item?.form?.map((item2, index) => (
//                           <div key={index} className='mb-2.5'>
//                             <label className='text-black text-base ml-4 ' htmlFor={item2?.title}>
//                               {item2?.title}
//                             </label><br />
//                             {item2?.type === 'select' ? (
//                               <select className='w-full max-w-[30rem] text-black p-2.5 border-[1.5px] rounded-lg m-2 focus:border-blue-900 focus:outline-blue-900'>
//                                 {item2.options.map((option, index) => (
//                                   <option key={index} value={option.value} className='focus:shadow-md'>
//                                     {option.label}
//                                   </option>
//                                 ))}
//                               </select>
//                             ) : (
//                               <input
//                                 type={item2?.type}
//                                 placeholder={item2?.placeholder}
//                                 className='w-full max-w-[30rem] text-black p-2.5 border-[1.5px] rounded-lg m-2 focus:border-blue-900 focus:outline-blue-900'
//                               />
//                             )}
//                           </div>
//                         ))}
//                     </div>
//                     </div>
//                   })}
//                 <div className="flex justify-center items-center mt-4 ml-5 pb-3">
//                   <Link href='/StateManagement/Onboarding/InviteOwner'>
//                   <button className='text-white text-xl bg-black p-2 w-[10rem] rounded-lg'>Continue</button>
//                   </Link>
//                 </div>
//               </div>
//               <div className='ml-7'>
//                 <Invoices />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div >
//     </>
//   )
// }

// export default LOcation