import React, { useState } from 'react'
import Header from '../../../layouts/Header';
import Navbar from '../../../_components/State/Header';
import DropdownList from "../../../src/Compoment/DropdownList"
import Invoices from '../../../_components/State/Invoices';
import Link from 'next/link';
import Filter from '../../../_components/State/Filter';
import { guestInvited, piadUnpaid, tenantPayments } from '../Onboarding/Data';
import Sidebar from '../../../layouts/Sidebar';
import BarChart from '../../../_components/State/Chart/BarChart';
import { data } from '../../../_components/State/Chart/data';
import Card from '../../../_components/State/Card';
import Dues from '../../../_components/State/Dues';

const OwnerStats = () => {
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
              <div className="flex m-3 justify-center items-center">
                <Dues title={'Dues Performance'} amount={"120 Tenants"} status={'Paid'} tent={'12 Tenants'} def={'1200'} unpaid={'Unpaid Default'} damount={'Unpaid'} untent={'12 Tenants'}/>
              </div>
              <div className="container pl-[2rem] bg-[#ffff]">
                {tenantPayments?.map((item, index) => (
                  <div key={index} className='mb-2' >
                    <h3 className='text-lg'>{item.title}</h3>
                    <h1 className='text-black text-3xl font-semibold pt-2'>{item?.month}</h1>
                    <p className="text-black text-base font-thin">{item?.info}</p>
                    <div className="flex justify-center items-center">
                    <BarChart data={data} />
                    </div>
                  </div>
                ))}
            </div>
            {/* charges */}
            <div className="container -mt-[1rem] pb-[5rem] bg-[#fff] pl-[2rem]">
                {tenantPayments?.map((item, index) => (
                  <div key={index} className='mb-2' >
                    <h3 className='text-lg'>{item.title}</h3>
                    <h1 className='text-black text-3xl font-semibold pt-2'>{item?.month}</h1>
                    <p className="text-black text-base font-thin">{item?.info}</p>
                    <div className="flex justify-center items-center">
                    <BarChart data={data} />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div >
    </>
  )
}

export default OwnerStats