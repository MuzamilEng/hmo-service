import React from 'react'
import Header from '../../../layouts/Header';
import Navbar from '../../../_components/State/Header';
import Invoices from '../../../_components/State/Invoices';
import Link from 'next/link';
import Sidebar from '../../../layouts/Sidebar';
import { qrCode } from '../Onboarding/Data';
import Dues from '../../../_components/State/Dues';

const GuestList = () => {
  return (
    <>
      <div>
        <div className="">
          <Header />
          <div className="flex">
            <div className="mt-[2.6%] pt-3 fixed top-0 left-0">
              <Sidebar />
            </div>
            <div  className="absolute w-full max-w-[88rem] right-1">
              <Navbar />
              <div className="flex justify-center items-center">
                <div className="content mt-2 border-1 bg-[#ffff] border-gray-400 rounded-xl max-w-[70rem] p-2 w-full ml-3">
                    {/* <div className="flex justify-center mb-2 pb-2 items-center text-2xl underline text-black">Maintainer</div> */}
                    {/* <div className="flex justify-between items-center mt-2 ml-5 pb-3">
                        <button className='text-white text-base bg-black p-1 rounded-lg'>+ Cancel Maintainer</button>
                  <Link href='/StateManagement/Onboarding/MaintainerForm'>
                  <button className='text-white text-base bg-black p-1 rounded-lg'>+ Maintainance Request</button>
                  </Link>
                </div> */}
                  {qrCode?.map((item, index) => {
                    // icon1, icon2, name, property, review, title, telephone
                      return <div key={index} className='bg-gray-300 m-2 rounded-md'>
                      
                        <div className="flex items-center">
                            <div className="bg-[#D8C4C4] max-w-[5rem] p-2 w-full h-[5rem] rounded-md">
                              <span className='bg-[#D8C4C4] max-w-[10rem] p-2 pb-4 w-full h-[10rem] rounded-md'> </span>
                            </div>
                            <div className="container">
                                <div className="flex justify-between items-center">
                                    <div className="">
                                        <h1 className='text-black text-lg'>{item?.name}</h1>
                                        <span style={{paddingTop: '1rem'}} className='mt-2 pt-3'>{item?.date}</span>
                                    </div>
                                    <div className=" p-1"><div className=''>
                                       <div className="flex items-center m-2"> <span className='-ml-[2rem] text-black'> Code: {item?.code}</span> <span className='text-3xl bg-gray-100 ml-[1rem] rounded-full p-1'>{item?.icon}</span></div>
                                        <p>{item?.time}</p>
                                        </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                      </div>
                  })}
                   {/* next btn */}
            <div className="flex justify-center items-center mt-4 ml-5 pb-3">
                  <Link href='/StateManagement/Tenant/TenantDashboard'>
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

export default GuestList