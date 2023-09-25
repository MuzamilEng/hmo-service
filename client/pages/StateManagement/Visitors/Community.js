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

const Community = () => {
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
                <div className="flex justify-center items-center">
                    <Image src={img} width={200} height={200} className='rounded-full'/>
                </div>
                <div className="flex justify-center items-center flex-col p-2">
                    <p className='text-black text-lg font-semibold'>You do not belong to any Housing communities yet</p>
                    <p className='text-black font-thin '>Volutpat adipsing dummy content dicsco cosectures adipsing chalengge</p>
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

export default Community