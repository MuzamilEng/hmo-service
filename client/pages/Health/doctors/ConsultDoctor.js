import React from 'react'
import HospitalLayout from '../../../src/layouts/HospitalLayout'
import ProfileTabPanel from '../../../src/views/DoctorsTabPanels/ProfileTabPanel/ProfileTabPanel'
import Navbar from "../../../src/Compoment/Navbar"
import DropdownList from '../../../src/Compoment/DropdownList'
import DoctorCard from '../component/DoctorCard'
import { useGlobalContext } from '../../../store/authStore'
import { useRouter } from 'next/router'

function ConsultDoctor() {
  const {doctors} = useGlobalContext()
  const router = useRouter()

  const handleConsult = (doctor) => {
    console.log(doctor, "doctor hai uye")
    if(doctor){
    router.push({
      pathname: '/Health/doctors/doctorProfile',
      query: { doctor: JSON.stringify(doctor) },
   })
  }
}
  

  return (
    <>
      <Navbar/>
    <div className="flex" style={{fontSize: "1.2rem"}}>
      <div className="">
        <DropdownList />
      </div>
      <div className="w-full">
      <HospitalLayout>
        <div className="">
            <h1 className='text-black text-2xl font-semibold p-2'>Featured Health Insurance Providers</h1>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {doctors?.slice?.(-6)?.map((doctor) => (
            <DoctorCard key={doctor?.id} id={doctor?.id} handleConsult={()=> handleConsult(doctor)} name={doctor?.name} imageURL={doctor?.imageURL} rating={doctor?.rating} experience={doctor?.yearsOfExperience} speciality={doctor?.education?.[0]?.speciality} title={doctor?.title}/>
          ))}
        </div>
      <ProfileTabPanel />
    </HospitalLayout>
    
      </div>
    </div>
    </>
    
  )
}

export default ConsultDoctor
