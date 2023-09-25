import React from 'react'
import { Icon } from '@iconify/react';
import Link from 'next/link';

const Filter = () => {
    return (
        <div>
            <div className="container bg-black w-full max-w-[88rem] h-[8rem] p-3 rounded-md">
                <div style={{ fontSize: "2rem" }} className="flex justify-around">
                    <div className="flex flex-col items-center">
                        <Link href="/StateManagement/Dashboard/Activity" >
                    <span className="p-2 text-white text-base Underline_red">All</span>
                    </Link>
                    <div className="flex items-center bg-gray-100 rounded-md">
                        <Icon style={{ fontSize: "2rem" }} icon="majesticons:filter" color="purple" /><span className="ml-2 text-lg  p-2">Filter</span>
                    </div>
                    </div>
                    <div className="">
                    <Link href="/StateManagement/Dashboard/Activity2" >
                    <span style={{marginLeft: '7rem'}} className="p-2 text-white text-base Underline_red ">Invite Tenat</span>
                    </Link> <br />
                    <input type="search" placeholder='Search' className='p-2 w-[30rem] text-base bg-gray-100 rounded-md focus:outline-none' />
                    </div>
                    <div className="flex flex-col items-center">
                    <Link href="/StateManagement/Dashboard/Complaint" >
                    <span className="p-2 ml-[6rem] text-white text-base Underline_red">File a complaint</span>
                    </Link>
                    <Icon style={{ fontSize: "2.4rem", color: "black" }} icon="solar:object-scan-bold" className='bg-gray-300 rounded-sm' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filter