import React, { useState } from 'react'
import Header from '../../../layouts/Header';
import Navbar from '../../../_components/State/Header';
import DropdownList from "../../../src/Compoment/DropdownList"
import Invoices from '../../../_components/State/Invoices';
import Link from 'next/link';
import Filter from '../../../_components/State/Filter';
import { piadUnpaid } from '../Onboarding/Data';
import Sidebar from '../../../layouts/Sidebar';

const Activity = () => {
  const [toggle, setToggle] = useState(true)
  let arr = [];
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
              <div className="flex justify-center items-center ">
                <div className="content mt-2 border-1 bg-[#ffff] border-gray-400 rounded-xl p-2 w-full max-w-[88rem]">
                    <Filter />
                    <div className="container p-2 m-2">
                        <div className="grid grid-cols-5 gap-3 p-2 bg-black rounded-md">
                            <span  className="text-white ml-[3rem]">Tenet</span>
                            <span  className="text-white">Upcoming Payment</span>
                            <span  className="text-white">Amount</span>
                            <span  className="text-white">Due</span>
                            <span  className="text-white">Status</span>
                        </div>
                       <div className="border-b-[1px] border-black">
                       {piadUnpaid?.map((item, index) => (
                        <div key={index} className={`grid grid-cols-5 ${item?.status === 'Paid' ? 'bg-gray-300' : ''} gap-3 p-2.5 text-center border-r-[1px] border-l-[1px] border-black`}><span style={{marginLeft: "-4rem"}} className="text-black">{item?.name}</span>
                                 <span style={{width: "2rem"}} className="text-black pt-1">{item?.date}</span>
                                <span style={{width: "2rem"}} className="text-black pt-1">{item?.amount}</span>
                                <span style={{width: "2rem"}} className="text-black pt-1">{item?.date}</span>
                                <span style={{width: "4rem"}} className={`text-black rounded-full text-center pt-1.5 h-8 ${item?.status === 'Paid' ? 'bg-[#00B167]' : 'bg-[#BD523A]'}`}>{item?.status}</span>
                            </div>
                        ))}
                       </div>
                    </div>
              </div>
              {/* <div className='ml-7'>
                <Invoices />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div >
    </>
  )
}

export default Activity