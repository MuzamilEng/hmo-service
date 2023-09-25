import { Icon } from '@iconify/react';

export const footer = [
    {
        title: "Home",
        icon: <Icon icon="material-symbols:home" />
    },
    {
        title: "House Owner",
        icon: <Icon icon="subway:round-arrow-3" />

    },
    {
        title: "Create",
        icon: <Icon icon="zondicons:add-solid" />

    },
    {
        title: "History",
        icon: <Icon icon="mdi:plant-outline" />
    },
    {
        title: "Profile",
        icon: <Icon icon="mdi:account" />
    }
]
// onboard state management

export const stateSetup = [
    {
        title: "Estate setup",
        form: [
            {
                title: "Estate property Name",
                type: 'text',
                placeholder: "Enter the name",
                required: true
            },
            {
                title: "Contact Details",
                type: 'text',
                placeholder: "Enter your contact",
                required: true
            },
            {
                title: "Phone Number",
                type: 'number',
                placeholder: "Enter your number",
                required: true

            },
            {
                title: "Email",
                type: 'email',
                placeholder: "Enter your email",
                required: true
            },
            {
                title: "Alternative Phone Number",
                type: 'number',
                placeholder: "Enter alternative number",
                required: true
            }
        ],
        para: 'Do you own multiple hotels, or are you part of a property management company or group?',
        info: [
            {
                title: "Yes",
                type: 'checkbox'
            },
            {
                title: "No",
                type: 'checkbox'
            }
        ]
    },
]
export const Location = [
    {
        title: "Location",
        form: [
            {
                title: "Property locatation",
                type: 'text',
                placeholder: "Street address",
            },
            {
                title: "Address line2",
                type: 'text',
                placeholder: "Enter your address",
            },
            {
                title: "Country",
                type: 'select',
                placeholder: "Select your country",
                options: [
                    {
                        value: "Select country",
                        label: "Select country"
                    },
                    {
                        value: "USA",
                        label: "USA"
                    },
                    {
                        value: "Nigeria",
                        label: "Nigeria"
                    }
                ]
            },
            {
                title: "City",
                type: 'select',
                placeholder: "Select city",
                options: [
                    {
                        value: "Select city",
                        label: "Select city"
                    },
                    {
                        value: "Lagos",
                        label: "Lagos"
                    },
                    {
                        value: "Abuja",
                        label: "Abuja"
                    }
                ]
            }
        ],
    },
]
export const houseOwner = [
    {
        title: "Enroll House Owner",
        form: [
            {
                title: "House Owner Name",
                type: 'text',
                placeholder: "Enter house owner name",
            },
            {
                title: "House Owner Email",
                type: 'text',
                placeholder: "Enter house owner email",
            },
            {
                title: "Mobile Number",
                type: 'number',
                placeholder: "Enter mobile number",
            },
            {
                title: "Occupation Type",
                type: 'select',
                placeholder: "Enter occupation type",
                ocupation: [
                    {
                        value: "Living in the estate",
                        label: "Living in the estate"
                    },
                    {
                        value: "Living outside the estate",
                        label: "Living outside the estate"
                    }
                ]
            },
            {
                title: 'Address',
                type: 'textarea',
            }
        ],

    },
]
export const Fees = [
    {
        title: "Facilities & Fees",
        info: 'Facilities/Amenities Provided',
        form: [
            {
                title: "",
                type: 'checkbox',
                month: [
                    { title: "Jan", value: "Jan" },
                    { title: "Feb", value: "Feb" },
                    { title: "Mar", value: "Mar" },
                ],
                amount: 'text',
                placeholder: '100.0 N'

            },
            {
                title: "Development Fee",
                type: 'checkbox',
                month: [
                    { title: "Jan", value: "Jan" },
                    { title: "Feb", value: "Feb" },
                    { title: "Mar", value: "Mar" },
                ],
                amount: 'text',
                placeholder: '100.0 N'

            },
            {
                title: "WaterBore Hole",
                type: 'checkbox',
                month: [
                    { title: "Jan", value: "Jan" },
                    { title: "Feb", value: "Feb" },
                    { title: "Mar", value: "Mar" },
                ],
                amount: 'text',
                placeholder: '100.0 N'

            },
            {
                title: "Water Supply (Pressure)",
                type: 'checkbox',
                month: [
                    { title: "Jan", value: "Jan" },
                    { title: "Feb", value: "Feb" },
                    { title: "Mar", value: "Mar" },
                ],
                amount: 'text',
                placeholder: '100.0 N'
            },
            {
                title: "Standby Generator",
                type: 'checkbox',
                month: [
                    { title: "Jan", value: "Jan" },
                    { title: "Feb", value: "Feb" },
                    { title: "Mar", value: "Mar" },
                ],
                amount: 'text',
                placeholder: '100.0 N'

            },
            {
                title: "Security",
                type: 'checkbox',
                month: [
                    { title: "Jan", value: "Jan" },
                    { title: "Feb", value: "Feb" },
                    { title: "Mar", value: "Mar" },
                ],
                amount: 'text',
                placeholder: '100.0 N'

            },
            {
                title: "House Gateman",
                type: 'checkbox',
                month: [
                    { title: "Jan", value: "Jan" },
                    { title: "Feb", value: "Feb" },
                    { title: "Mar", value: "Mar" },
                ],
                amount: 'text',
                placeholder: '100.0 N'

            },
            {
                title: "Sanitation",
                type: 'checkbox',
                month: [
                    { title: "Jan", value: "Jan" },
                    { title: "Feb", value: "Feb" },
                    { title: "Mar", value: "Mar" },
                ],
                amount: 'text',
                placeholder: '100.0 N'

            },
            {
                title: "Enter Amenity",
                type: 'checkbox',
                month: [
                    { title: "Jan", value: "Jan" },
                    { title: "Feb", value: "Feb" },
                    { title: "Mar", value: "Mar" },
                ],
                amount: 'text',
                placeholder: '100.0 N'

            },

        ]
    }
]

export const bankSetup = [
    {
        title: "Bank Setup",
        form: [
            { label: "Bank Name", placeholder: "Enter Bank Name", type: "text",},
            { label: "Bank Account", placeholder: "Enter Bank Account Number",type: "text",},
            {label: "Banking Information", placeholder: "Account Owner Name",type: "text",},
        ],
        slpit_account: "Account Split",
        para: "(Indicate if money received or paid will be shared between multiple recipients)",
        split_form: [
            { label: "Split Bank Account", placeholder: "Enter Bank Name", type: "text",},
            { label: "Select Bank Name", placeholder: "Select Bank Name",type: "Select",},
            {label: "Banking Information", placeholder: "Account Owner Name",type: "text",},
        ],
    }
]

export const maintainer =[
    {name: "Mahmud Nik Hasan", review: "4.9 (37 reviews)", title: "Painter", telphone: 28382638282, property: "njhjkhcuhudhc", icon2: <Icon icon="ic:outline-star" color="gold" />, icon1: <Icon icon="bx:edit" color="purple" />},
    {name: "Mahmud Nik Hasan", review: "4.9 (37 reviews)", title: "Painter", telphone: 28382638282, property: "njhjkhcuhudhc", icon2: <Icon icon="ic:outline-star" color="gold" />, icon1: <Icon icon="bx:edit" color="purple" />},
    {name: "Mahmud Nik Hasan", review: "4.9 (37 reviews)", title: "Painter", telphone: 28382638282, property: "njhjkhcuhudhc", icon2: <Icon icon="ic:outline-star" color="gold" />, icon1: <Icon icon="bx:edit" color="purple" />},
    {name: "Mahmud Nik Hasan", review: "4.9 (37 reviews)", title: "Painter", telphone: 28382638282, property: "njhjkhcuhudhc", icon2: <Icon icon="ic:outline-star" color="gold" />, icon1: <Icon icon="bx:edit" color="purple" />},
    {name: "Mahmud Nik Hasan", review: "4.9 (37 reviews)", title: "Painter", telphone: 28382638282, property: "njhjkhcuhudhc", icon2: <Icon icon="ic:outline-star" color="gold" />, icon1: <Icon icon="bx:edit" color="purple" />},
]

export const maintainerForm = [
    {
        title: "Maintainer",
        form: [
            {
                title: "First Name",
                type: 'text',
                placeholder: "Enter First Name",
            },
            {
                title: "Last Name",
                type: 'text',
                placeholder: "Enter Last Name",
            },
            {
                title: "Email",
                type: 'text',
                placeholder: "Enter Email",
            },
            {
                title: "Assign Property",
                type: 'select',
                placeholder: "Select",
                options: [
                    {
                        value: "Select",
                        label: "Select"
                    },
                    {
                        value: "Lagos",
                        label: "Lagos"
                    },
                    {
                        value: "Abuja",
                        label: "Abuja"
                    },
                ]
            },
            {
                title: "Type",
                type: 'text',
                placeholder: "Enter Maintainer Type",
            },
        ],
    },
]

export const maintenanceRequest = [
    {
        title: "Maintainance Request",
        form: [
            {
                title: "Property",
                type: 'select',
                placeholder: "Select Property",
                options: [
                    {
                        value: "Select Property",
                        label: "Select Property"
                    },
                    {
                        value: "Lagos",
                        label: "Lagos"
                    },
                    {
                        value: "Abuja",
                        label: "Abuja"
                    },
                ]
            },
            {
                title: "Unit",
                type: 'select',
                placeholder: "Select Unit",
                options: [
                    {
                        value: "Select Unit",
                        label: "Select Unit"
                    },
                    {
                        value: "100 yards",
                        label: "100 yards"
                    },
                    {
                        value: "200 yards",
                        label: "200 yards"
                    },
                ]
            },
            {
                title: "Request Date",
                type: 'date',
                placeholder: "Enter Request Date",
            },
            {
                title: "Select Maintainer",
                type: 'text',
                placeholder: "Enter Maintainer",
            },
            {
                title: "Issue Type",
                type: 'select',
                placeholder: "Select Issue Type",
                options: [
                    {
                        value: "Select Property",
                        label: "Select Property"
                    },
                    {
                        value: "Lagos",
                        label: "Lagos"
                    },
                    {
                        value: "Abuja",
                        label: "Abuja"
                    },
                ]
            },
            {
                title: "Status",
                type: 'select',
                placeholder: "Select Status",
                options: [
                    {
                        value: "Select Status",
                        label: "Select Status"
                    },
                    {
                        value: "Yes",
                        label: "Yes"
                    },
                    {
                        value: "No",
                        label: "No"
                    },
                ]
            },
            {
                title: "Issue Attach",
                type: 'text',
                placeholder: "",
            },
            {
                title: "Notes",
                type: 'textarea',
                placeholder: "",
            },
        ],
    },
]
// house owner
export const ownerDetails = [
    {
        title: "House Owner Details",
        form: [
            {
                title: "House Owner Name",
                type: 'text',
                placeholder: "Enter house owner name",
            },
            {
                title: "House Owner Category",
                type: 'Select',
                placeholder: "Select house owner category",
                options: [
                    {
                        value: "LandLord",
                        label: "LandLord"
                    },
                    {
                        value: "LandLady",
                        label: "LandLady"
                    }
                ]
            },
            {
                title: "Enrollment ID",
                type: 'text',
                placeholder: "Enter enrollment ID",

            },
            {
                title: "Phone Number",
                type: 'number',
                placeholder: "Enter phone number",
            },
            {
                title: "Uplod Valid ID Card",
                type: 'file',
                placeholder: "Uplod Valid ID Card",
            }
        ],
    },
]
export const houseDetails = [
    {
        title: "House Details",
        form: [
            {
                title: "Community",
                type: 'select',
                placeholder: "Type your community",
                options: [
                    {
                        value: "Select",
                        label: "Select"
                    },
                    {
                        value: "SouthEast",
                        label: "SouthEast"
                    },
                    {
                        value: "NorthWest",
                        label: "NorthWest"
                    },
                ],
            },
            {
                title: "Property Type",
                type: 'select',
                placeholder: "Select property type",
                options: [
                    {
                        value: "Select",
                        label: "Select"
                    },
                    {
                        value: "Bungalow",
                        label: "Bungalow"
                    },
                    {
                        value: "Multi Flat",
                        label: "Multi Flat"
                    },
                ],
            },
            {
                title: "Street",
                type: 'text',
                placeholder: "Enter your street",
            },
            {
                title: "Select Building",
                type: 'select',
                placeholder: "Select building Number",
                options: [
                    {
                        value: "Select",
                        label: "Select"
                    },
                    {
                        value: "Tower 110",
                        label: "Tower 110"
                    },
                    {
                        value: "Multi Flat",
                        label: "Multi Flat"
                    },
                ],
            }
        ],
    }
]

export const houseDetail = [
    {
        title: "House Details",
        units:{label: "Units", placeholder: "Enter Units", type: "text"},
        form: [
            {label: "Unit Name", placeholder: "", type: "text", width:'w-1/2'},
            {label: "Bedroom", placeholder: "", type: "text", width:'w-1/2'},
            {label: "Bath", placeholder: "", type: "text", width:'w-1/2'},
            {label: "Kitchen", placeholder: "", type: "text", width:'w-1/2'},

        ]
    }
]

// house owner cont missing endpoint

export const piadUnpaid = [
    {
        name: "James Kelly",
        amount: "$100,000",
        date: "12/02/2022",
        status: "Unpaid"
    },
    {
        name: "James Kelly",
        amount: "$100,000",
        date: "12/02/2022",
        status: "Paid"
    },
    {
        name: "James Kelly",
        amount: "$100,000",
        date: "12/02/2022",
        status: "Unpaid"
    },
    {
        name: "James Kelly",
        amount: "$100,000",
        date: "12/02/2022",
        status: "Paid"
    },
    {
        name: "James Kelly",
        amount: "$100,000",
        date: "12/02/2022",
        status: "Unpaid"
    },
    {
        name: "James Kelly",
        amount: "$100,000",
        date: "12/02/2022",
        status: "Paid"
    }
]
// use same for next page condition status == 'Paid' ? 'Invited' : 'Invite'
export const affectedTent = [
    {
        title: "Type",
        type: 'select',
        placeholder: "Select Community",
        options: [
            {
                value: "Select",
                label: "Select"
            },
            {
                value: "Bungalow",
                label: "Bungalow"
            },
            {
                value: "Multi Flat",
                label: "Multi Flat"
            },
        ],
    },
    {
        title: "Affected Tenant",
        type: 'select',
        placeholder: "Select Bungalow / Multi Flat",
        options: [
            {
                value: "Select",
                label: "Select"
            },
            {
                value: "Bungalow",
                label: "Bungalow"
            },
            {
                value: "Multi Flat",
                label: "Multi Flat"
            },
        ],
    },
    {
        title: "Detail",
        type: 'textarea',
    }
]

// tenant updated
export const royalGardenEstate = [
    {
        title: "Royal Garden Estate",
        form: [
            {
                title: "Surname",
                type: 'text',
                placeholder: "Enter your name",
                icon: <Icon icon="material-symbols:person-outline-rounded" />,
            },
            {
                title: "Other Name",
                type: 'text',
                placeholder: "Enter your name"
            },
            {
                title: "Mobile Number",
                type: 'number',
                placeholder: "Enter mobile number",
                icon: <Icon icon="material-symbols:phone-in-talk-outline" />
            },
            {
                title: "Email",
                type: 'text',
                placeholder: "Enter your email",
            },
            {
                title: "Select Your Street",
                type: 'select',
                placeholder: "Select your street",
            },
            {
                title: "Select Your Building",
                type: 'select',
                placeholder: "Select your building",
            },
            {
                title: "Select Your Appartment",
                type: 'select',
                placeholder: "Select your Appartment",
            }
        ]
    }
]

export const visitorType = [
    {
        title: "Visitor Type",
        info: [
            {
                title: "Registered",
                type: 'checkbox'
            },
            {
                title: "Non Registered",
                type: 'checkbox'
            }
        ],
        form: [
            {
                title: "Visitor Name",
                type: 'text',
                placeholder: "Enter visitor name",
                icon: <Icon icon="material-symbols:person-outline-rounded" />,
            },
            {
                title: "Visitor Email",
                type: 'text',
                placeholder: "Enter visitor email",
                optional: "optional",
                icon: <Icon icon="material-symbols:email-outline-rounded" />
            },
            {
                title: "Visitor Mobile Number",
                type: 'number',
                placeholder: "Enter visitor mobile number",
                icon: <Icon icon="material-symbols:phone-in-talk-outline" />
            },
            {
                title: "Visitor Image Upload",
                type: 'file',
                placeholder: "Uplod Visitor Image",
            }
        ],
                date: [
                    {
                        title: "Date in",
                        type: 'date',
                        placeholder: "Enter date",
                        icon: <Icon icon="material-symbols:calendar-month-outline-rounded" />
                    },
                    {
                        title: "Date out",
                        type: 'date',
                        placeholder: "Enter date",
                        icon: <Icon icon="material-symbols:calendar-month-outline-rounded" />
                    }
                ],
                exTime: [
                    {
                        title: "Expected Time of Arrival",
                        info: [
                            { title: 'From', type: 'text' },
                            { title: 'To', type: 'text' },
                        ]
                    }
                ],
            },
]

// qr code forms 
export const qrCode = [
    {
        name: 'Lizzy Rose',
        date: '12/02/2022',
        code: 'REG-234DX-',
        time: '1 Day',
        image: 'arrowImage',
        icon: <Icon icon="material-symbols:arrow-right-rounded" />
    },
    {
        name: 'Lizzy Rose',
        date: '12/02/2022',
        code: 'REG-234DX-',
        time: '1 Day',
        image: 'arrowImage',
        icon: <Icon icon="material-symbols:arrow-right-rounded" />
    }, {
        name: 'Lizzy Rose',
        date: '12/02/2022',
        code: 'REG-234DX-',
        time: '1 Day',
        image: 'arrowImage',
        icon: <Icon icon="material-symbols:arrow-right-rounded" />
    }, {
        name: 'Lizzy Rose',
        date: '12/02/2022',
        code: 'REG-234DX-',
        time: '1 Day',
        image: 'arrowImage',
        icon: <Icon icon="material-symbols:arrow-right-rounded" />
    }, {
        name: 'Lizzy Rose',
        date: '12/02/2022',
        code: 'REG-234DX-',
        time: '1 Day',
        image: 'arrowImage',
        icon: <Icon icon="material-symbols:arrow-right-rounded" />
    }, {
        name: 'Lizzy Rose',
        date: '12/02/2022',
        code: 'REG-234DX-',
        time: '1 Day',
        image: 'arrowImage',
        icon: <Icon icon="material-symbols:arrow-right-rounded" />
    }, {
        name: 'Lizzy Rose',
        date: '12/02/2022',
        code: 'REG-234DX-',
        time: '1 Day',
        image: 'arrowImage',
        icon: <Icon icon="material-symbols:arrow-right-rounded" />
    },
]

export const Orders = [
    {
        title: "Royal State Garden",
        icon: <Icon icon="fluent-emoji:party-popper" color="green" />,
        form: [
            {
                info1: 'Your Order Is Submitted',
                info: 'We’re Happy to Let you know that your Order has been submitted to community admin of “$CommunityName” You should receive a response as soon as possible.',
                order_number: '#C9E420L',
                date: '12/02/2022',
                details: 'Json I. Owens',
                pr_address: "United States, 1040, New York",
            }
        ]
    }
]

// guest invited charts

export const guestInvited = [
    {
        title: "Guest Invited Chart",
        month: "This Month",
        info: "You've invited 8 guests more than last month",
        form: [
            {
                icon: <Icon icon="clarity:coin-bag-line" />,
                title: "Highest Payment Compliance",
                charges: "Security",
                price:"$1,699.46",
                date: "12/02/2022",
                tenant: "$TenantName",
                bg: "#544AB5"
            },
            {
                icon: <Icon icon="fluent-mdl2:all-currency" />,
                title: "Worst Payment Compliance",
                charges: "Water",
                price:"$$80.46",
                date: "5 Times",
                tenant: "$TenantName",
                bg: "#3385CA"
            }
        ]
    }
]
export const tenantPayments = [
    {
        title: "Tenent Payments",
        month: "This Month",
        info: "You've 8 Tenent payments last month",
    }
]

export const estateServices = [
    {
        title: "Estate Services & Bills",
        form: [
            {
                icon: <Icon icon="bxs:shopping-bags" />,
                charges: "Security Fees - N5,000",
                date: "Next Due on 25th Jan 2023",
                icon2: <Icon icon="fe:arrow-right" />,
                bg: "#453ABD"
            },
            {
                icon: <Icon icon="ph:fork-knife-fill" />,
                charges: "Utility Services - N1,000",
                date: "Next Due on 25th Jan 2023",
                icon2: <Icon icon="fe:arrow-right" />,
                bg: "#0D77CF"
            },
            {
                icon: <Icon icon="solar:bill-list-broken" />,
                charges: "Service Charge - N2,000",
                date: "Next Due on 25th Jan 2023",
                icon2: <Icon icon="fe:arrow-right" />,
                bg:"#1C9ABB"

            },
            {
                icon: <Icon icon="solar:bag-4-bold-duotone" />,
                charges: "Development levy - N12,000",
                date: "Next Due on 25th Jan 2023",
                icon2: <Icon icon="fe:arrow-right" />,
                bg: '#10B364'
            },
            {
                icon: <Icon icon="fluent-mdl2:all-currency" />,
                charges: "Fee & Charges",
                date: "$274 monthly average",
                icon2: <Icon icon="fe:arrow-right" />,
                bg: '#3385CA'
            },
        ]
    }
]
export const estateBill = [
    {
        title: "Estate Services & Bills",
        form: [
            {
                icon: <Icon icon="bxs:shopping-bags" />,
                charges: "Security Fees - N5,000",
                paid: "Paid 12",
                unpaid: "Unpaid 12",
                icon2: <Icon icon="fe:arrow-right" />,
                bg: "#453ABD"
            },
            {
                icon: <Icon icon="ph:fork-knife-fill" />,
                charges: "Utility Services - N1,000",
                paid: "Paid 12",
                unpaid: "Unpaid 12",
                icon2: <Icon icon="fe:arrow-right" />,
                bg: "#0D77CF"
            },
            {
                icon: <Icon icon="solar:bill-list-broken" />,
                charges: "Service Charge - N2,000",
                paid: "Paid 12",
                unpaid: "Unpaid 12",
                icon2: <Icon icon="fe:arrow-right" />,
                bg:"#1C9ABB"

            },
            {
                icon: <Icon icon="solar:bag-4-bold-duotone" />,
                charges: "Development levy - N12,000",
                paid: "Paid 12",
                unpaid: "Unpaid 12",
                icon2: <Icon icon="fe:arrow-right" />,
                bg: '#10B364'
            },
            {
                icon: <Icon icon="fluent-mdl2:all-currency" />,
                charges: "Fee & Charges",
                paid: "Paid 12",
                unpaid: "Unpaid 12",
                icon2: <Icon icon="fe:arrow-right" />,
                bg: '#3385CA'
            },
        ]
    }
]
export const payList = [
    {
        name: "James Kelly",
        amount: "$100,000",
        date: "12/02/2022",
        id:1,
        status: "1"
    },
    {
        name: "James Kelly",
        amount: "$100,000",
        date: "12/02/2022",
        status: "20"
    },
    {
        name: "James Kelly",
        amount: "$100,000",
        date: "12/02/2022",
        id:1,
        status: "2"
    },
    {
        name: "James Kelly",
        amount: "$100,000",
        date: "12/02/2022",
        status: "4"
    },
    {
        name: "James Kelly",
        amount: "$100,000",
        date: "12/02/2022",
        id:1,
        status: "1"
    },
    {
        name: "James Kelly",
        amount: "$100,000",
        date: "12/02/2022",
        status: "10"
    }
]

export const transaction = [
    {
        name: "James Kelly",
        amount: "$100,000",
        date: "12/02/2022",
        id:1,
        item: "1",
        status: "Overstay"
    },
    {
        name: "James Kelly",
        amount: "$100,000",
        date: "12/02/2022",
        item: "20",
        status: "Exist"

    },
    {
        name: "James Kelly",
        amount: "$100,000",
        date: "12/02/2022",
        id:1,
        item: "2",
        status: "Overstay"

    },
    {
        name: "James Kelly",
        amount: "$100,000",
        date: "12/02/2022",
        item: "4",
        status: "Exist"

    },
    {
        name: "James Kelly",
        amount: "$100,000",
        date: "12/02/2022",
        id:1,
        item: "1",
        status: "Overstay"

    },
    {
        name: "James Kelly",
        amount: "$100,000",
        date: "12/02/2022",
        status: "10",
        status: "Exist"

    }
]

// tenant cards
export const tenantCards = [
    {
        icon: <Icon icon="iconamoon:profile-fill" />,
        name: "Myrtle Hale",
        email: "Tenant@Gmail.com",
        icon2: <Icon icon="pepicons-pencil:dots-y" />,
        icon3: <Icon icon="ic:baseline-info" color="#1a7cbc" />,
        info: "Infomation",
        address: "456 Ocean Avenue, Miami, FL 12345",
        phone: "+1 (319) 313-2081",
        unit:"1",
        family: "5",
        property: "Oceanview Retreat",
        s_date: "Jul 1, 2023",
        e_date: "Jul 31, 2023"
    },
    {
        icon: <Icon icon="iconamoon:profile-fill" />,
        name: "Myrtle Hale",
        email: "Tenant@Gmail.com",
        icon2: <Icon icon="pepicons-pencil:dots-y" />,
        icon3: <Icon icon="ic:baseline-info" color="#1a7cbc" />,
        info: "Infomation",
        address: "456 Ocean Avenue, Miami, FL 12345",
        phone: "+1 (319) 313-2081",
        unit:"1",
        family: "5",
        property: "Oceanview Retreat",
        s_date: "Jul 1, 2023",
        e_date: "Jul 31, 2023"
    },
    {
        icon: <Icon icon="iconamoon:profile-fill" />,
        name: "Myrtle Hale",
        email: "Tenant@Gmail.com",
        icon2: <Icon icon="pepicons-pencil:dots-y" />,
        icon3: <Icon icon="ic:baseline-info" color="#1a7cbc" />,
        info: "Infomation",
        address: "456 Ocean Avenue, Miami, FL 12345",
        phone: "+1 (319) 313-2081",
        unit:"1",
        family: "5",
        property: "Oceanview Retreat",
        s_date: "Jul 1, 2023",
        e_date: "Jul 31, 2023"
    },
    {
        icon: <Icon icon="iconamoon:profile-fill" />,
        name: "Myrtle Hale",
        email: "Tenant@Gmail.com",
        icon2: <Icon icon="pepicons-pencil:dots-y" />,
        icon3: <Icon icon="ic:baseline-info" color="#1a7cbc" />,
        info: "Infomation",
        address: "456 Ocean Avenue, Miami, FL 12345",
        phone: "+1 (319) 313-2081",
        unit:"1",
        family: "5",
        property: "Oceanview Retreat",
        s_date: "Jul 1, 2023",
        e_date: "Jul 31, 2023"
    },
    {
        icon: <Icon icon="iconamoon:profile-fill" />,
        name: "Myrtle Hale",
        email: "Tenant@Gmail.com",
        icon2: <Icon icon="pepicons-pencil:dots-y" />,
        icon3: <Icon icon="ic:baseline-info" color="#1a7cbc" />,
        info: "Infomation",
        address: "456 Ocean Avenue, Miami, FL 12345",
        phone: "+1 (319) 313-2081",
        unit:"1",
        family: "5",
        property: "Oceanview Retreat",
        s_date: "Jul 1, 2023",
        e_date: "Jul 31, 2023"
    },
    {
        icon: <Icon icon="iconamoon:profile-fill" />,
        name: "Myrtle Hale",
        email: "Tenant@Gmail.com",
        icon2: <Icon icon="pepicons-pencil:dots-y" />,
        icon3: <Icon icon="ic:baseline-info" color="#1a7cbc" />,
        info: "Infomation",
        address: "456 Ocean Avenue, Miami, FL 12345",
        phone: "+1 (319) 313-2081",
        unit:"1",
        family: "5",
        property: "Oceanview Retreat",
        s_date: "Jul 1, 2023",
        e_date: "Jul 31, 2023"
    },
    {
        icon: <Icon icon="iconamoon:profile-fill" />,
        name: "Myrtle Hale",
        email: "Tenant@Gmail.com",
        icon2: <Icon icon="pepicons-pencil:dots-y" />,
        icon3: <Icon icon="ic:baseline-info" color="#1a7cbc" />,
        info: "Infomation",
        address: "456 Ocean Avenue, Miami, FL 12345",
        phone: "+1 (319) 313-2081",
        unit:"1",
        family: "5",
        property: "Oceanview Retreat",
        s_date: "Jul 1, 2023",
        e_date: "Jul 31, 2023"
    },
    {
        icon: <Icon icon="iconamoon:profile-fill" />,
        name: "Myrtle Hale",
        email: "Tenant@Gmail.com",
        icon2: <Icon icon="pepicons-pencil:dots-y" />,
        icon3: <Icon icon="ic:baseline-info" color="#1a7cbc" />,
        info: "Infomation",
        address: "456 Ocean Avenue, Miami, FL 12345",
        phone: "+1 (319) 313-2081",
        unit:"1",
        family: "5",
        property: "Oceanview Retreat",
        s_date: "Jul 1, 2023",
        e_date: "Jul 31, 2023"
    },
    {
        icon: <Icon icon="iconamoon:profile-fill" />,
        name: "Myrtle Hale",
        email: "Tenant@Gmail.com",
        icon2: <Icon icon="pepicons-pencil:dots-y" />,
        icon3: <Icon icon="ic:baseline-info" color="#1a7cbc" />,
        info: "Infomation",
        address: "456 Ocean Avenue, Miami, FL 12345",
        phone: "+1 (319) 313-2081",
        unit:"1",
        family: "5",
        property: "Oceanview Retreat",
        s_date: "Jul 1, 2023",
        e_date: "Jul 31, 2023"
    },
]

export const maintainers = [
    {
        icon: <Icon icon="iconamoon:profile-fill" />,
        name: "Myrtle Hale",
        email: "Tenant@Gmail.com",
        icon2: <Icon icon="pepicons-pencil:dots-y" />,
        icon3: <Icon icon="ic:baseline-info" color="#1a7cbc" />,
        info: "Infomation",
        address: "456 Ocean Avenue, Miami, FL 12345",
        phone: "+1 (319) 313-2081",
        type: "Electricitian",
        unit:"1",
        family: "5",
        property: "Oceanview Retreat",
        s_date: "Jul 1, 2023",
    },
    {
        icon: <Icon icon="iconamoon:profile-fill" />,
        name: "Myrtle Hale",
        email: "Tenant@Gmail.com",
        icon2: <Icon icon="pepicons-pencil:dots-y" />,
        icon3: <Icon icon="ic:baseline-info" color="#1a7cbc" />,
        info: "Infomation",
        address: "456 Ocean Avenue, Miami, FL 12345",
        phone: "+1 (319) 313-2081",
        unit:"1",
        type: "Electricitian",
        family: "5",
        property: "Oceanview Retreat",
        s_date: "Jul 1, 2023",
    },
    {
        icon: <Icon icon="iconamoon:profile-fill" />,
        name: "Myrtle Hale",
        email: "Tenant@Gmail.com",
        icon2: <Icon icon="pepicons-pencil:dots-y" />,
        icon3: <Icon icon="ic:baseline-info" color="#1a7cbc" />,
        info: "Infomation",
        address: "456 Ocean Avenue, Miami, FL 12345",
        phone: "+1 (319) 313-2081",
        type: "Electricitian",
        unit:"1",
        family: "5",
        property: "Oceanview Retreat",
        s_date: "Jul 1, 2023",
    },
    {
        icon: <Icon icon="iconamoon:profile-fill" />,
        name: "Myrtle Hale",
        email: "Tenant@Gmail.com",
        icon2: <Icon icon="pepicons-pencil:dots-y" />,
        icon3: <Icon icon="ic:baseline-info" color="#1a7cbc" />,
        info: "Infomation",
        address: "456 Ocean Avenue, Miami, FL 12345",
        phone: "+1 (319) 313-2081",
        unit:"1",
        type: "Electricitian",
        family: "5",
        property: "Oceanview Retreat",
        s_date: "Jul 1, 2023",
    },
    {
        icon: <Icon icon="iconamoon:profile-fill" />,
        name: "Myrtle Hale",
        email: "Tenant@Gmail.com",
        icon2: <Icon icon="pepicons-pencil:dots-y" />,
        icon3: <Icon icon="ic:baseline-info" color="#1a7cbc" />,
        info: "Infomation",
        address: "456 Ocean Avenue, Miami, FL 12345",
        phone: "+1 (319) 313-2081",
        unit:"1",
        type: "Electricitian",
        family: "5",
        property: "Oceanview Retreat",
        s_date: "Jul 1, 2023",
    },
    {
        icon: <Icon icon="iconamoon:profile-fill" />,
        name: "Myrtle Hale",
        email: "Tenant@Gmail.com",
        icon2: <Icon icon="pepicons-pencil:dots-y" />,
        icon3: <Icon icon="ic:baseline-info" color="#1a7cbc" />,
        info: "Infomation",
        address: "456 Ocean Avenue, Miami, FL 12345",
        phone: "+1 (319) 313-2081",
        unit:"1",
        family: "5",
        type: "Electricitian",
        property: "Oceanview Retreat",
        s_date: "Jul 1, 2023",
    },
]

export const properties = [
    {
        title: "OceanView Retreat",
        img: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        icon: <Icon icon="vaadin:lines" color="#1a7cbc" />,
        unit: "4 Unit",
        icon2: <Icon icon="fluent:wallet-48-regular" color="#1a7cbc" />,
        room: "18 Rooms",
        para: "Welcome to Oceanview Retreat, an exquisite beachfront property located in the vibrant city of Miami, Florida. Situated along the pristine shores of the Atlantic Ocean, this luxurious estate offers a t...",
        property : "Own Property",
        icon3: <Icon icon="bx:edit" color="green" />,
        icon4: <Icon icon="material-symbols:delete-outline" color="red" />,
    },
    {
        title: "OceanView Retreat",
        img: 'https://images.unsplash.com/photo-1567428485548-c499e4931c10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        icon: <Icon icon="vaadin:lines" color="#1a7cbc" />,
        unit: "4 Unit",
        icon2: <Icon icon="fluent:wallet-48-regular" color="#1a7cbc" />,
        room: "18 Rooms",
        para: "Welcome to Oceanview Retreat, an exquisite beachfront property located in the vibrant city of Miami, Florida. Situated along the pristine shores of the Atlantic Ocean, this luxurious estate offers a t...",
        property : "Own Property",
        icon3: <Icon icon="bx:edit" color="green" />,
        icon4: <Icon icon="material-symbols:delete-outline" color="red" />,
    },
    {
        title: "OceanView Retreat",
        img: 'https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        icon: <Icon icon="vaadin:lines" color="#1a7cbc" />,
        unit: "4 Unit",
        icon2: <Icon icon="fluent:wallet-48-regular" color="#1a7cbc" />,
        room: "18 Rooms",
        para: "Welcome to Oceanview Retreat, an exquisite beachfront property located in the vibrant city of Miami, Florida. Situated along the pristine shores of the Atlantic Ocean, this luxurious estate offers a t...",
        property : "Own Property",
        icon3: <Icon icon="bx:edit" color="green" />,
        icon4: <Icon icon="material-symbols:delete-outline" color="red" />,
    },
    {
        title: "OceanView Retreat",
        img: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        icon: <Icon icon="vaadin:lines" color="#1a7cbc" />,
        unit: "4 Unit",
        icon2: <Icon icon="fluent:wallet-48-regular" color="#1a7cbc" />,
        room: "18 Rooms",
        para: "Welcome to Oceanview Retreat, an exquisite beachfront property located in the vibrant city of Miami, Florida. Situated along the pristine shores of the Atlantic Ocean, this luxurious estate offers a t...",
        property : "Own Property",
        icon3: <Icon icon="bx:edit" color="green" />,
        icon4: <Icon icon="material-symbols:delete-outline" color="red" />,
    },
    {
        title: "OceanView Retreat",
        img: 'https://images.unsplash.com/photo-1625602812206-5ec545ca1231?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        icon: <Icon icon="vaadin:lines" color="#1a7cbc" />,
        unit: "4 Unit",
        icon2: <Icon icon="fluent:wallet-48-regular" color="#1a7cbc" />,
        room: "18 Rooms",
        para: "Welcome to Oceanview Retreat, an exquisite beachfront property located in the vibrant city of Miami, Florida. Situated along the pristine shores of the Atlantic Ocean, this luxurious estate offers a t...",
        property : "Own Property",
        icon3: <Icon icon="bx:edit" color="green" />,
        icon4: <Icon icon="material-symbols:delete-outline" color="red" />,
    },
    {
        title: "OceanView Retreat",
        img: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        icon: <Icon icon="vaadin:lines" color="#1a7cbc" />,
        unit: "4 Unit",
        icon2: <Icon icon="fluent:wallet-48-regular" color="#1a7cbc" />,
        room: "18 Rooms",
        para: "Welcome to Oceanview Retreat, an exquisite beachfront property located in the vibrant city of Miami, Florida. Situated along the pristine shores of the Atlantic Ocean, this luxurious estate offers a t...",
        property : "Own Property",
        icon3: <Icon icon="bx:edit" color="green" />,
        icon4: <Icon icon="material-symbols:delete-outline" color="red" />,
    },
    {
        title: "OceanView Retreat",
        img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        icon: <Icon icon="vaadin:lines" color="#1a7cbc" />,
        unit: "4 Unit",
        icon2: <Icon icon="fluent:wallet-48-regular" color="#1a7cbc" />,
        room: "18 Rooms",
        para: "Welcome to Oceanview Retreat, an exquisite beachfront property located in the vibrant city of Miami, Florida. Situated along the pristine shores of the Atlantic Ocean, this luxurious estate offers a t...",
        property : "Own Property",
        icon3: <Icon icon="bx:edit" color="green" />,
        icon4: <Icon icon="material-symbols:delete-outline" color="red" />,
    },
    {
        title: "OceanView Retreat",
        img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        icon: <Icon icon="vaadin:lines" color="#1a7cbc" />,
        unit: "4 Unit",
        icon2: <Icon icon="fluent:wallet-48-regular" color="#1a7cbc" />,
        room: "18 Rooms",
        para: "Welcome to Oceanview Retreat, an exquisite beachfront property located in the vibrant city of Miami, Florida. Situated along the pristine shores of the Atlantic Ocean, this luxurious estate offers a t...",
        property : "Own Property",
        icon3: <Icon icon="bx:edit" color="green" />,
        icon4: <Icon icon="material-symbols:delete-outline" color="red" />,
    },
]