import { Icon } from '@iconify/react'
import { Box } from '@mui/material'
import React, { useState } from 'react'
import Progress from './Progress'
import { useGlobalContext } from '../../../store/authStore'
import Consultation from './Consultation'
import { useForm } from 'react-hook-form'

const EsTiming = ({ onBackward }) => {
    const [show, setShow] = useState(true)
    const { handleSubmit, formState: { errors, isValid }, register } = useForm();
    const { graphqlVariables, setGraphqlVariables } = useGlobalContext();

    const onSubmit = (data ,e) => {
        e.preventDefault();
        setGraphqlVariables({...graphqlVariables, ...data});
        setShow(false);
    };
    console.log(graphqlVariables, "graphqlVariables");
    const handleChange = (e) => {
        const { name, value } = e.target;
        setGraphqlVariables({ ...graphqlVariables, [name]: value });
    };
    //  slotFromTime: $slotFromTime, slotToTime: $slotToTime
    return (
        <div>
            <div className="container" style={{fontSize: "1.2rem"}}>
                {show ? <>
                    <div className="content">
                        <h2 className='pr_title2'>Establishment Timing</h2>
                        <p>Practice Name</p>
                    </div>
                    <form className="flex" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-section1">
                            <p>Days</p>
                            <div className="flex_days">
                                <p className="yellow">Mon</p>
                                <p className="yellow">Tue</p>
                                <p className="yellow">Wed</p>
                                <p className="yellow">Thu</p>
                                <p className="yellow">Fri</p>
                                <p className="yellow">Sat</p>
                                <p className="yellow">Sun</p>
                            </div>
                            <div className="flex_box1">
                                <div className="">
                                    <p>Sessions 1</p>
                                    <div className="flex">
                                        <input type="text" placeholder='09:00 AM'
                                         className='text_input1' name='slotFromTime'
                                         {...register('slotFromTime', {
                                             required: true,
                                         })}
                                          value={graphqlVariables?.slotFromTime}
                                           onChange={handleChange} />
                                        <input type="text" placeholder='09:00 PM' 
                                        {...register('slotToTime', {
                                            required: true,
                                        })}
                                        className='text_input1' name='slotToTime'
                                         value={graphqlVariables?.slotToTime} onChange={handleChange} />
                                    </div>
                                    <br />
                                </div>
                                <div className="mr_l">
                                    <Box
                                        sx={{
                                            background: '#DFF8F6',
                                            border: '2px solid #ACE5DF',
                                            borderRadius: '4px',
                                            color: '#40B09C',
                                            maxWidth: '390px',
                                            // marginLeft: '50px',
                                            p: '18px'
                                        }}
                                    >
                                        <Icon icon="heroicons-outline:light-bulb" color='#40B09C' width={22} height={22} />
                                        <br />
                                        This information helps us perform critical checks to ensure that only licensed and genuine medical
                                        practitioners are listed on Practo. Your profile will get a “Verified” badge on verification.
                                    </Box>
                                </div>
                                <br />
                            </div>
                            <p className="prg_para">
                                <span className="blue">+ ADD TIMING FOR REMAINING DAYS</span>
                            </p>
                           <div className="flex_m_6">
                           <button className='back_btn' onClick={onBackward}>Back</button>
                            <button className='continue_btn1' type='submit'>Continue</button>
                           </div>
                        </div>
                    </form>
                </> : <><Consultation onBack={(e)=> {e.preventDefault(); setShow(true)}}/></>}
            </div>
        </div>
    )
}

export default EsTiming
