import React from 'react'
import Header from '../../../layouts/Header';
import Navbar from '../../../_components/State/Header';
import { Icon } from '@iconify/react';
import Invoices from '../../../_components/State/Invoices';
import Link from 'next/link';
import Sidebar from '../../../layouts/Sidebar';
import Image from 'next/image';
import img from "../../../assets/img/Frame.png"
import Find from '../../../_components/State/Find';

const Validation = () => {
  return (
    <>
      <div>
        <div className="">
          <Header />
          <div className="flex">
            <div className="mt-[2.6%] pt-3 fixed top-0 left-0">
              <Sidebar />
            </div>
            <div className="absolute right-4">
              <Navbar />
              <div className="flex ">
                <div className="content mt-2 border-1 bg-[#ffff] border-gray-400 rounded-xl p-2 max-w-[33rem] w-full ml-3">
                 <Find title={'Enter Community ID '}/>
                <div className="flex justify-center items-center mt-4 ml-5 pb-3">
                  <Link href='/StateManagement/Visitors/HouseID'>
                  <button className='text-white text-base bg-[#333333] p-2 max-w-[10rem] w-full rounded-full'>Continue</button>
                  </Link>
                </div>
                <div className="">
                    <h1 className='text-black text-lg font-semibold'>Guest Code Validation </h1>
                    <div className="flex justify-evenly p-3 items-center">
                        <div className="p-4 w-[4rem] h-[4rem] border-[1px] border-gray-300 rounded-md"><span> </span></div>
                        <div className="ml-2 text-left">
                            <p className='text-black text-base'>Guest Name</p>
                            <p className='text-gray-400 text-base'>Date in: Tue 01, October</p>
                            <p className='text-gray-400 text-base'>Planned Date Out: Tue, 01 October</p>
                        </div>
                    </div>
                        <p className='text-black font-semibold text-lg'>Host: </p>
                        <p className='text-black font-semibold text-lg'>Address: </p>
                </div>
                <div className="flex justify-center items-center mt-4 ml-5 pb-3">
                  <Link href='#'>
                  <button className='text-white text-base bg-[#525151] p-2 max-w-[10rem] w-full rounded-full'>Exist Guest</button>
                  </Link>
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

export default Validation