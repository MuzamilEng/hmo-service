import { Box } from '@mui/material'
import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import CPrice from './CPrice';
import { useGlobalContext } from '../../../store/authStore';
import { useForm } from 'react-hook-form';

const EQualification = ({ onBackward }) => {
    const [show, setShow] = useState(true);
    const { handleSubmit, formState: { errors, isValid }, register } = useForm();
    const { graphqlVariables, setGraphqlVariables } = useGlobalContext();

    const onSubmit = (data ,e) => {
        e.preventDefault();
        setGraphqlVariables({...graphqlVariables, ...data});
        // setGraphqlVariables(data);

        setShow(false);
    };
    console.log(graphqlVariables, "graphqlVariables");
    const handleChange = (e) => {
        const { name, value } = e.target;
        setGraphqlVariables({ ...graphqlVariables, [name]: value });
    };
    //  $qualificationTitle $qualificationType $yearOfCompletion $yearsOfExperience
    return (
        <div>
            <div className="container" style={{ fontSize: "1.2rem" }}>
                {
                    show ? <>
                        <div className="content">
                            <h2 className='pr_title2'>Education Qualification</h2>
                            <span>Please enter your best level of education</span>
                        </div>
                        <form className="flex" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-section">
                                <label htmlFor="qualificationTitle">Degree</label> <br />
                                <input type="text" name='qualificationTitle'
                                    {...register('qualificationTitle', {
                                        required: true,
                                        pattern: {
                                            value: /^[A-Za-z]+$/,
                                            message: 'Only alphabetic characters are allowed',
                                        },
                                    })}
                                    placeholder='Type & Select Degree' className='text_inputs'
                                    value={graphqlVariables?.qualificationTitle}
                                    onChange={handleChange} /> <br />
                                {errors?.qualificationTitle && <span className='text-red-500'>Degree is required</span>} <br />
                                <label htmlFor="specialization">College/Institute</label> <br />
                                <input type="text" name='qualificationType'
                                    {...register('qualificationType', {
                                        required: true,
                                        pattern: {
                                            value: /^[A-Za-z]+$/,
                                            message: 'Only alphabetic characters are allowed',
                                        }
                                    })}
                                    placeholder='Type & Select College/Institute'
                                    className='text_inputs' value={graphqlVariables?.qualificationType}
                                    onChange={handleChange} /> <br />
                                {errors?.qualificationType && <span className='text-red-500'>{errors?.qualificationType?.message}</span>} <br />
                                <label htmlFor="gender">Year of Completion</label> <br />
                                <input type="text" name='yearOfCompletion'
                                    {...register('yearOfCompletion', {
                                        required: true,
                                        pattern: {
                                            value: /^[0-9]+$/,
                                            message: 'Only numeric characters are allowed',
                                        }
                                    })}
                                    placeholder='Type Registration Year of Completion'
                                    className='text_inputs' value={graphqlVariables?.yearOfCompletion}
                                    onChange={handleChange} />
                                <br />
                                {errors?.yearOfCompletion && <span className='text-red-500'>Year of Completion is required</span>} <br />
                                <label htmlFor="city">Year of experience</label> <br />
                                <input type="text" name='yearsOfExperience'
                                    {...register('yearsOfExperience', {
                                        required: true,
                                        pattern: {
                                            value: /^[0-9]+$/,
                                            message: 'Only numeric characters are allowed',
                                        }
                                    })}
                                    placeholder='Type Year of experience (0-70 years)'
                                    className='text_inputs' value={graphqlVariables?.yearsOfExperience}
                                    onChange={handleChange} />
                                <br />
                                {errors?.yearsOfExperience && <span className='text-red-500'>Year of experience is required</span>} <br />
                                <div className="flex m_3">
                                    <div className="flex_m_4">
                                        <button className='back_btn' onClick={onBackward}>Back</button>
                                        <button type='submit' className='continue_btn1'>Continue</button>
                                    </div>
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
                    </> : <><CPrice onBack={() => setShow(true)} /></>
                }
            </div>
        </div>
    )
}

export default EQualification
