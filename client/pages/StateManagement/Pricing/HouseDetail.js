import React from 'react'
import Header from '../../../layouts/Header';
import Navbar from '../../../_components/State/Header';
import DropdownList from "../../../src/Compoment/DropdownList"
import Invoices from '../../../_components/State/Invoices';
import Link from 'next/link';
import { houseDetail } from '../Onboarding/Data';
import Sidebar from '../../../layouts/Sidebar';

const HouseDetail = () => {
  let arr = [];
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
            <div className="absolute right-4">
              <Navbar />
              <div className="flex ">
                <div className="content mt-2 border-1 bg-[#ffff] border-gray-400 rounded-xl p-2 max-w-[33rem] w-full ml-3">
                  {houseDetail?.map((item, index) => {
                    return <div key={index}>
                      <div className="flex justify-center mb-2 pb-2 items-center text-2xl underline text-black"><h1>{item?.title}</h1></div>
                      <div className="">
                        <label htmlFor={item?.units?.label} className='text-black text-base ml-4 '>{item?.units?.label}</label>
                        <input type={item?.units?.type} placeholder={item?.units?.placeholder} className='w-full max-w-[30rem] text-black p-2.5 border-[1.5px] rounded-lg m-2 focus:border-blue-900 focus:outline-blue-900' />
                      </div>
                      <div className="flex justify-center items-center mt-4 ml-1 pb-3">
                  <button className='text-white text-xl bg-black p-1 w-[10rem] rounded-full'>Create Unit</button>
                </div>
                      <div className="flex flex-col justify-center items-center ml-[3rem]">
                      <div className="grid grid-cols-2 gap-2 justify-center">
                        {item?.form?.map((item2, index) => (
                          <div key={index} className='mb-2.5'>
                            <label className='text-black text-base ml-4 ' htmlFor={item2?.label}>
                              {item2?.label}
                            </label><br />
                            {item2?.type === 'select' ? (
                              <select className='w-full max-w-[30rem] text-black p-2.5 border-[1.5px] rounded-lg m-2 focus:border-blue-900 focus:outline-blue-900'>
                                {item2.options.map((option, index) => (
                                  <option key={index} value={option.value} className='focus:shadow-md'>
                                    {option.label}
                                  </option>
                                ))}
                              </select>
                            ) : (
                              <div className={`${item2?.width === 'w-1/2'? 'grid grid-cols-2': ""}`}>
                                <input
                                type={item2?.type}
                                placeholder={item2?.placeholder}
                                className='w-full max-w-[30rem] text-black p-2.5 border-[1.5px] rounded-lg m-2 focus:border-blue-900 focus:outline-blue-900'
                              />
                              </div>
                            )}
                          </div>
                        ))}
                    </div>
                      </div>
                    </div>
                  })}
                <div className="flex justify-center items-center mt-4 ml-1 pb-3">
                  <Link href='/StateManagement/Pricing/Fee'>
                  <button className='text-white text-xl bg-black p-1 w-[10rem] rounded-lg'>Continue</button>
                  </Link>
                </div>
              </div>
              <div className='ml-7'>
                <Invoices />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
    </>
  )
}

export default HouseDetail