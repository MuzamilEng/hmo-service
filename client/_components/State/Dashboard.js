import Link from 'next/link'
import React from 'react'
import Clock from './Clock'
import { Icon } from '@iconify/react';
import CurrentDate from "./CurrentDate";
import { useRouter } from 'next/router';

const Dashboard = ({url, title}) => {
    const router = useRouter()
  return (
    <div>
        <div className="p-2 w-full max-w-[86rem] bg-[#ffff] shadow-lg mt-[1rem]">
            <div className="flex justify-between items-center p-2">
                <div className="flex justify-around">
                    <span className='text-black text-xl font-semibold'>Dashboard / </span><span className='text-black text-xl font-semibold'>
                        <Link href={url}><span className='ml-2'> {title}</span></Link>
                    </span>
                </div>
                <div className="flex justify-evenly items-center">
                    <span className='p-1 rounded-md   m-2 shadow-md text-gray-400 border-[1px] border-gray-300 text-center bg-[#ffff]'><Clock /> </span>      
                    <span style={{height: '2.5rem',}} className='p-2 rounded-md text-base ml-2 shadow-md text-gray-400 flex items-center text-center border-[1px] border-gray-300 bg-[#ffff] w-[15rem] h-[2rem] '><Icon icon="simple-line-icons:calender" className='text-xl' /><span className='ml-2'> <CurrentDate /> </span></span>
                    <Link href="/BusinessMgt/Form">
                        <span style={{backgroundColor: '#1a7cbc', height: '2.5rem'}} className='p-2 ml-2 cursor-pointer rounded-md border-[1px] border-gray-300 shadow-md flex justify-center  items-center text-center bg-[#1a7cbc] text-white'>+Create Property</span>
                        </Link>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Dashboard