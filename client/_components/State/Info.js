import React from 'react'

const Info = ({ icon, name, email, icon2, icon3, info, address, phone, family, property, unit, s_date, e_date }) => {
    return (
        <div style={{ width: '100%', maxWidth: '26rem' }} className=' bg-[#ffff] p-2 rounded-md m-2'>
            <div className="flex justify-between items-center bg-gray-100 p-2">
                <div className="flex items-center">
                    <div style={{ backgroundColor: '#55d9eb' }} className="w-[4rem] h-[4rem] rounded-md text-center flex justify-center items-center"><span className='p-1 text-4xl bg-[#1a7cbc] rounded-md'>{icon}</span></div>
                    <div className=" ml-4">
                    <h2 style={{color: '#1a7cbc'}} className='text-lg font-bold'>{name}</h2>
                        <p style={{color: '#6aa8d1'}} className='text-base'>{email}</p>
                    </div>
                </div>
                <div className="flex  text-4xl"><span>{icon2}</span></div>
            </div>
            <div className="info p-1 ml-2 pl-2">
                <div className="flex items-center">
                    <span className='p-1 text-2xl rounded-full text-white'>{icon3}</span>
                    <p style={{color: '#1a7cbc'}} className='text-lg text-blue-800 font-semibold'>{info}</p>
                </div>
                <p className='text-base text-gray-400'>{address}</p>
                <p className='text-base text-black font-semibold'>Phone: <span className='text-gray-400'>  {phone}</span></p>
                <p className='text-base text-black font-semibold'>Unit: <span className='text-gray-400'>  {unit}</span></p>
                <p className='text-base text-black font-semibold'>Family Member: <span className='text-gray-400'>  {family}</span></p>
                <p className='text-base text-black font-semibold'>Property: <span className='text-gray-400'>  {property}</span></p>
                <p className='text-base text-black font-semibold'>Start Date: <span className='text-gray-400'>  {s_date}</span></p>
                <p className='text-base text-black font-semibold'>End Date: <span className='text-gray-400'>  {s_date}</span></p>

            </div>

        </div>
    )
}

export default Info