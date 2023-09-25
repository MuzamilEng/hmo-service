import React from 'react'
import { footer } from '../../pages/StateManagement/Onboarding/Data'

const Footer = () => {
  return (
    <div>
        <div className="flex justify-evenly items-center mt-2 p-2 bg-[#ffff]">
                {footer?.map((item, index) => (
                  <div key={index} className='p-2 flex flex-col items-center'>
                    <span style={{ fontSize: item.title == 'Create' ? '3.5rem' : '2.2rem', color: item.title == 'Create' ? 'black' : 'gray' }} className='hover_blue'>{item?.icon}</span>
                    <p className='hover_blue text-lg'>{item?.title}</p>
                  </div>
                ))}
              </div>
    </div>
  )
}

export default Footer