import React from 'react'
import { Fees } from './Data'
import Link from 'next/link'

const Fee = ({handleButtonClick, progress}) => {
  return (
    <div>
      
      <div className="content mt-2 border-1 bg-[#ffff] border-gray-400 rounded-xl p-2 max-w-[28rem] w-full ml-3">
                    {Fees?.map((item, index) => {
                      return <div className='' key={index}>
                        <div className="flex mb-2 pb-2 text-2xl justify-center underline text-black"><h1 className='font-bold'>{'Step 3'}</h1></div>
                        <p>{item?.info}</p>
                        <div className="flex flex-col">
                          {item?.form?.map((item2, index) => (
                            <div key={index} className='flex h-[4rem] border-b-2 border-gray-400'>
                              <div className="flex items-center m-1 w-[30rem]">
                                <input className='w-5 h-5 shadow-green-600' type={item2?.type} />
                                <p className='ml-2 text-base'>{item2?.title}</p>
                              </div>
                              <div className="flex m-2 items-center">
                                <select className='text-lg w-[5rem] text-black p-1.5 border-2 rounded-lg m-2 bg-[#fbfcff]  focus:outline-none'>
                                  {item2.month.map((option, index) => (
                                    <option key={index} value={option.value} className='focus:shadow-md'>
                                      {option.title}
                                    </option>
                                  ))}
                                </select>
                                <input type={item2?.amount} placeholder={item2?.placeholder}
                                  className='border-2 rounded-md p-1 w-[5rem] border-gray-400 m-2' />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    })}
                    <div className="flex justify-center items-center mt-4 ml-5 pb-3">
                      <Link href='/StateManagement/Onboarding/InviteOwner'>
                        <button onClick={handleButtonClick} value={progress} className='text-white text-base mt-[4rem] bg-black p-1 w-[8rem] rounded-lg'>Create Fee</button>
                      </Link>
                    </div>
                  </div>
    </div>
  )
}

export default Fee
// import React from 'react'
// import Header from '../../../layouts/Header';
// import Navbar from '../../../_components/State/Header';
// import DropdownList from "../../../src/Compoment/DropdownList"
// import { Fees } from './Data';
// import Invoices from '../../../_components/State/Invoices';
// import Link from 'next/link';
// import Sidebar from '../../../layouts/Sidebar';

// const Fee = () => {
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
//             <div className="absolute right-3">
//               <Navbar />
//               <div className="flex">
//                 <div className="content mt-2 border-1 bg-[#ffff] border-gray-400 rounded-xl p-2 w-full max-w-[35rem] ml-3">
//                   {Fees?.map((item, index) => {
//                     return <div className='' key={index}>
//                       <div className="flex mb-2 pb-2 text-2xl underline text-black"><h1>{item?.title}</h1></div>
//                       <p>{item?.info}</p>
//                       <div className="flex flex-col">
//                         {item?.form?.map((item2, index) => (
//                           <div key={index} className='flex h-[4rem] border-b-2 border-gray-400'>
//                             <div className="flex items-center m-1 w-[30rem]">
//                               <input className='w-5 h-5 shadow-green-600' type={item2?.type} />
//                               <p className='ml-2 text-base'>{item2?.title}</p>
//                             </div>
//                             <div className="flex m-2 items-center">
//                               <select className='text-lg w-[5rem] text-black p-1.5 border-2 rounded-lg m-2 bg-[#fbfcff]  focus:outline-none'>
//                                 {item2.month.map((option, index) => (
//                                   <option key={index} value={option.value} className='focus:shadow-md'>
//                                     {option.title}
//                                   </option>
//                                 ))}
//                               </select>
//                               <input type={item2?.amount} placeholder={item2?.placeholder} className='border-2 rounded-md p-1 w-[5rem] border-gray-400 m-2' />
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   })}
//                   <div className="flex justify-center items-center mt-4 ml-5 pb-3">
//                   <Link href='/StateManagement/Onboarding/BankSetup'>
//                   <button className='text-white text-xl bg-black p-2 w-[10rem] rounded-lg'>Create Fee</button>
//                   </Link>
//                 </div>
//                 </div>
//                 <div className='ml-7'>
//                   <Invoices />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div >
//     </>
//   )
// }

// export default Fee