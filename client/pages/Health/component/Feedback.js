import React from 'react'
import { Icon } from '@iconify/react';


const Feedback = () => {
  return (
    <div  className="p-2 border-b-2 border-gray-300">
            <p className='text-gray-900 ml-[2.5rem] p-2'>St. Imam Bonjo, Denpasar</p>
        <div className="flex justify-evenly -ml-[10rem] items-center">
            <span className='text-blue-500 text-2xl font-bold'>Scaling and Teeth Whitening </span>
            <p className='flex'>
            <Icon icon="solar:star-bold" className='text-blue-500' />
            <Icon icon="solar:star-bold" className='text-blue-500' />
            <Icon icon="solar:star-bold" className='text-blue-500' />
            <Icon icon="solar:star-bold" className='text-blue-500' />
            <Icon icon="solar:star-bold" className='text-blue-500' />
            <span> 5.0   </span>
            </p>
            <span className='text-blue-500 text-2xl font-bold'>$ 1000</span>
        </div>
        <div className="flex -ml-[5rem] justify-evenly items-center">
        <span className='text-gray-900 w-[25rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget facilisis tincidunt sed ante mauris, mauris, nulla.</span>
            <p className='text-gray-900'>Jun 10, 2021 - Jun 15, 2021</p>
            <span className='text-gray-900 -mt-3'>/ Appointment</span>
        </div>
    
    </div>
  )
}

export default Feedback