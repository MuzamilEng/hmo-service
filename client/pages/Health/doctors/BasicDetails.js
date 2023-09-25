import { Box } from '@mui/material'
import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import Identity from './Identity';
import Link from 'next/link';
import { useGlobalContext } from '../../../store/authStore';
import { useForm } from 'react-hook-form';

const BasicDetails = () => {
    const [next, setNext] = useState(false)
    const [identity, setIdentity] = useState(false)
    const [show, setShow] = useState(true)
    const handleIdentity = (e) => {
        e.preventDefault()
       setIdentity(true)
    }
    // const handleNext = (e) => {
    //     e.preventDefault()
    //     setNext(true)
    // }
    const onHandleChange = ()=> {
        setNext(next)
        setIdentity(!identity)
    } 
    const { handleSubmit, formState: { errors, isValid }, register } = useForm();
    const { graphqlVariables, setGraphqlVariables } = useGlobalContext();

    const onSubmit = (data ,e) => {
        e.preventDefault();
        setGraphqlVariables({...graphqlVariables, ...data});
        // setGraphqlVariables(data);

        setNext(true)

        // setShow(false);
    };
    console.log(graphqlVariables, "graphqlVariables");
    const handleChange = (e) => {
        const { name, value } = e.target;
        setGraphqlVariables({ ...graphqlVariables, [name]: value });
    };
    // establishmentName: $establishmentName, country: $country, state: $state,
    return (
        <div>
            <div className="container" style={{fontSize: "1.2rem"}}>
                <div className="content">
                    <h2 className='pr_title2'>{next ? '' : 'Establishment Basic Details'}</h2>
                </div>
                <div className="flex">
                    {!next && show ? <>
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-section">
                            <label htmlFor="establishmentName">Establishment Name</label> <br />
                            <input type="text" placeholder='Type Registration Establishment name'
                            {...register('establishmentName', {
                                required: true,
                                pattern: {
                                    value: /^[A-Za-z]+$/,
                                    message: 'Only alphabetic characters are allowed',
                                }
                            })}
                             className='text_inputs' name='establishmentName'
                              value={graphqlVariables?.establishmentName} 
                              onChange={handleChange} /> <br />
                            {errors?.establishmentName && <span className='text-red-500'>Establishment Name is required</span>} <br />
                            <label htmlFor="country">Country</label> <br />
                            <input type="text" placeholder='Select City' 
                            {...register('country', {
                                required: true,
                                pattern: {
                                    value: /^[A-Za-z]+$/,
                                    message: 'Only alphabetic characters are allowed',
                                }
                            })}
                            className='text_inputs'
                             name='country' value={graphqlVariables?.country}
                              onChange={handleChange} /> <br />
                            {errors?.country && <span className='text-red-500'>Country is required</span>} <br />
                            <label htmlFor="state">Locality</label> <br />
                            <input type="text" placeholder='Select Locality' 
                            {...register('state', {
                                required: true,
                                pattern: {
                                    value: /^[A-Za-z]+$/,
                                    message: 'Only alphabetic characters are allowed',
                                }
                            })}
                            className='text_inputs' name='state'
                             value={graphqlVariables?.state} onChange={handleChange} /> <br />
                            {errors?.state && <span className='text-red-500'>Locality is required</span>} <br />
                            <div className="flex m_3">
                                <button className='continue_btn' type='submit'>Continue</button>
                            </div>
                        </div>
                        </form>
                    </> : <>
                      {
                        next && !identity ?  <>
                          <div className="form-section r_align">
                            <h2 className='pr_title2'>Great Progress</h2>
                            <p className='prg_para'>Your profile is just a few steps away from going live.</p>
                            <label className='labal' htmlFor="city">Section A: Profile details</label> <br />
                            <p className='prg_para'>Doctor’s basic details, medical registration, <br />
                                education qualification, establishment details etc.</p>
                                <div className="flex_icon">
                                <Icon icon="teenyicons:tick-circle-solid" width={14} height={14} className='bl_icon' />
                                <Link href="/Health/doctors/profiles"><p color='blue'>change</p></Link>

                                </div>
                                <label className='labal' htmlFor="city">Section B: Profile verification</label> <br />
                            <p className='prg_para'>Doctor’s basic details, medical registration, <br />
                                education qualification, establishment details etc.</p><br />
                                <label className='labal' htmlFor="city">Section C: Start getting patients</label> <br />
                            <p className='prg_para'>start earning money </p>
                            <div className="flex m_3">
                                <button className='continue_btn2' onClick={handleIdentity}>Continue</button>
                            </div>
                            <Box
                            sx={{
                                background: '#DFF8F6',
                                border: '2px solid #ACE5DF',
                                borderRadius: '4px',
                                color: '#40B09C',
                                maxWidth: '390px',
                                p: '18px'
                            }}
                        >
                            <Icon icon="heroicons-outline:light-bulb" color='#40B09C' width={22} height={22} />
                            <br />
                            This information helps us perform critical checks to ensure that only licensed and genuine medical
                            practitioners are listed on Practo. Your profile will get a “Verified” badge on verification. Doctors with
                            verified profiles get 95% more patient views on Practo.
                        </Box>
                        </div>
                        </> : <Identity mdProof={'Identity Proof'} handleBackward={onHandleChange} />
                      }
                    </>}
                    <div className="img_sec1">
                        {!next && !identity ? <>
                            <Box
                            sx={{
                                background: '#DFF8F6',
                                border: '2px solid #ACE5DF',
                                borderRadius: '4px',
                                color: '#40B09C',
                                maxWidth: '390px',
                                p: '18px'
                            }}
                        >
                            <Icon icon="heroicons-outline:light-bulb" color='#40B09C' width={22} height={22} />
                            <br />
                            This information helps us perform critical checks to ensure that only licensed and genuine medical
                            practitioners are listed on Practo. Your profile will get a “Verified” badge on verification. Doctors with
                            verified profiles get 95% more patient views on Practo.
                        </Box>
                        </> : ''}
                        {!next && show  ? <>
                            <div className="img-sec">
                        <img
                            src='/images/pages/doctor-profile-snapshot.png'
                            alt=''
                            style={{ maxWidth: '541px', width: '100%', height: 'auto' }}
                        />
                    </div> 
                        </> : ''}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BasicDetails
