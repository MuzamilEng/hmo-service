import React, { useState } from 'react'
import HospitalLayout from '../../../src/layouts/HospitalLayout'
import ProfileTabPanel from '../../../src/views/DoctorsTabPanels/ProfileTabPanel/ProfileTabPanel'
import Navbar from "../../../src/Compoment/Navbar"
import DropdownList from '../../../src/Compoment/DropdownList'
import { Icon } from '@iconify/react';
import Info from '../component/Info'
import Feedback from '../component/Feedback'
import { useRouter } from 'next/router';

function profiles() {
  const [showInfo, setShowInfo] = useState(true)
  const router = useRouter();
  const { doctor } = router.query;
  const doctorObject = doctor ? JSON.parse(doctor) : null;
  console.log(doctorObject, "doctorObject");
  return (
    <>
      <Navbar/>
    <div className="flex" style={{fontSize: "1.2rem"}}>
      <div className="">
        <DropdownList />
      </div>
      <div className="w-full">
      <HospitalLayout>
        {/* profile doctor */}
        <main className="">
            <nav className='w-full p-4 bg-gray-300'><h1 className='text-black text-2xl font-semibold'>Profile</h1></nav>
            <div className="relative">
            <div className="img w-full">
                <img src="../../../assets/img/doctor_room.png" alt="room" className='w-full' />
            </div>
                <img src={doctorObject?.imageURL ? doctorObject?.imageURL : '../../../assets/img/doctor.png'} alt="doctor" className='absolute -mt-[5rem] w-[10rem] h-[10rem] left-[30rem] rounded-full border-4 border-blue-600' />
            </div>
            <div className="flex mt-[6rem] -ml-[2rem] flex-col justify-center items-center p-2">
                <h1 className='text-black text-4xl p-2 font-semibold'>{doctorObject?.name}</h1>
                <p className='text-gray-800 text-base text-justify w-[26rem]'>{doctorObject?.education?.[0]?.speciality ? doctorObject?.education?.[0]?.speciality : "General Physician"}, {doctorObject?.education?.[0]?.qualificationTitle ? doctorObject?.education?.[0]?.qualificationTitle : "Doctor of Medicine"}, {doctorObject?.education?.[0]?.qualificationType? doctorObject?.education?.[0]?.qualificationType : "MBBS"}, {doctorObject?.education?.[0]?.yearOfCompletion ? doctorObject?.education?.[0]?.yearOfCompletion : "2022"}, {doctorObject?.education?.[0]?.awardingInstitution ? doctorObject?.education?.[0]?.awardingInstitution : "Government Medical College USA"}, {doctorObject?.establishmentName}.</p>
            </div>
            <div className="mt-3 p-2 flex justify-center item-center">
                <span className='text-blue-00 flex items-center'><Icon className='-ml-2 -pt-1 text-blue-500' icon="material-symbols:thumb-up" /> 95%</span> <span className='text-gray-500 ml-3'>(192 votes)</span>
            </div>
            <ul className="mt-3 flex justify-evenly border-b-[3px] border-gray-300 items-center p-2">
                <li className="flex justify-between items-center" onClick={() => setShowInfo(true)}>
                    <span  className='text-gray-500 hover:border-b-2 hover:border-blue-700 text-2xl cursor-pointer flex items-center'><Icon className='text-3xl' icon="mingcute:paper-line" /> Info</span>
                </li>
                <li className="flex justify-between items-center" onClick={() => setShowInfo(false)}>
                    <span className='text-gray-500 hover:border-b-2 hover:border-blue-700 text-2xl cursor-pointer flex items-center'><Icon className='text-3xl' icon="fluent:person-feedback-20-regular" /> Feedback</span>
                </li>
                <a href="/Health/doctors/ConsultDoctor">
                <li className="flex justify-between items-center">
                    <span className='text-gray-500 hover:border-b-2 hover:border-blue-700 text-2xl cursor-pointer flex items-center'><Icon className='text-2xl' icon="wpf:medical-doctor" /> Consult Q&A</span>
                </li>
                </a>
            </ul>
            {/* info-component */}
            <div>
              {showInfo ? <div className="info">
                {/* slotFromTime,slotToTime, practiceCategory, regCouncil */}
              <Info slotFromTime={doctorObject?.slotFromTime} coordinates={doctorObject?.coordinates} feeInfo={doctorObject?.feesInfo?.videoCall?.price} description={doctorObject?.description} slotToTime={doctorObject?.slotToTime} practiceCategory={doctorObject?.education?.[0]?.speciality} regCouncil={doctorObject?.regCouncil}/>
              <Info slotFromTime={doctorObject?.slotFromTime} coordinates={doctorObject?.coordinates} description={doctorObject?.description} slotToTime={doctorObject?.slotToTime} practiceCategory={doctorObject?.education?.[0]?.speciality} regCouncil={doctorObject?.regCouncil}/>
              </div> : <div className="feedback">
              <Feedback />
              <Feedback />
              </div>}
            </div>
        </main>
      <ProfileTabPanel />
    </HospitalLayout>
    
      </div>
    </div>
    </>
    
  )
}

// index.getLayout = page => <CustomLayout>{page}</CustomLayout>

export default profiles
