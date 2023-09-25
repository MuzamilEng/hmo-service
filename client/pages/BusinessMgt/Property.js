import React from 'react'
import Header from '../../layouts/Header';
import Navbar from '../../_components/State/Header';
import { properties } from '../StateManagement/Onboarding/Data';
import Sidebar from '../../layouts/Sidebar';
import PropertyCard from '../../_components/State/PropertyCard';
import Dashboard from '../../_components/State/Dashboard';


const Property = () => {
  let arr = [];
  return (
    <>
      <div>
        <div className="">
          <Header />
          <div className="flex">
            <div className="mt-[2.6%] pt-3 fixed top-0 left-0">
              <Sidebar />
            </div>
            <div className="absolute w-full max-w-[88rem] right-1">
              <Navbar />
              <div className="ml-[1rem]"><Dashboard title={'Property'} url={'BusinessMgt/Property'}/></div>
             <div className="grid mt-[1rem] grid-cols-4">
                {properties?.map((item, index) => (
                    <div key={index} className='top_radius mb-2'>
                        <PropertyCard icon={item?.icon} title={item?.title} img={item?.img} icon2={item?.icon2} icon3={item?.icon3} para={item?.para} property={item?.property} unit={item?.unit} room={item?.room} icon4={item?.icon4}/>
                    </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </div >
    </>
  )
}

export default Property