import React, { useState } from 'react'
import Header from '../../../layouts/Header';
import Navbar from '../../../_components/State/Header';
import DropdownList from "../../../src/Compoment/DropdownList"
import { Fees, bankSetup, stateSetup } from './Data';
import Invoices from '../../../_components/State/Invoices';
import Link from 'next/link';
import Sidebar from '../../../layouts/Sidebar';
import { Icon } from '@iconify/react';
import { useForm, Controller } from 'react-hook-form';
import BankSetup from './BankSetup';
import Fee from './Fee';


// components/ProgressBar.js
export const ProgressBar = ({ percentage }) => {
  return (
    <div className="progress w-full max-w-[85rem] ml-3">
      <div
        className="bg-[#4CD964] p-4"
        role="progressbar"
        style={{ width: `${percentage}%` }}
        aria-valuenow={percentage}
        aria-valuemin="10"
        aria-valuemax="100"
      >
        {`${percentage}%`}
      </div>
    </div>
  );
};

const BranchOffice = () => {
  const { register, handleSubmit, control, formState: { errors } } = useForm();

  const [toggle, setToggle] = React.useState(true)
  const [inputVal, setInputVal] = useState('')
  const [progress, setProgress] = React.useState(0);
  const progressPercentage = (progress === 0 ? 0 : progress === 1 ? 33 : progress > 1 && progress <= 2 ? 66 : 100);

  const handleButtonClick = () => {
    if (progress <= 2) {
      setProgress(progress + 1);
    }
  };
  const onSubmit = (data) => {
    console.log(data);
    // Your form submission logic here
  };
  
  const onSubmit2 = (data)=> {
    console.log(data);
  }

  return (
    <>
      <div>
        <div className="">
          <Header />
          <div className="max-w-screen w-full relative">
            <div className="mt-[2.6%] pt-3 fixed top-0 left-0">
              <Sidebar />
            </div>
            <div className="">
              <div  className="absolute w-full max-w-[88rem] right-0">
                <Navbar />
                <div className="text-center p-3 text-white text-3xl font-bold w-full max-w-[88rem] bg-[#000] m-2">Estate Management</div>
                <div className="w-full max-w-[88rem]"><ProgressBar percentage={progressPercentage} /></div>
                <div className="flex -mt-[1.5rem]">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="content mt-2 border-1 bg-[#ffff] border-gray-400 rounded-xl p-2 max-w-[28rem] w-full ml-3">
                      {stateSetup?.map((item, index) => {
                        return <div key={index}>
                          <div className="flex justify-center mb-2 pb-2 items-center text-2xl underline text-black">
                            <h1 className='font-bold'>{'Step 1'}</h1>
                          </div>
                          <div className="flex flex-col">
                            {item?.form?.map((item2, index) => (
                              <div key={index} className='mb-2.5' >
                                <label className='text-black text-base ml-4 ' htmlFor={item2?.title}>{item2?.title}</label> <br />
                                <Controller
                                  name={`exampleRequired[${index}]`} // Use unique names for each input field
                                  control={control}
                                  defaultValue=""
                                  render={({ field }) => (
                                    <input
                                      {...field}
                                      type={item2?.type}
                                      placeholder={item2?.placeholder}
                                      className='w-full max-w-[25rem] text-black p-2.5 border-[1.5px] rounded-lg m-2 focus:border-blue-900 focus:outline-blue-900'
                                    />
                                  )}
                                  rules={{ required: true }}
                                />
                                {errors?.exampleRequired?.[index] && <span className='text-red text-sm ml-3'>This field is required</span>}
                              </div>
                            ))}
                            <p className='text-black max-w-[30rem] w-full text-base text-center'>{item?.para}</p>
                            <div className="info p-2 -mt-[1rem] flex justify-center items-center">
                              {item?.info?.map((item3, index) => (
                                <div key={index} className='flex justify-center ml-[2rem] items-center'>
                                  <input type={item3?.type} className='w-5 h-5' />
                                  <label htmlFor={item3?.title} className='text-xl text-black ml-1'>{item3?.title}</label>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      })}
                      <div className="flex justify-center items-center mt-2 ml-5 pb-3">
                        <button onClick={handleButtonClick} type="submit" className='text-white text-base bg-black mt-[7.8rem] p-1 w-[8rem] rounded-lg'>Continue</button>
                      </div>
                    </div>
                  </form>

                  <div className=''>
                    {/* 2nd form */}
                    <BankSetup handleButtonClick={handleButtonClick} progress={progress}/>
                    {/* <Invoices /> */}
                  </div>
                  {/* 3rd form */}
                  <Fee handleButtonClick={handleButtonClick} progress={progress}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BranchOffice