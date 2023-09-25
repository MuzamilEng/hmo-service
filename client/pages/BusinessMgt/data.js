import { Icon } from '@iconify/react';
export const form = [
    {
        title: "Personal Details",
        form: [
            { label: "Full Name", placeholder: "enter your full name", type: "text" },
            { label: "Last Name", placeholder: "enter your last name", type: "text" },
            { label: "Email", placeholder: "enter your", type: "email" },
            { label: "Password", placeholder: "enter your password", type: "password" },
            { label: "Phone Number", placeholder: "enter your phone number", type: "number" },
            { label: "Total Family Members", placeholder: "enter your total family members", type: "number" },
            { label: "Profile", type: "file" },
        ]
    },
    {
        title: "Address Details",
        form: [
            { label: "Country", placeholder: "enter your country", type: "text" },
            { label: "State", placeholder: "enter your state", type: "text" },
            { label: "City", placeholder: "enter your city", type: "text" },
            { label: "Zip Code", placeholder: "enter your zip code", type: "number" },
            { label: "Address", placeholder: "enter your address", type: "textarea" },
        ]
    },
    {
        title: "Property Details",
        form: [
            { label: "Property", placeholder: "Select property", type: "select" },
            { label: "Unit", placeholder: "Select unit", type: "type" },
            { label: "Start Date", placeholder: "Select start date", type: "date" },
            { label: "End Date", placeholder: "Select end date", type: "date" },
        ]
    }
]

export const doc = [
    { title: "Documents" },
    { icon: <Icon icon="ep:upload-filled" color="blue" /> },
    { label: "Drop files here or click to upload", type: "file" },
]

export const createMantiRequest = [
    {
        title: "Create Maintenance Request",
        form: [
            {
                label: "Property", type: 'select', placeholder: "Select a property",
                options: [
                    { label: "Select Property" },
                    { label: "OceanView Retreat" },
                    { label: "987 Cantebury Drive" },
                    { label: "Serene Heaven" }
                ]
            },
            { label: "Request Date", type: 'date' },
            {
                label: "Issue Type", type: 'select', placeholder: "Select Type",
                options: [
                    { label: "Select Property" },
                    { label: "OceanView Retreat" },
                    { label: "987 Cantebury Drive" },
                    { label: "Serene Heaven" }
                ]
            },
            {
                label: "Unit", type: 'select', placeholder: "Select Unit",
                options: [
                    { label: "Select" },
                    { label: "Unit 1" },
                    { label: "Unit 2" },
                    { label: "Unit 3" }
                ]
            },
            {label: "Maintainer", type: 'text', placeholder: "Maintainer"},
            {label: "Status", type: 'select', placeholder: "Pending", 
            options: [
                {label: "Pending"},
                {label: "InProgress"},
                {label: "Completed"},
            ]
        },
        {label: "Issue Attachment", type: 'file', width: "100%",},
        {label: "Notes", type: 'textarea', width: "100%",},
        ]
    }
]