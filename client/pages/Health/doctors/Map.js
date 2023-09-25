import { Icon } from '@iconify/react'
import { Box } from '@mui/material'
import React, { useState } from 'react'
import EsTiming from './EsTiming'
import { useForm } from 'react-hook-form'
import { useGlobalContext } from '../../../store/authStore'
import GoogleMaps from '../component/Map'

const Map = ({ handleBackward, onClick }) => {
    const [forward, setForward] = useState(false);
  const { handleSubmit, formState: { errors, isValid }, register } = useForm();
  const { graphqlVariables, setGraphqlVariables } = useGlobalContext();

  const onSubmit = (data, e) => {
    e.preventDefault();
    setGraphqlVariables({ ...graphqlVariables, ...data });
    setForward(true)
};
const [selectedAddress, setSelectedAddress] = useState('');

// ...

const handleAddressSelect = (address) => {
  setSelectedAddress(address);
  // Store the selected address in your graphqlVariables or any other variable as needed
  setGraphqlVariables({ ...graphqlVariables, coordinates: address });
};

    return (
        <div>
            {
                !forward ? <>
                    <div className="container" style={{ fontSize: "1.2rem" }}>
                        <div className="content">
                            <h2 className='pr_title2'>Map Location</h2>
                            <p>Practice Location</p>
                        </div>
                        <form className="flex" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-section">
                                <div className="flex justify-between">
                                <div className="">
                                <label htmlFor="name">Phone number</label> <br />
                                <input type="text" id="name" placeholder='' value={+6282340291921} className='text_inputs' /> <br />
                                <p className="labal">Note: Patient calls will be directed to this number.
                                    You can update it later also.</p>
                                <br className='prg_para' />
                                <label htmlFor="name">Email</label> <br />
                                <input type="text" id="name" placeholder='Enter Email Address' className='text_inputs' /> <br />
                                {/* <br className='prg_para' />
                                <label htmlFor="name">Street address</label> <br />
                                <input type="text" id="name" placeholder='Type Street Address' className='text_inputs' /> <br /> */}
                                        <label htmlFor="name">Street address</label> <br />
                                        <input type="text" name='coordinates' placeholder='Type Street Address' value={graphqlVariables?.coordinates} className='text_inputs' onChange={(e) => { setGraphqlVariables({ ...graphqlVariables, coordinates: e.target.value }) }} />
                                <br className='prg_para' />

                                </div>
                                <div style={{ marginLeft: "3rem" }} className="mr_l">
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
                                                practitioners are listed on Practo. Your profile will get a “Verified” badge on verification.
                                            </Box>
                                        </div>
                                </div>
                                <div className="flex_box">
                                    <div className="drap_drop">
                                        {/* add google map here */}
                                        <div className="container -ml-[4rem] m-2 w-full h-[30rem]">
                                            <a onClick={(e)=> {e.preventDefault();}} href="https://www.google.com/maps" target="_blank">
                                        <GoogleMaps onAddressSelect={handleAddressSelect} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                    <div style={{ marginTop: "-3rem" }} className="flex_m_5">
                                        <button className='back_btn' onClick={handleBackward}>Back</button>
                                        <button className='continue_btn1' onClick={(e) => { e.preventDefault(); setForward(!forward) }}>Continue</button>
                                    </div>
                            </div>
                        </form>
                    </div>
                </> : <EsTiming onBackward={(e) => { e.preventDefault(); setForward(!forward) }} />
            }
        </div>
    )
}

export default Map
