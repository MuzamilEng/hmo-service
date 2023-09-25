import React from 'react'

const Card2 = ({icon, title, charges, price, time, tenant, icon2, bgColor, date}) => {
  return (
    <div style={{marginLeft: '-8rem'}} className='flex justify-center p-2  items-center'>
        <div style={{width: '100%', maxWidth: '50rem'}} className="items-center border-b-[1px] border-gray-300 p-2">
            <div className="p-1 flex justify-between items-center">
              <div className="flex items-center">
              <span style={{backgroundColor: bgColor}}  className={`text-white p-2 rounded-full text-2xl`}>{icon}</span>
              <span className='text-3xl ml-4 text-black'>{charges}</span>
              </div>
              <div className=" bg-gray-200 flex justify-center items-center rounded-full"><span className='text-3xl '>{icon2}</span></div>
              </div>
            <div className="ml-[3rem] -mt-[1rem]">
            <p className='text-gray-400 text-lg'>{price}</p>

                <div className="flex justify-between items-center">
                    <p className='text-black text-lg'>{time}</p>
                </div>
                    <div className="flex justify-between"><sapn className='text-black text-lg'>{date}</sapn><sapn className='text-black text-lg'>{tenant}</sapn></div>
            </div>
        </div>
    </div>
  )
}

export default Card2