import React from 'react'
import { Icon } from '@iconify/react';


const Info = ({slotFromTime,slotToTime, practiceCategory,  feeInfo,regCouncil, description, coordinates}) => {
  return (
    <div  className="p-2">
        <div className="flex justify-evenly items-center">
            <p className='text-gray-900 font-bold text-xl w-[16rem]'>{practiceCategory ? practiceCategory : 'Orthodontics Denstist'}</p>
            <span className='text-gray-700 text-2xl w-[16rem] font-bold ml-[1rem]'>MON - FRI</span>
            <span className='text-blue-500 text-2xl w-[16rem] font-bold'>$ {feeInfo? feeInfo : '5000'}</span>
        </div>
        <div className="flex -ml-[4rem] justify-evenly items-center">
            <span className='text-blue-500 w-[16rem] text-xl -mt-[1rem] ml-[3.5rem] font-bold'>{regCouncil? regCouncil : 'Maria Dharma Perfect Dental Care'}</span>
            <p className='text-gray-900 w-[16rem]'>{slotFromTime? slotFromTime : '2:00AM'} - {slotToTime? slotToTime : '3:00AM'}</p>
            <span className='text-gray-900 w-[16rem]'>/ Appointment</span>
        </div>
        <div className="flex  justify-evenly items-center">
            <div className="flex -ml-[4rem] w-[16rem] justify-center items-center">
            <span className='text-blue-500 flex items-center'><Icon className='-ml-2 -pt-1 text-blue-500' icon="material-symbols:thumb-up" /> 95%</span> <span className='text-gray-500 ml-3'>(192 votes)</span>
            </div>
            <span className='text-gray-700 text-2xl w-[16rem] pl-[5rem] font-bold'>SAT</span>
            <span className='text-gray-900 text-2xl w-[16rem] font-bold'> </span>
        </div>
        <div className="flex p-2 justify-evenly items-center">
            <span className='text-gray-900 w-[22rem]'>{description}</span>
            <p className='text-gray-700 -ml-[5rem] w-[16rem]'>{slotFromTime? slotFromTime : '2:00AM'} - {slotToTime? slotToTime : '3:00AM'}</p>
            <span className='text-gray-900 text-2xl w-[16rem] font-bold'> </span>
        </div>
            <h2 className='text-blue-500 text-2xl font-bold ml-[6rem]'>GET DIRECTION</h2>
            <div className="border-b-2 border-gray-300 ml-[6rem] pb-2">
        <div className="mt-3 flex justify-between items-center w-[50rem]">
            <p>Location: <a onClick={(e)=> {e.preventDefault();}} className='text-blue-500 p-2 border-[1px] border-black' href={coordinates ? coordinates : 'https://www.google.com/maps'} target="_blank">{coordinates ? coordinates : 'https://www.google.com/maps'}</a></p>
            <div className="flex">
                <button className=' p-2 bg-blue-500 rounded-md text-white font-semibold text-center'>Book an Appointment</button>
            </div>
        </div>
         </div>
    </div>
  )
}

export default Info