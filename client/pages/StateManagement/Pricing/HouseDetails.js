import React from 'react'
import { houseDetails } from '../Onboarding/Data'
import { useRouter } from 'next/router';
import { Controller, useForm } from 'react-hook-form';

const HouseDetails = ({handleButtonClick, progress}) => {
  const { register, handleSubmit, control, formState: { errors } } = useForm();
  const router = useRouter();
  const onSubmit2 = (data) => {
    // Check if there are validation errors
    if (Object.keys(errors).length === 0) {
      // No validation errors, navigate to the next page
      router.push('/StateManagement/Pricing/Order');
    } else {
      // Validation errors exist, do not navigate
      console.log(data);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit2)} className='max-w-[28rem]w-full'>
      <div className="content mt-2 border-1 bg-[#ffff] border-gray-400 rounded-xl p-2 max-w-[28rem]w-full  ml-3">
                  {houseDetails?.map((item, index) => {
                    return <div key={index}>
                      <div className="flex justify-center mb-2 pb-2 items-center text-2xl underline text-black"><h1 className='font-bold'>{'Step 3'}</h1></div>
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
                                          className='w-full max-w-[25rem] text-black p-2.5 border-[1.5px] rounded-lg m-2 focus:border-blue-900 focus:outline-blue-900'
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
                                          className='w-full max-w-[25rem] text-black p-2.5 border-[1.5px] rounded-lg m-2 focus:border-blue-900 focus:outline-blue-900'
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
                  <div className="flex justify-around items-center mt-[7.5rem] pt-4 ml-5 pb-3">
                      <button className='text-white text-base bg-black p-1 w-full max-w-[8rem] rounded-full' onClick={handleButtonClick} value={progress}>Continue</button>
                    <button className='text-white text-base bg-gray-500 mr-5 p-1 w-full max-w-[10rem] rounded-full'>Add More House</button>
                  </div>
                </div>
      </form>
    </div>
  )
}

export default HouseDetails


// import React from 'react'
// import Header from '../../../layouts/Header';
// import Navbar from '../../../_components/State/Header';
// import DropdownList from "../../../src/Compoment/DropdownList"
// import Invoices from '../../../_components/State/Invoices';
// import Link from 'next/link';
// import { houseDetails } from '../Onboarding/Data';
// import Sidebar from '../../../layouts/Sidebar';

// const HouseDetails = () => {
//   let arr = [];
//   return (
//     <>
//       <div>
//         <div className="">
//           <Header />
//           <div className="flex">
//             <div className="mt-[2.6%] fixed pt-3 z-10">
//               {/* <DropdownList /> */}
//               <Sidebar />
//             </div>
//             <div className="absolute right-4">
//               <Navbar />
//               <div className="flex ">
//                 <div className="content mt-2 border-1 bg-[#ffff] border-gray-400 rounded-xl p-2 w-full max-w-[34rem] ml-3">
//                   {houseDetails?.map((item, index) => {
//                     return <div key={index}>
//                       <div className="flex justify-center mb-2 pb-2 items-center text-2xl underline text-black"><h1>{item?.title}</h1></div>
//                       <div className="flex flex-col">
//                         {item?.form?.map((item2, index) => (
//                           <div key={index} className='mb-2.5'>
//                             <label className='text-black text-base ml-4' htmlFor={item2?.title}>
//                               {item2?.title}
//                             </label> <br />
//                             {item2?.type === 'select' ? (
//                               <select className='w-full max-w-[30rem] text-black p-2.5 border-[1.5px] rounded-lg m-2 focus:border-blue-900 focus:outline-blue-900'>
//                                 {item2?.options?.map((option, index) => (
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
//                 <div className="flex justify-around items-center mt-4 pt-4 ml-5 pb-3">
//                   <Link href='/StateManagement/Pricing/HouseDetail'>
//                   <button className='text-white text-xl bg-black p-1 w-full max-w-[10rem] rounded-full'>Continue</button>
//                   </Link>
//                   <button className='text-white text-xl bg-gray-500 mr-5 p-1 w-full max-w-[15rem] rounded-full'>Add More House</button>
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

// export default HouseDetails