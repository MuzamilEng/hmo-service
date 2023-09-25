import { Box } from '@mui/material'
import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import BasicDetails from './BasicDetails';
import { useGlobalContext } from '../../../store/authStore';
import Progress from './Progress';
import { useForm } from 'react-hook-form';

const Consultation = ({onBack}) => {
    const [show, setShow] = useState(true);
    const { handleSubmit, formState: { errors, isValid }, register } = useForm();
    const { graphqlVariables, setGraphqlVariables, handleConsult } = useGlobalContext();

    const onSubmit = (data ,e) => {
        e.preventDefault();
        setGraphqlVariables({...graphqlVariables, ...data});
        setShow(!show);
    };
    console.log(graphqlVariables, "graphqlVariables");
    const handleChange = (e) => {
        const { name, value } = e.target;
        setGraphqlVariables({ ...graphqlVariables, [name]: value });
    };
    const onHandleConsult = () => {
        handleConsult(graphqlVariables)
    }
    return (
        <div>
            <div className="container" style={{fontSize: "1.2rem"}}>
                {show ? <>
                    <from onSubmit={handleSubmit(onSubmit)}>
                <h1 className='text-black text-2xl mt-3'>Details of consultant of Doctor</h1>
          <div className="mt-3 -ml-[2rem]">
          <label className='pl-7' htmlFor="specialization">Cusultation Fees</label> <br />
              <input type="text" id="feesInfo"
              {...register('feesInfo', {
                required: true,
                pattern: {
                  value: /^[0-9]*$/,
                  message: 'Only numbers are allowed',
                }
              })}
               value={graphqlVariables?.feesInfo?.videoCall?.price}
                name="feesInfo" placeholder='Type Consultation Fees' className='text_inputs' onChange={handleChange} /> <br />
                {errors?.feesInfo && <span className='text-red-500'>Consultation Fees is required</span>} <br />
          </div>
          <div className="mt-3 -ml-[2rem]">
          <label className='pl-7' htmlFor="description">Description</label> <br />
              <textarea type="text" id="description"
              {...register('description', {
                required: true,
              })}
               value={graphqlVariables?.description}
                name="description" placeholder='enter description'
                 className='text_inputs' onChange={handleChange} >
                    </textarea> <br />
                {errors?.description && <span className='text-red-500'>Description is required</span>} <br />
          </div>
                <div className="flex align">
                    <div className="form-section">
                        <label className='labale' htmlFor="name">Doctor's hours:</label> <br />
                       <div className="flex align">
                        <input type="radio" className='radio_inputs' />
                        <p className='establishment'>Same as establishment hours</p>
                       </div>
                        <div className="flex align">
                        <input type="radio" className='radio_inputs' />
                        <p className='establishment'>Different from establishment hours</p>
                       </div>
                     <span>Note: You can add multiple establishment one by one.</span>
                     <div className="flex_m_3">
                        <button className='back_btn' onClick={onBack}>Back</button>
                        <button className='continue_btn1' type='submit' onClick={(e) => { e.preventDefault(); handleSubmit(e); onHandleConsult()}}>Continue</button>
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
                </div>
                </from>
                </> : 
                <> <Progress /></>}
            </div>            
        </div>
    )
}

export default Consultation
