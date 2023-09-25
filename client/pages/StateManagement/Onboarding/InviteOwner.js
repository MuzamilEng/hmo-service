import React, { useState } from 'react'
import Header from '../../../layouts/Header';
import Navbar from '../../../_components/State/Header';
import { Location, houseOwner } from './Data';
import Link from 'next/link';
import Sidebar from '../../../layouts/Sidebar';
import { ProgressBar } from './BranchOffice';
import { Controller, useForm } from 'react-hook-form';
import Locations from './Location';

const InviteOwner = () => {
  const { register, handleSubmit, control, formState: { errors } } = useForm();
  const [toggle, setToggle] = React.useState(true)

  const onSubmit2 = (data)=> {
    console.log(data);
  }
  const [show, setShow] = useState(false)
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
            <div className="mt-[2.6%] pt-3 fixed z-10">
              <Sidebar />
            </div>
            <div className="absolute w-full max-w-[88rem] right-1">
              <Navbar />
              <div className="text-center p-3 text-white w-full max-w-[88rem] text-3xl font-bold bg-[#000] m-2">Owner Details</div>
              <div className="max-w-[87rem] flex justify-center items-center ml-[1rem] w-full">
              <div className="w-full max-w-[88rem]"><ProgressBar percentage={progressPercentage} /></div>
              </div>
              <div className="flex justify-center -mt-[1.5rem]">
               <form onSubmit={handleSubmit(onSubmit2)} className='max-w-[43rem] w-full'>
               <div className="content mt-2 border-1 bg-[#ffff] border-gray-400 rounded-xl p-2 ml-3">
                  {houseOwner?.map((item, index) => {
                    return <div key={index}>
                      <div className="flex justify-center mb-2 pb-2 items-center text-2xl underline text-black"><h1 className='font-bold'>{'Step 1'}</h1></div>
                      <div className="flex flex-col">
                        {item?.form?.map((item2, index) => (
                          <div key={index} className='mb-2.5'>
                            <label className='text-black text-base ml-4 ' htmlFor={item2?.title}>
                              {item2?.title}
                            </label> <br />
                            <Controller
                                    name={`example[${index}]`} // Use unique names for each input field
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                      item2?.type === 'select' ? (
                                        <select
                                          {...field}
                                          className='w-full max-w-[40rem] text-black p-2.5 border-[1.5px] rounded-lg m-2 focus:border-blue-900 focus:outline-blue-900'
                                        >
                                          {item2?.ocupation?.map((option, index) => (
                                            <option key={index} value={option.value} className='focus:shadow-md'>
                                              {option.label}
                                            </option>
                                          ))}
                                        </select>
                                      ) : (
                                        <input
                                          {...field}
                                          type={item2?.type}
                                          placeholder={item2?.placeholder}
                                          className='w-full max-w-[40rem] text-black p-2.5 border-[1.5px] rounded-lg m-2 focus:border-blue-900 focus:outline-blue-900'
                                        />
                                      )
                                    )}
                                    rules={{ required: true }}
                                  />
                                  {errors?.example?.[index] && <span className='text-red'>This field is required</span>}
                          </div>
                        ))}
                    </div>
                    </div>
                  })}
                <div className="flex justify-center items-center ml-5 pb-3">
                  {/* <Link href='/StateManagement/Onboarding/Fee'>
                  </Link> */}
                  <button onClick={()=> setShow(true)} value={progress}  className='text-white text-xl bg-black p-1 w-full max-w-[10rem] rounded-lg'>Continue</button>
                </div>
              </div>
               </form>
              {/* 2nd form */}
              <Locations handleButtonClick={handleButtonClick} progress={progress}/>
            </div>
          </div>
        </div>
      </div>
    </div >
    </>
  )
}

export default InviteOwner