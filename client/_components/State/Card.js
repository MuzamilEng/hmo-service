import React from 'react'

const Card = ({icon, title, charges, price, time, tenant, icon2, bgColor, date}) => {
  return (
    <div style={{marginLeft: '-8rem'}} className='flex justify-center items-center'>
        <div style={{width: '100%', maxWidth: '50rem'}} className="items-center p-2">
            <div className="p-1 flex items-center">
              <span style={{backgroundColor: bgColor}}  className={`text-white p-2 rounded-full text-2xl`}>{icon}</span>
              <span className='text-4xl ml-4 text-black'>{title}</span>
              <div className="p-1"><span>{icon2}</span></div>

              </div>
            <br />
            <div className="ml-[3rem]">
                <p className='text-lg text-gray-500'>{charges}</p>
                <p className='text-black text-lg'>{price}</p>
                <div className="flex justify-between items-center">
                    <p className='text-black text-lg'>{time}</p>
                </div>
                    <div className="flex justify-between"><sapn className='text-black text-lg'>{date}</sapn><sapn className='text-black text-lg'>{tenant}</sapn></div>
            </div>
        </div>
    </div>
  )
}

export default Card