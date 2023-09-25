import { Box } from '@mui/material'
import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import EQualification from './EQualification';
import { useGlobalContext } from '../../../store/authStore';
import { useForm } from 'react-hook-form';

const MedicalRegistration = ({onClick}) => {
    const [forward, setForward] = useState(true)
    const { handleSubmit, formState: { errors, isValid }, register } = useForm();
    // const handleBackward = () => {
    //     setShow(true);
    // }
    const { graphqlVariables, setGraphqlVariables } = useGlobalContext();

    const onSubmit = (data, e) => {
        e.preventDefault();
        setGraphqlVariables({...graphqlVariables, ...data});
        setForward(false);
    };
    // console.log(graphqlVariables, "graphqlVariables");
    const handleChange = (e) => {
        const { name, value } = e.target;
        setGraphqlVariables({ ...graphqlVariables, [name]: value });
    };
    return (
        <div>
            <div className="container" style={{fontSize: "1.2rem"}}>
               {forward ? <>
                <div className="content">
                    <h2 className='pr_title2'>Medical Registration</h2>
                </div>
                <form className="flex" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-section">
                        <label htmlFor="name">Registration Number</label> <br />
                        <input type="text" placeholder='Type Registration Number'
                        {...register('regNum', {
                            required: true,
                            pattern: {
                              value: /^[0-9]*$/,
                              message: 'Only numeric characters are allowed',
                            },
                          })}
                         className='text_inputs' name='regNum' value={graphqlVariables?.regNum}
                          onChange={handleChange} /> <br />
                          {!isValid && errors?.regNum && <span className='text-red-500'>Registration Number is required</span>}
                           <br />
                        <label htmlFor="specialization">Registration Council</label> <br />
                        <input type="text" 
                         placeholder='Type & Select Registration Council' 
                         {...register('regCouncil', {
                             required: true,
                         })}
                         className='text_inputs' name='regCouncil' value={graphqlVariables?.regCouncil}
                          onChange={handleChange} /> <br />
                        {errors?.regCouncil && <span className='text-red-500'>Registration Council is required</span>} <br />
                        <label htmlFor="gender">Registration Year</label> <br />
                        <input type="text"  placeholder='Type Registration Year'
                         {...register('registrationYear', {
                             required: true,
                         })}
                         className='text_inputs' name='registrationYear'
                          value={graphqlVariables?.registrationYear} onChange={handleChange}/>
                        <br />
                        {errors?.registrationYear && <span className='text-red-500'>Registration Year is required</span>}
                       
                        <div className="flex_m_3">
                        <button className='back_btn' onClick={onClick}>Back</button>

                        <button type="submit" className='continue_btn1'>Continue</button>
                        </div>
                    </div>
                    <div className="img_sec1">
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
                </form>
               </> : <><EQualification  onBackward={() => setForward(true)} /></>}
            </div>
        </div>
    )
}

export default MedicalRegistration
