import Link from 'next/link'
import React from 'react'
import Clock from './Clock'
import { Icon } from '@iconify/react';
import CurrentDate from "./CurrentDate";

const Dashboard2 = ({ title}) => {
  return (
    <div>
        <div className="p-2 w-full max-w-[86rem] bg-[#ffff] shadow-lg mt-[1rem]">
            <div className="flex justify-between items-center p-2">
                <div className="flex justify-around">
                    <span className='text-black text-base font-semibold'>Dashboard / </span><span className='text-black text-base font-semibold'>
                        <span className='ml-2'> {title}</span>
                    </span>
                </div>
                <div className="flex justify-evenly items-center">
                    <span className='p-1 rounded-md   m-2 shadow-md text-gray-400 border-[1px] border-gray-300 text-center bg-[#ffff]'><Clock /> </span>      
                    <span style={{height: '2.5rem',}} className='p-2 rounded-md text-sm ml-2 shadow-md text-gray-400 flex items-center text-center border-[1px] border-gray-300 bg-[#ffff] w-[15rem] h-[2rem] '><Icon icon="simple-line-icons:calender" className='text-xl' /><span className='ml-2'> <CurrentDate /> </span></span>
                    <span style={{backgroundColor: '#1a7cbc', height: '2.5rem'}} className='p-2 ml-2 cursor-pointer rounded-md border-[1px] border-gray-300 shadow-md text-sm flex justify-center  items-center text-center bg-[#1a7cbc] text-white'>+ Create Maintainance Request</span>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Dashboard2