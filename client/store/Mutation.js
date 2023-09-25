import { gql } from "@apollo/client";

export const CREATE_NEW_DOCTOR = gql`
mutation Mutation($name: String!, $description: String!, $rating: Float!, $symptoms: [String!]!, $countryOfMedicalPractice: String!, $regNum: String!, $regCouncil: String!, $practiceCategory: String!, $imgUrl: String!, $qualificationTitle: String!, $qualificationType: String!, $awardingInstitution: String!, $yearOfCompletion: String!, $speciality: String!, $yearsOfExperience: String!, $establishmentName: String!, $country: String!, $state: String!, $city: String!, $coordinates: String!, $slotFromTime: String!, $slotToTime: String!) {
    createDoctor(name: $name, description: $description, rating: $rating, symptoms: $symptoms, countryOfMedicalPractice: $countryOfMedicalPractice, regNum: $regNum, regCouncil: $regCouncil, practiceCategory: $practiceCategory, imgUrl: $imgUrl, qualificationTitle: $qualificationTitle, qualificationType: $qualificationType, awardingInstitution: $awardingInstitution, yearOfCompletion: $yearOfCompletion, speciality: $speciality, yearsOfExperience: $yearsOfExperience, establishmentName: $establishmentName, country: $country, state: $state, city: $city, coordinates: $coordinates, slotFromTime: $slotFromTime, slotToTime: $slotToTime) {
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

export const GET_DOCTOR_BY_ID = gql`
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

`