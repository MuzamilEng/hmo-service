import React, { useState } from 'react'
import Header from '../../../layouts/Header';
import Navbar from '../../../_components/State/Header';
import DropdownList from "../../../src/Compoment/DropdownList"
import Invoices from '../../../_components/State/Invoices';
import Link from 'next/link';
import Filter from '../../../_components/State/Filter';
import { guestInvited, piadUnpaid } from '../Onboarding/Data';
import Sidebar from '../../../layouts/Sidebar';
import BarChart2 from '../../../_components/State/Chart/BarChart2';
import { data2 } from '../../../_components/State/Chart/data2';
import Card from '../../../_components/State/Card';
import Dues from '../../../_components/State/Dues';

const OwnerDashboard = () => {
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
                {guestInvited?.map((item, index) => (
                  <div key={index} className='mb-2' >
                    <h3 className='text-lg font-bold'>{item.title}</h3>
                    <h1 className='text-black text-3xl font-semibold pt-2'>{item?.month}</h1>
                    <p className="text-black text-base font-thin">{item?.info}</p>
                    <div className="flex justify-center items-center">
                    <BarChart2 data={data2} />
                    </div>
                    <div className="pt-3">
                        {item?.form?.map((item2, index) => (
                          <div key={index}>
                            <Card icon={item2?.icon} title={item2?.title} date={item2?.date} charges={item2?.charges}  price={item2?.price} tenant={item2?.tenant} bgColor={item2?.bg} time={item2?.time}/>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
            </div>
            {/* next btn */}
            <div className="flex justify-center items-center mt-4 ml-5 pb-3">
                  <Link href='/StateManagement/Dashboard/OwnerStats'>
                  <button className='text-white text-xl bg-black p-2 w-[10rem] rounded-lg'>Continue</button>
                  </Link>
                </div>
          </div>
        </div>
      </div>
    </div >
    </>
  )
}

export default OwnerDashboard