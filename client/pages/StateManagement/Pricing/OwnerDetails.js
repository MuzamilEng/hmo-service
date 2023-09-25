import React, { useEffect, useState } from 'react'
import Header from '../../../layouts/Header';
import Navbar from '../../../_components/State/Header';
import DropdownList from "../../../src/Compoment/DropdownList"
import Invoices from '../../../_components/State/Invoices';
import Link from 'next/link';
import { houseDetail, houseDetails, ownerDetails } from '../Onboarding/Data';
import Sidebar from '../../../layouts/Sidebar';
import { ProgressBar } from '../Onboarding/BranchOffice';
import { Controller, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import HouseDetails from './HouseDetails';

const OwnerDetails = () => {
  const [progress, setProgress] = React.useState(0);
  const progressPercentage = (progress === 0 ? 0 : progress === 1 ? 34 : 68);
  const [unitsArray, setUnitsArray] = React.useState([])
  const { register, handleSubmit, control, formState: { errors } } = useForm();
  const router = useRouter();

  const handleUnits = () => {
    const newUnit = houseDetail?.[0]?.form?.map((item2, index) => {
      return item2
    })
    // setUnitsArray([...unitsArray, newUnit])
    const updatedUnitsArray = [...unitsArray, newUnit];
    setUnitsArray(updatedUnitsArray);
   
  }

  // Update the state with the new array

  const onSubmit2 = (data) => {
    // Check if there are validation errors
    if (Object.keys(errors).length === 0) {
      // No validation errors, navigate to the next page
      router.push('/StateManagement/Pricing/OwnerDetails');
    } else {
      // Validation errors exist, do not navigate
      console.log(data);
    }
  };
  const handleButtonClick = () => {
    if (progress < 2) {
      setProgress(progress + 1);
    }
  };
  useEffect(() => {
  }, [unitsArray])
  return (
    <>
      <div>
        <div className="">
          <Header />
          <div className="flex">
            <div className="mt-[2.6%] fixed pt-3 z-10">
              {/* <DropdownList /> */}
              <Sidebar />
            </div>
            <div className="absolute w-full max-w-[88rem] right-1">
              <Navbar />
              <div className="text-center p-3 text-white text-3xl w-full max-w-[88rem] font-bold bg-[#000] m-2">House Details</div>
              <div className="w-full max-w-[88rem]"><ProgressBar percentage={progressPercentage} /></div>

              <div className="flex -mt-[1.5rem]">
                <form onSubmit={handleSubmit(onSubmit2)} className='max-w-[28rem] w-full mr-2'>
                <div className="content mt-2 border-1 bg-[#ffff] border-gray-400 rounded-xl p-2 w-full max-w-[28rem] ml-3">
                  {ownerDetails?.map((item, index) => {
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
                                          className='w-full max-w-[25rem] text-black p-2.5 border-[1.5px] rounded-lg m-2 focus:border-blue-900 focus:outline-blue-900'
                                        >
                                          {item2?.options?.map((option, index) => (
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
                                          className='w-full max-w-[25rem] text-black p-2.5 border-[1.5px] rounded-lg m-2 focus:border-blue-900 focus:outline-blue-900'
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
                  <div className="flex justify-center items-center mt-4 ml-5 pb-3">
                    <button onClick={handleButtonClick} value={progress} className='text-white text-xl bg-black p-1 w-full max-w-[10rem] rounded-lg'>Continue</button>
                  </div>
                </div>
                </form>
                {/* 2nd form */}
                <div className="content mt-2 border-1 bg-[#ffff] border-gray-400 rounded-xl p-2 max-w-[28rem] w-full ml-3">
                  {houseDetail?.map((item, index) => {
                    return <div key={index}>
                      <div className="flex justify-center mb-2 pb-2 items-center text-2xl underline text-black"><h1 className='font-bold'>{'Step 2'}</h1></div>
                      <div className="">
                        <label htmlFor={item?.units?.label} className='text-black text-base ml-4 '>{item?.units?.label}</label>
                        <input type={item?.units?.type} placeholder={item?.units?.placeholder} className='w-full max-w-[24rem] text-black p-2.5 border-[1.5px] rounded-lg m-2 focus:border-blue-900 focus:outline-blue-900' />
                      </div>
                      <div className="flex justify-center items-center mt-4 ml-1 pb-3">
                        <button className='text-white text-base bg-black p-1 w-[8rem] rounded-full'>Create Unit</button>
                      </div>
                      <div className="flex justify-center items-center">
                        <div className="flex items-center justify-center">
                          {item?.form?.map((item2, index) => (
                            <div key={index} className='mb-2.5'>
                              <label className='text-black text-base ml-4 ' htmlFor={item2?.label}>
                                {item2?.label}
                              </label><br />
                              {item2?.type === 'select' ? (
                                <select className='w-full max-w-[26rem] text-black p-2.5 border-[1.5px] rounded-lg m-2 focus:border-blue-900 focus:outline-blue-900'>
                                  {item2.options.map((option, index) => (
                                    <option key={index} value={option.value} className='focus:shadow-md'>
                                      {option.label}
                                    </option>
                                  ))}
                                </select>
                              ) : (
                                <div className={`${item2?.width === 'w-1/2' ? 'flex w-[5rem]' : ""}`}>
                                  <input
                                    type={item2?.type}
                                    placeholder={item2?.placeholder}
                                    className='w-full max-w-[26rem] text-black p-2.5 border-[1.5px] rounded-lg m-2 focus:border-blue-900 focus:outline-blue-900'
                                  />
                                </div>
                              )}
                            </div>
                          ))}
                          <button onClick={handleUnits} className='text-black text-4xl ml-[1rem] font-bold'>+</button>
                        </div>
                      </div>
                    </div>
                  })}
                          <div className="p-2 ">
                            {unitsArray?.map((unit, idnx) => {
                              return <div key={idnx} className='flex justify-center items-center' >
                                {unit?.map((unit2, idnx2) => {
                                  return <div key={idnx2} >
                                    <label className='text-black text-base ml-4 ' htmlFor={unit2?.label}>
                                      {unit2?.label}
                                    </label><br />
                                    <div className={`${unit2?.width === 'w-1/2' ? 'flex w-[5rem]' : ""}`}>
                                  <input
                                    type={unit2?.type}
                                    placeholder={unit2?.placeholder}
                                    className='w-full max-w-[26rem] text-black p-2.5 border-[1.5px] rounded-lg m-2 focus:border-blue-900 focus:outline-blue-900'
                                  />
                                </div>
                                     </div>
                                })}
                                 <button onClick={handleUnits} className='text-black text-4xl ml-[1rem] font-bold'>+</button>
                              </div>
                            })}

                          </div>
                  <div className="flex justify-center items-center mt-4 ml-1 pb-3">
                    <button className='text-white text-xl bg-black mt-[8rem] p-1 w-[10rem] rounded-lg' onClick={handleButtonClick} value={progress}>Continue</button>
                  </div>
                </div>
                {/* 3rd form */}
                <div className="w-full max-w-[28rem]"><HouseDetails handleButtonClick={handleButtonClick} progress={progress}/></div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default OwnerDetails