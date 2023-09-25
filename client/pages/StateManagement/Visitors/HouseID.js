import React from 'react'
import Header from '../../../layouts/Header';
import Navbar from '../../../_components/State/Header';
import { Icon } from '@iconify/react';
import Invoices from '../../../_components/State/Invoices';
import Link from 'next/link';
import Sidebar from '../../../layouts/Sidebar';
import Image from 'next/image';
import img from "../../../assets/img/Frame.png"
import Find from '../../../_components/State/Find';
import { ProgressBar } from '../Onboarding/BranchOffice';

export const GoogleMapEmbed = () => {
    return (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.46311106515!2d3.119146638368104!3d6.548369364310211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1693000285243!5m2!1sen!2sus"
        width={400}
        height={400}
        style={{ border: 0, borderRadius: "50%" }}
        allowFullScreen=""
        loading="lazy"
      />
    );
  }
  
  

const HouseID = () => {
  const [progress, setProgress] = React.useState(0);
  const progressPercentage = (progress === 0 ? 0 : progress === 1 ? 50 : 100);

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
              <Sidebar />
            </div>
            <div className="absolute w-full max-w-[88rem] right-1">
              <Navbar />
              <div className="text-center p-3 text-white text-3xl font-bold w-full max-w-[86rem] bg-[#000] m-2">Visitors</div>
              <div className="w-full max-w-[85rem]"><ProgressBar percentage={progressPercentage} /></div>
              <div className="flex justify-center -mt-[1.5rem]">
                <div className="content mt-2 border-1 bg-[#ffff] border-gray-400 rounded-xl p-2 max-w-[43rem] w-full ml-3">
                 <Find title={'Enter House ID '}/>
                 <div className="flex justify-center items-center mt-2 p-2 rounded-full">
              <GoogleMapEmbed />
                 </div>
                 <div className="container">
                    <p className='text-black text-lg font-semibold'>Address:</p>
                    <p className='text-black text-sm font-thin'>Map:</p>
                 </div>
                <div className="flex justify-around items-center mt-4 ml-5 pb-3">
                  {/* <Link href='/StateManagement/Visitors/VisitorForm'>
                  </Link> */}
                  <button className='text-white text-base bg-[#333333] p-2 max-w-[10rem] w-full rounded-full' onClick={handleButtonClick} value={progress}>Join</button>
                  <button className='text-white text-base bg-[#b4b4b4] p-2 max-w-[10rem] w-full rounded-full'>Cancel</button>
                </div>
              </div>
              {/* 2nd form */}
              <div className="flex max-w-[40rem] w-full">
                <div className="content mt-2 border-1 bg-[#ffff] border-gray-400 rounded-xl p-2 max-w-[40rem] w-full ml-3">
                 <Find title={'Enter Community ID '}/>
                <div className="flex justify-center items-center mt-4 ml-5 pb-3">
                  <Link href='/StateManagement/Visitors/VisitorForm'>
                  <button className='text-white text-base bg-[#333333] p-2 max-w-[10rem] w-full rounded-full' onClick={handleButtonClick} value={progress}>Continue</button>
                  </Link>
                </div>
                <div className="flex justify-center items-center">
                    <Image src={img} width={200} height={200} className='rounded-full'/>
                </div>
                <div className="flex justify-center items-center flex-col p-2">
                    <p className='text-black text-lg font-semibold'>You do not belong to any Housing communities yet</p>
                    <p className='text-black font-thin '>Volutpat adipsing dummy content dicsco cosectures adipsing chalengge</p>
                </div>
              </div>
              {/* <div className='ml-7'>
                <Invoices />
              </div> */}
            </div>
            </div>
          </div>
        </div>
      </div>
    </div >
    </>
  )
}

export default HouseID