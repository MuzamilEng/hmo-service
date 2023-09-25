import React, { useState } from 'react'
import Header from '../../../layouts/Header';
import Navbar from '../../../_components/State/Header';
import DropdownList from "../../../src/Compoment/DropdownList"
import Invoices from '../../../_components/State/Invoices';
import Link from 'next/link';
import Filter from '../../../_components/State/Filter';
import { payList, piadUnpaid } from '../Onboarding/Data';
import Sidebar from '../../../layouts/Sidebar';
import Dues from '../../../_components/State/Dues';

const Paylist = () => {
  const [toggle, setToggle] = useState(true)
  let arr = [];
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
              <div className="mt-2 flex justify-center items-center">
                <Dues title={'Dues Performance'} amount={"120 Tenants"} status={'Paid'} tent={'12 Tenants'} def={'1200'} unpaid={'Unpaid Default'} damount={'Unpaid'} untent={'12 Tenants'}/>
              </div>
              <div className="flex justify-center items-center">
                <div className="content mt-2 border-1 bg-[#ffff] border-gray-400 rounded-xl p-2 max-w-[77rem] w-full ml-3">
                    <Filter />
                    <div className="container p-2 m-2">
                        <div className="grid grid-cols-4 gap-3 p-2 bg-black rounded-md">
                            <span className="text-white">House Owner</span>
                            <span className="text-white">Tenant</span>
                            <span className="text-white">Address</span>
                            <Link href="Transactions"><span className="text-white">Status</span></Link>
                        </div>
                       <div className="border-b-[1px] border-black">
                       {payList?.map((item, index) => (
                        <div key={index} className={`grid grid-cols-4 ${item?.id !== 1 ? 'bg-gray-300' : ''} gap-3 p-2.5 text-center border-r-[1px] border-l-[1px] border-black`}><span style={{width: "6rem"}} className="text-black">{item?.name}</span>
                                <span style={{width: "2rem"}} className="text-black pt-1">{item?.amount}</span>
                                <span style={{width: "2rem"}} className="text-black pt-1">{item?.date}</span>
                                <span style={{width: "4rem"}} className={`text-black rounded-full text-center pt-1.5 h-8}`}>{item?.status}</span>
                            </div>
                        ))}
                       </div>
                    </div>
                    {/* next btn */}
            <div className="flex justify-center items-center mt-4 ml-5 pb-3">
                  <Link href='/StateManagement/Statemgt/Transactions'>
                  <button className='text-white text-xl bg-black p-2 w-[10rem] rounded-lg'>Continue</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
    </>
  )
}

export default Paylist