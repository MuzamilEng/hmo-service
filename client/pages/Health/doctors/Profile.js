import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import MedicalRegistration from './MedicalRegistration';
import { useGlobalContext } from '../../../store/authStore';

import { useForm } from "react-hook-form";

const Profile = () => {
    const { handleSubmit, formState: { errors, isValid }, register } = useForm();
    const [show, setShow] = useState(true);
    const handleBackward = () => {
        setShow(true);
    }
    const { graphqlVariables, setGraphqlVariables } = useGlobalContext();

    const onSubmit = (data, e) => {
        e.preventDefault();
        setGraphqlVariables({ ...graphqlVariables, ...data });
        setShow(false);
    };
    // console.log(graphqlVariables, "graphqlVariables");
    const handleChange = (e) => {
        const { name, value } = e.target;
        setGraphqlVariables({ ...graphqlVariables, [name]: value });
    };

    // fetching countries
    const [countries, setCountries] = useState([]);
    const [regions, setRegions] = useState([]);
    const [cities, setCities] = useState([]);
    const [showError, setShowError] = useState(false)

    const BATTUTA_KEY = '00000000000000000000000000000000';
    useEffect(() => {
        // This is your API key (replace with your actual key)

        // Fetch countries
        axios
            .get(`https://battuta.medunes.net/api/country/all/?key=${BATTUTA_KEY}`)
            .then((response) => {
                setCountries(response.data);
            })
            .catch((error) => {
                console.error('Error fetching countries:', error);
            });
    }, []);

    const handleCountryChange = (event) => {
        const countryCode = event.target.value;
        const selectedCountryText = event.target.options[event.target.selectedIndex].text;

        // Update the state for graphqlVariables with the selected country
        setGraphqlVariables({ ...graphqlVariables, country: selectedCountryText });

        // Fetch regions based on the selected country
        axios
            .get(
                `https://battuta.medunes.net/api/region/${countryCode}/all/?key=${BATTUTA_KEY}`
            )
            .then((response) => {
                setRegions(response.data);
            })
            .catch((error) => {
                console.error('Error fetching regions:', error);
            });
    };

    const handleRegionChange = (event) => {
        const selectedRegionText = event.target.options[event.target.selectedIndex].text;

        // Update the state for graphqlVariables with the selected region
        setGraphqlVariables({ ...graphqlVariables, state: selectedRegionText });

        const countryCode = document.getElementById('country').value;
        const region = event.target.value;

        // Fetch cities based on the selected country and region
        axios
            .get(
                `https://battuta.medunes.net/api/city/${countryCode}/search/?region=${region}&key=${BATTUTA_KEY}`
            )
            .then((response) => {
                setCities(response.data);
            })
            .catch((error) => {
                console.error('Error fetching cities:', error);
            });
    };

    const handleCityChange = (event) => {
        const selectedCityText = event.target.options[event.target.selectedIndex].text;

        // Update the state for graphqlVariables with the selected city
        setGraphqlVariables({ ...graphqlVariables, city: selectedCityText });
    };


    return (
        <div>
            <div className="container" style={{ fontSize: "1.2rem" }}>
                <h1 className='pr_title'>Profile</h1>
                {show ? <>
                    <div className="content mt-4">
                        <h2 className='pr_title2 pb-2'>Welcome To Online Doctor's Portal Lets <br /> build your dedicated profile.</h2>
                        <p>Section A: Profile details</p>
                    </div>
                    <form className="flex" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-section">
                            <label htmlFor="name">Name</label> <br />
                            <input
                                type="text"
                                {...register('name', {
                                    required: true,
                                })}
                                value={graphqlVariables?.name}
                                name="name"
                                placeholder='Dr./Mr./Ms.'
                                className='text_inputs'
                                onChange={handleChange}
                            />
                            <br />
                            {!isValid && errors?.name && <span className='text-red-500'>Name is required</span>} <br />
                            <label htmlFor="specialization">Specialization</label> <br />
                            <input type="text"
                                value={graphqlVariables?.speciality} name="speciality"
                                placeholder='Select Specialization' className='text_inputs'
                                {...register('speciality', {
                                    required: true,
                                })}
                                onChange={handleChange} />
                            <br />
                            {errors?.speciality && <span className='text-red-500'>Specialization is required</span>} <br />
                            <label htmlFor="gender">Gender</label> <br />
                            <div className="flex s_ar">
                                <div>
                                    <input
                                        type="radio"
                                        id="male"
                                        name="gender"
                                        value="male"
                                        defaultChecked={false}
                                        {...register('gender', { value: 'male' })}
                                        checked={graphqlVariables?.gender === 'male'}
                                        className="radio_inputs"
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="male">Male</label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        id="female"
                                        name="gender"
                                        value="female"
                                        defaultChecked={false}
                                        {...register('gender', { value: 'female' })}
                                        checked={graphqlVariables?.gender === 'female'}
                                        className="radio_inputs"
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="female">Female</label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        id="other"
                                        name="gender"
                                        value="other"
                                        defaultChecked={false}
                                        {...register('gender', { value: 'other' })}
                                        checked={graphqlVariables?.gender === 'other'}
                                        className="radio_inputs"
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="other">Other</label>
                                </div>

                            </div>
                            <br />
                            <label>Select a Country</label>
                            <select className='text_inputs' id="country" onChange={handleCountryChange} required>
                                <option value="" >
                                    Please select your country
                                </option>
                                {countries.map((country) => (
                                    <option key={country.code} value={country.code}>
                                        {country.name}
                                    </option>
                                ))}
                            </select> <br />
                            {/* {!isValid && ( <span className='text-red-500'>Please select your country.</span>)} */}
 
                            <br />

                            <label>Select a State</label>
                            <select className='text_inputs' id="region" onChange={handleRegionChange} required>
                                <option value="" >
                                    Please select your state
                                </option>
                                {regions.map((region) => (
                                    <option key={region.region} value={region.region}>
                                        {region.region}
                                    </option>
                                ))}
                            </select> <br />
                            {/* {!isValid && ( <span className='text-red-500'>Please select your state.</span>)} */}

                            <br />
                            <label>Select a City</label>
                            <select className='text_inputs' id="city" onChange={handleCityChange} required>
                                <option value="" >
                                    Please select your city
                                </option>
                                {cities.map((city) => (
                                    <option key={city.city} value={city.city}>
                                        {city.city}
                                    </option>
                                ))}
                            </select>
                            <br />
                            {!isValid && !show && ( <span className='text-red-500'>Please fill these details first.</span>)}
                            <br />
                            <button type="submit" className='continue_btn'>Continue</button>
                        </div>
                        <div className="img-sec">
                            <img
                                src='/images/pages/doctor-profile-snapshot.png'
                                alt=''
                                style={{ maxWidth: '541px', width: '100%', height: 'auto' }}
                            />
                        </div>
                    </form>
                </> : <><MedicalRegistration onClick={handleBackward} /></>}
            </div>
        </div>
    )
}

export default Profile;

// components/LocationSelector.js
// import { useEffect, useState } from 'react';
// import axios from 'axios';

// const Profile = () => {
//   const [countries, setCountries] = useState([]);
//   const [regions, setRegions] = useState([]);
//   const [cities, setCities] = useState([]);
//   const [selectedCountry, setSelectedCountry] = useState('');
//   const [selectedRegion, setSelectedRegion] = useState('');
//   const [selectedCity, setSelectedCity] = useState('');

//   const BATTUTA_KEY = '00000000000000000000000000000000';
//   useEffect(() => {
//     // This is your API key (replace with your actual key)

//     // Fetch countries
//     axios
//       .get(`https://battuta.medunes.net/api/country/all/?key=${BATTUTA_KEY}`)
//       .then((response) => {
//         setCountries(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching countries:', error);
//       });
//   }, []);

//   const handleCountryChange = (event) => {
//     const countryCode = event.target.value;
//     setSelectedCountry(event.target.options[event.target.selectedIndex].text);

//     // Fetch regions based on the selected country
//     axios
//       .get(
//         `https://battuta.medunes.net/api/region/${countryCode}/all/?key=${BATTUTA_KEY}`
//       )
//       .then((response) => {
//         setRegions(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching regions:', error);
//       });
//   };

//   const handleRegionChange = (event) => {
//     setSelectedRegion(event.target.options[event.target.selectedIndex].text);
//     const countryCode = document.getElementById('country').value;
//     const region = event.target.value;

//     // Fetch cities based on the selected country and region
//     axios
//       .get(
//         `https://battuta.medunes.net/api/city/${countryCode}/search/?region=${region}&key=${BATTUTA_KEY}`
//       )
//       .then((response) => {
//         setCities(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching cities:', error);
//       });
//   };

//   const handleCityChange = (event) => {
//     setSelectedCity(event.target.options[event.target.selectedIndex].text);
//   };

//   return (
//     <div>
//       <label>Select a Country:</label>
//       <select className='w-full border-2 border-black' id="country" onChange={handleCountryChange}>
//         {countries.map((country) => (
//           <option key={country.code} value={country.code}>
//             {country.name}
//           </option>
//         ))}
//       </select>
//        <br />

//       <label>Select a Region:</label>
//       <select className='w-full border-2 border-black'  id="region" onChange={handleRegionChange}>
//         <option value="">Please select your region</option>
//         {regions.map((region) => (
//           <option key={region.region} value={region.region}>
//             {region.region}
//           </option>
//         ))}
//       </select>
// <br />
//       <label>Select a City:</label>
//       <select className='w-full border-2 border-black'  id="city" onChange={handleCityChange}>
//         <option value="">Please select your city</option>
//         {cities.map((city) => (
//           <option key={city.city} value={city.city}>
//             {city.city}
//           </option>
//         ))}
//       </select>
// <br />
//       <div id="location">
//         Location: Country: {selectedCountry}, Region: {selectedRegion}, City:{' '}
//         {selectedCity}
//       </div>
//     </div>
//   );
// };

// export default Profile;
