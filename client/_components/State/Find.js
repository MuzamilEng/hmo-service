import React from 'react'
import { Icon } from '@iconify/react';

const Find = ({title}) => {
  return (
    <div>
        <div className="container border-[1px] rounded-md border-gray-500 p-3 ">
                    <div className="flex justify-between">
                        <div className="flex items-center">
                        <Icon icon="ep:search" color="gray" className='text-xl'/>
                            <input type="search" placeholder={title} className='p-2 border-none w-full max-w-[25rem] focus:outline-none' />
                        </div>
                        <Icon style={{color: 'white', backgroundColor: "blue"}} icon="mi:filter" className='text-3xl rounded-md' />
                    </div>
                 </div>
    </div>
  )
}

export default Find