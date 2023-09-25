import React from 'react'
import { Icon } from '@iconify/react';

const DoctorCard = ({name, rating, experience, speciality, title, imageURL, id, handleConsult}) => {
  // console.log(id, "doctorId");
  return (
    <div>
        <div className="bg-[#ffff] rounded-md p-1 w-full max-w-[22rem] m-3 shadow-md" key={id}>
                <h1 className='text-black text-center text-2xl font-semibold'>{title === 'Dr' ? "Doctor" : title}</h1>
                <div className="flex justify-evenly items-center p-1 mt-1">
                    <span className='p-2 bg-green-600 w-[3rem] m-2 h-[3rem] text-white text-center rounded-md'><Icon className='text-xl' icon="fe:arrow-left" color="white" /></span>
                    <img style={{borderRadius:"2rem"}} src={imageURL ? imageURL : '../../../assets/img/doctor.png'} alt="doctor" className='w-[15rem] border-[2px] border-red-500 h-[20rem]' />
                    <span className='p-2 bg-green-600 w-[3rem] m-2 h-[3rem] text-white text-center rounded-md'><Icon className='text-xl' icon="fe:arrow-right" color="white" /></span>
                </div>
                <div className="bg-[#000] rounded-md mt-[1rem]">
                    <p className='text-white text-sm text-center'>Name: {name}</p>
                    {/* <p className='text-white text-sm text-center'>Ratings: {rating ? rating : '4.5'}</p> */}
                    <p className='text-white text-sm text-center'>Experience: {experience ? experience : '2'} yrs</p>
                    <p className='text-white text-sm text-center'>Specialization: {speciality ? speciality : 'Generl Psychologist'}</p>
                </div>
                <div className="flex items-center justify-center mt-2 p-2">
                <button onClick={handleConsult} className='bg-red-600 rounded-md text-white p-1.5 text-center'>Consult Now</button>
                </div>
            </div>
    </div>
  )
}

export default DoctorCard