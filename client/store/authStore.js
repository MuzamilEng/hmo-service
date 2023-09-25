import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useMutation } from "@apollo/client";
import { gql } from "@apollo/client";
import { DateTime } from "luxon";
import { useRouter } from 'next/router'
import axios from 'axios';

export const ADD_NEW_DOCTOR = gql`
mutation Mutation($name: String!, $description: String!, $rating: Float!, $symptoms: [String!]!, $experience: Int!, $countryOfMedicalPractice: String!, $regNum: String!, $regCouncil: String!, $practiceCategory: String!, $imgUrl: String!, $qualificationTitle: String!, $qualificationType: String!, $awardingInstitution: String!, $yearOfCompletion: String!, $speciality: String!, $yearsOfExperience: String!, $establishmentName: String!, $country: String!, $state: String!, $city: String!, $coordinates: String!, $slotFromTime: String!, $slotToTime: String!) {
    createDoctor(name: $name, description: $description, rating: $rating, symptoms: $symptoms, experience: $experience, countryOfMedicalPractice: $countryOfMedicalPractice, regNum: $regNum, regCouncil: $regCouncil, practiceCategory: $practiceCategory, imgUrl: $imgUrl, qualificationTitle: $qualificationTitle, qualificationType: $qualificationType, awardingInstitution: $awardingInstitution, yearOfCompletion: $yearOfCompletion, speciality: $speciality, yearsOfExperience: $yearsOfExperience, establishmentName: $establishmentName, country: $country, state: $state, city: $city, coordinates: $coordinates, slotFromTime: $slotFromTime, slotToTime: $slotToTime) {
      name,
      description,
    }
  }
`
export const GET_ALL_DOCTORS = gql`
query GetDoctors(
  $city: String
  $id: ID
  $imageURL: String
  $name: String
  $coordinates: String
  $country: String
  $countryOfMedicalPractice: String
  $description: String
  $createdAt: String
  $yearsOfExperience: Int
  $practiceCategory: String
  $rating: Float
  $regCouncil: String
  $regNum: String
  $slotFromTime: String
  $slotToTime: String
  $specialization: String
  $state: String
  $title: String
  $updatedAt: String
  $experience: String
  $establishmentName: String
  $educationYearOfCompletion: String
  $educationSpeciality: String
  $educationQualificationType: String
  $educationQualificationTitle: String
  $educationId: ID
  $educationAwardingInstitution: String
  $feesInfoMessagingPrice: Float
  $feesInfoMessagingDescription: String
  $feesInfoVideoCallPrice: Float
  $feesInfoVideoCallDescription: String
) {
  getAllDoctors(
    city: $city
    id: $id
    imageURL: $imageURL
    name: $name
    coordinates: $coordinates
    country: $country
    countryOfMedicalPractice: $countryOfMedicalPractice
    description: $description
    createdAt: $createdAt
    yearsOfExperience: $yearsOfExperience
    practiceCategory: $practiceCategory
    rating: $rating
    regCouncil: $regCouncil
    regNum: $regNum
    slotFromTime: $slotFromTime
    slotToTime: $slotToTime
    specialization: $specialization
    state: $state
    title: $title
    updatedAt: $updatedAt
    experience: $experience
    establishmentName: $establishmentName
    education: {
      yearOfCompletion: $educationYearOfCompletion
      speciality: $educationSpeciality
      qualificationType: $educationQualificationType
      qualificationTitle: $educationQualificationTitle
      id: $educationId
      awardingInstitution: $educationAwardingInstitution
    }
    feesInfo: {
      messaging: {
        price: $feesInfoMessagingPrice
        description: $feesInfoMessagingDescription
      }
      videoCall: {
        price: $feesInfoVideoCallPrice
        description: $feesInfoVideoCallDescription
      }
    }
  ) {
    city
    id
    imageURL
    name
    coordinates
    country
    countryOfMedicalPractice
    description
    createdAt
    yearsOfExperience
    practiceCategory
    rating
    regCouncil
    regNum
    slotFromTime
    slotToTime
    specialization
    state
    title
    updatedAt
    experience
    establishmentName
    education {
      yearOfCompletion
      speciality
      qualificationType
      qualificationTitle
      id
      awardingInstitution
    }
    feesInfo {
      messaging {
        price
        description
      }
      videoCall {
        price
        description
      }
    }
  }
}

`

const AuthContext = React.createContext({
  isLoggedIn: false,
  userType: "",
  login: (data) => {},
  logout: () => {},
});
export const AuthContextProvider = (props) => {
  const [graphqlVariables, setGraphqlVariables] = useState({
    name: "",
    description: "",
    rating: 5,
    symptoms: [],
    countryOfMedicalPractice: "",
    regNum: "",
    regCouncil: "",
    practiceCategory: "",
    imgUrl: '',
    qualificationTitle: "",
    qualificationType: "",
    awardingInstitution: "" || "University of Ibadan",
    yearOfCompletion: "",
    speciality: "",
    yearsOfExperience: "",
    establishmentName: "",
    experience: 0,
    country: "",
    state: "",
    city: "",
    coordinates: "",
    slotFromTime: "",
    slotToTime: "",
    feesInfo:{
      videoCall: {
        price: 0
      },
      messaging: {
        price: 0
      },
      voiceCall: {
        price: 0
      }
    }
  });
  const [token, setToken] = React.useState("");
      const [isSidebarOpen, setIsSidebarOpen] = useState(false);
      const [airTimeData, setAirTimeData] = useState([]);
      const [person, setPerson] = useState({username: ""});
      const [createDoctor] = useMutation(ADD_NEW_DOCTOR);
      const [data, setData] = useState(null);
      const [error, setError] = useState(null);

      
      const openSidebar = ()=> {
        setIsSidebarOpen(true)
      }
      const closeSidebar = ()=> {
        setIsSidebarOpen(false)
      }
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const { data } = await createDoctor({
            variables: graphqlVariables,
          });
          console.log('GraphQL Response:', data);  
        } catch (error) {
          console.error('Error:', error);
          }
      }
  const userIsLoggedIn = !!token;

  let type = "";
  useEffect(() => {
    type = localStorage.getItem("accountType");
  }, [userIsLoggedIn, token]);
  const [accountType, setAccountType] = React.useState(type);

  const loginHandler = (data) => {
    setToken(data.data.token);
    localStorage.setItem("token", data.data.token);
    setAccountType(data.data.userType);
    localStorage.setItem("accountType", data.data.userType);
    console.log(data.data.userType, "loginHandler");
  };
  const generateRequestId = () => {
    const nigeriaTimeZone = 'Africa/Lagos';
    const now = DateTime.now().setZone(nigeriaTimeZone);
    
    const currentDate = now.toFormat('yyyyMMdd');
    const currentTime = now.toFormat('HHmmss');  
    const formattedString = `${currentDate}${currentTime}${'YourAdditionalTextHere'}`;
  
    // return formattedString;
  
    if (formattedString.length >= 15) {
      return formattedString.substring(0, 22);
    }
  
    return null; // Return null if the generated string is not at least 12 characters
  }

  const router = useRouter()

  const handleConsult = (doctor) => {
    console.log(doctor, "doctor hai uye")
    if(doctor){
    router.push({
      pathname: '/Health/doctors/doctorProfile',
      query: { doctor: JSON.stringify(doctor) },
   })
  }
}

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
    setAccountType("");
    localStorage.removeItem("accountType");
  };

  // get doctor by id
  async function fetchDoctorById(getDoctorByIdId) {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
  
    const graphql = JSON.stringify({
      query: `
        query GetDoctorById($getDoctorByIdId: ID!) {
          getDoctorById(id: $getDoctorByIdId) {
            id
            title
            experience
            name
            specialization
            description
            imageURL
            rating
            symptoms
            countryOfMedicalPractice
            regNum
            regCouncil
            practiceCategory
            yearsOfExperience
            establishmentName
            country
            state
            city
            coordinates
            slotFromTime
            slotToTime
            createdAt
            updatedAt
            education {
              awardingInstitution
              id
              qualificationTitle
              qualificationType
              speciality
              yearOfCompletion
            }
            feesInfo {
              messaging {
                description
                price
              }
              videoCall {
                description
                price
              }
              voiceCall {
                description
                price
              }
            }
          }
        }
      `,
      variables: {
        getDoctorByIdId: getDoctorByIdId,
      },
    });
  
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: graphql,
      redirect: 'follow',
    };
  
    try {
      const response = await fetch('http://localhost:3000/graphql', requestOptions);
      const result = await response.json();
      console.log('GraphQL Response:', result);
      return result.data.getDoctorById; // Return the fetched doctor data
    } catch (error) {
      console.error('Error:', error);
      throw error; // Rethrow the error to be handled by the caller
    }
  }
  
  // get doctor by id
  // country api key: 'ZVFlbNYTrPxMrVjG_MWlqpuzOwTpFv-nn8B7PtYK9Xh5K3Ld0N7Jw0shQ4Y7s2D-vSg'

  useEffect(() => {
    const fetchData = async () => {
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      const graphql = JSON.stringify({
        query: `
          query GetAllDoctors {
            getAllDoctors {
              city
              id
              imageURL
              name
              coordinates
              country
              countryOfMedicalPractice
              description
              createdAt
              yearsOfExperience
              practiceCategory
              rating
              regCouncil
              regNum
              slotFromTime
              slotToTime
              specialization
              state
              title
              updatedAt
              experience
              establishmentName
              education {
                yearOfCompletion
                speciality
                qualificationType
                qualificationTitle
                id
                awardingInstitution
              }
              feesInfo {
                messaging {
                  price
                  description
                }
                videoCall {
                  price
                  description
                }
              }
            }
          }
        `,
        variables: {},
      });

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: graphql,
        redirect: 'follow',
      };

      try {
        const response = await fetch('https://tyk.paymax.ng/hmo/graphql', requestOptions);
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);
  if (error) {
    console.log(error);
  }

  if (!data) {
    return (
      <div>
        <div className="flex justify-center items-center h-screen">
          <div className="loading-circle"></div>
        </div>
      </div>
    );
  }
  

  // Access and render data from the 'data' variable here
  const doctors = data.data.getAllDoctors;
  console.log(doctors, "doctors-array");

  

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: userIsLoggedIn,
        userType: accountType,
        login: loginHandler,
        logout: logoutHandler,
        requestId: generateRequestId(),
        airTimeData,
        setAirTimeData,
        openSidebar,
        closeSidebar,
        isSidebarOpen, 
        setIsSidebarOpen,
        person, setPerson,
        handleSubmit,
        graphqlVariables,
        setGraphqlVariables,
        doctors,
        handleConsult,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export const useGlobalContext =()=> {
return useContext(AuthContext)
}

export default AuthContext;
