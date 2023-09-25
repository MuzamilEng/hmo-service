import React from 'react'
import { Controller, useForm } from 'react-hook-form';
import { bankSetup } from './Data';
import { Icon } from '@iconify/react';


const BankSetup = ({handleButtonClick, progress}) => {
  const { register, handleSubmit, control, formState: { errors } } = useForm();
  const [toggle, setToggle] = React.useState(true)

  const onSubmit2 = (data)=> {
    console.log(data);
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit2)}>
                      <div className="content mt-2 border-1 bg-[#ffff] border-gray-400 rounded-xl p-2 max-w-[28rem] w-full ml-3">
                        {bankSetup?.map((item, index) => {
                          return <div key={index}>
                            <div className="flex justify-center mb-2 pb-2 items-center text-2xl underline text-black"><h1 className='font-bold'>{'Step 2'}</h1></div>
                            <div className="flex flex-col">
                              {item?.form?.map((item2, index) => (
                                <div key={index} className='mb-2.5'>
                                  <label className='text-black text-base ml-4 ' htmlFor={item2?.label}>
                                    {item2?.label}
                                  </label><br />
                                  <Controller
                                    name={`example[${index}]`} // Use unique names for each input field
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                      item2?.type === 'select' ? (
                                        <select
                                          {...field}
                                          className='w-full max-w-[22rem] text-black p-2.5 border-[1.5px] rounded-lg m-2 focus:border-blue-900 focus:outline-blue-900'
                                        >
                                          {item2.options.map((option, index) => (
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
                            <div className="flex">
                              <span className='text-black font-bold m-2'>{item?.slpit_account}</span>
                              <span className='text-black font-thin ml-2 max-w-[22rem] w-full'>{item?.para}</span>
                            </div>
                            <div className="flex items-center">
                              <span className="text-black text-base font-semibold m-2">No</span>
                              {toggle ? <Icon className='text-4xl text-black' icon="gg:toggle-off" onClick={() => setToggle(!toggle)} /> : <Icon className='text-4xl text-black' icon="ri:toggle-line" onClick={() => setToggle(!toggle)} />}
                              <span className="text-black text-base font-semibold ml-2">Yes</span>
                            </div>
                            {toggle && <>
                              <div className="flex mt-2 flex-col">
                                {item?.split_form?.map((item2, index) => (
                                  <div key={index} className='mb-2.5'>
                                    <label className='text-black text-base ml-4 ' htmlFor={item2?.label}>
                                      {item2?.label}
                                    </label><br />
                                    <Controller
                                    name={`example1[${index}]`} // Use unique names for each input field
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                      item2?.type === 'select' ? (
                                        <select
                                          {...field}
                                          className='w-full max-w-[25rem] text-black p-2.5 border-[1.5px] rounded-lg m-2 focus:border-blue-900 focus:outline-blue-900'
                                        >
                                          {item2.options.map((option, index) => (
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
                                  {errors?.example1?.[index] && <span className='text-red'>This field is required</span>}
                                  </div>
                                ))}
                              </div>
                            </>}
                          </div>
                        })}

                        <div className="flex justify-around items-center mt-4 ml-5 pb-3">
                          {toggle && <button className='text-white text-base bg-black p-1 rounded-lg'>+ Add New Split Account</button>}
                          
                          <button onClick={handleButtonClick} value={progress} className='text-white text-base bg-black p-1 w-[8rem] rounded-lg'>Continue</button>
                        </div>
                      </div>
                    </form>
    </div>
  )
}

export default BankSetup
// import React from 'react'
// import Header from '../../../layouts/Header';
// import Navbar from '../../../_components/State/Header';
// import DropdownList from "../../../src/Compoment/DropdownList"
// import { bankSetup } from './Data';
// import Invoices from '../../../_components/State/Invoices';
// import Link from 'next/link';
// import { Icon } from '@iconify/react';
// import Sidebar from '../../../layouts/Sidebar';


// const BankSetup = () => {
//     const [toggle, setToggle] = React.useState(true)
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
//                   {bankSetup?.map((item, index) => {
//                     return <div key={index}>
//                       <div className="flex justify-center mb-2 pb-2 items-center text-2xl underline text-black"><h1>{item?.title}</h1></div>
//                       <div className="flex flex-col">
//                         {item?.form?.map((item2, index) => (
//                           <div key={index} className='mb-2.5'>
//                             <label className='text-black text-base ml-4 ' htmlFor={item2?.label}>
//                               {item2?.label}
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
//                     <div className="flex">
//                     <span className='text-black font-bold m-2'>{item?.slpit_account}</span>
//                     <span className='text-black font-thin ml-2 max-w-[22rem] w-full'>{item?.para}</span>
//                     </div>
//                     <div className="flex items-center">
//                         <span className="text-black text-base font-semibold m-2">No</span>
//                         {toggle ? <Icon className='text-4xl text-black' icon="gg:toggle-off" onClick={() => setToggle(!toggle)} /> : <Icon className='text-4xl text-black' icon="ri:toggle-line" onClick={() => setToggle(!toggle)}/>}
//                         <span className="text-black text-base font-semibold ml-2">Yes</span>
//                     </div>
//                     {toggle && <>
//                         <div className="flex mt-2 flex-col">
//                         {item?.split_form?.map((item2, index) => (
//                           <div key={index} className='mb-2.5'>
//                             <label className='text-black text-base ml-4 ' htmlFor={item2?.label}>
//                               {item2?.label}
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
//                     </>}
//                     </div>
//                   })}
                  
//                 <div className="flex justify-around items-center mt-4 ml-5 pb-3">
//                   {toggle && <button className='text-white text-lg bg-black p-2 rounded-lg'>+ Add New Split Account</button>}
//                   <Link href='/StateManagement/Onboarding/Maintainer'>
//                   <button className='text-white text-lg bg-black p-2 w-[10rem] rounded-lg'>Continue</button>
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

// export default BankSetup