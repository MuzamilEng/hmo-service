import React from 'react'
import Header from '../../../layouts/Header';
import Navbar from '../../../_components/State/Header';
import DropdownList from "../../../src/Compoment/DropdownList"
import { Location, maintainer, maintainerForm, maintenanceRequest } from './Data';
import Invoices from '../../../_components/State/Invoices';
import Link from 'next/link';
import img from "../../../assets/img/maintainer.png"
import Image from 'next/image';
import Sidebar from '../../../layouts/Sidebar';
import { ProgressBar } from './BranchOffice';
import MaintiReq from './MaintiReq';
import MaintainerForm from './MaintainerForm';

const types = ["All", "Plumber", "Painter", "Carpenter"]
const Maintainer = () => {
  let arr = [];
  const [progress, setProgress] = React.useState(0);
  const progressPercentage = (progress === 0 ? 0 : progress === 1 ? 34 : 68);

  const handleButtonClick = () => {
    if (progress < 2) {
      setProgress(progress + 1);
    }
  };
  return (
    <>
      <div>
        <div className="">
          <Header />
          <div className="flex">
            <div className="mt-[2.6%] pt-3 fixed top-0 left-0">
              {/* <DropdownList /> */}
              <Sidebar />
            </div>
            <div className="absolute w-full max-w-[88rem] right-1">
              <Navbar />
              <div className="text-center p-3 text-white text-3xl font-bold w-full max-w-[88rem] bg-[#000] m-2">Maintainers</div>
              <div className="w-full max-w-[88rem]"><ProgressBar percentage={progressPercentage} /></div>

              <div className="flex -mt-[1.5rem]">
                <div className="content mt-2 border-1 bg-[#ffff] border-gray-400 rounded-xl p-2 max-w-[28rem] w-full ml-3">
                    <div className="flex justify-center mb-2 pb-2 items-center text-2xl underline text-black font-bold">Setp 1</div>
                    <div className="flex justify-between items-center mt-2 ml-5 pb-3">
                        <button className='text-white text-md bg-black p-1 rounded-lg'>+ Cancel Maintainer</button>
                  <button className='text-white text-md bg-black p-1 rounded-lg'>+ Maintainance Request</button>
                  {/* <Link href='/StateManagement/Onboarding/MaintainerForm'>
                  </Link> */}
                </div>
                <div className="flex justify-evenly mb-2 items-center">
                    {types?.map((item, index) => (
                      <div key={index} className='p-1.5 mb-2 hover:text-white hover:bg-gray-400 text-black border-[1px] border-gray-400 rounded-md'>{item}</div>
                    ))}
                </div>
                  {maintainer?.map((item, index) => {
                      return <div key={index}>
                      
                        <div className="flex m-2">
                            <div className="image">
                              <Image src={img} width={140} height={135} alt="no image" />
                            </div>
                            <div className="container">
                                <div className="flex justify-between items-center">
                                    <div className="">
                                        <h1 className='text-black text-base'>{item?.name}</h1>
                                        <div className='flex items-center m-2'>
                                            <span className='text-lg'>{item?.icon2}</span>
                                            <span>{item?.review}</span>
                                        </div>
                                    </div>
                                    <div className="border-[1px] cursor-pointer border-gray-400 p-1 -mt-[2rem]"><span className='text-xl'>{item?.icon1}</span></div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span>{item?.title}</span> <span>{item?.telphone}</span>
                                </div>
                                <div className="flex">Property: {item?.property}</div>
                            </div>
                        </div>
                      </div>
                  })}
                  {/* <Link href='/StateManagement/Onboarding/MaintainerForm'>
                </Link> */}
                <button className='text-white flex justify-center items-center mt-[11rem] ml-[8rem] text-base bg-black p-1 rounded-lg' onClick={handleButtonClick} value={progress}>Continue Here</button>
              </div>
              {/* 2nd form */}
              <div className="max-w-[28rem] w-full"><MaintiReq handleButtonClick={handleButtonClick} progress={progress}/></div>
               {/* 3rd form */}
               <div className="max-w-[28rem] w-full">
                <MaintainerForm handleButtonClick={handleButtonClick} progress={progress}/>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div >
    </>
  )
}

export default Maintainer