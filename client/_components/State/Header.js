import React from 'react'
import Image from 'next/image';
import house from "../../assets/img/house.png";
import { useRouter } from "next/router";
import clipboard from "../../assets/img/clipboard.png";
import tools from "../../assets/img/tools.png";
import peoples from "../../assets/img/peoples.png";
import Link from 'next/link';

export const header = [
    {
        title: "Property Search",
        icon: house,
        url: "/StateManagement/Onboarding/BranchOffice"
    },
    {
        title: "List a Property",
        icon: clipboard,
        url: "/BusinessMgt/Property"
    },
    {
        title: "Maintainer",
        icon: tools,
        url: "/BusinessMgt/MaintainanceReq"
    
    },
    {
        title: "Visitor Access",
        icon: peoples,
        url: "/StateManagement/Onboarding/BranchOffice"
    },
]
const Navbar = () => {
    const router = useRouter();
    let pathName = router.pathname;
    return (
        <div style={{ backgroundColor: "#101924" }} className='mt-4 pt-4'>
            <div className={`flex pt-4 p-2`}>
                {header?.map((item, index) => (
                    <div
                        key={index}
                        style={{ width: '20rem', height: '7rem' }}
                        className={`container ml-5 pt-3 m-3 flex flex-col mb-3 items-center hover_bg shadow-lg bg-white p-3 cursor-pointer
                ${(pathName === "/BusinessMgt/MaintainanceReq" && item.title === "Maintainer") ||
                                (pathName === "/BusinessMgt/Property" && item.title === "List a Property")
                                ? "h_active"
                                : (item.title === "Visitor Access" && pathName !== "/BusinessMgt/MaintainanceReq" && pathName !== "/BusinessMgt/Property")
                                    ? "h_active"
                                    : ""
                            }
                rounded-lg `}
                    >
                        <Link href={item?.url}>
                            <Image src={item?.icon} alt="" width={70} height={60} />
                        </Link>
                        <span className='text-black text-2xl'>{item?.title}</span>
                        {/* <Image src={item?.icon} alt="" width={70} height={60} /> */}
                    </div>
                ))}



            </div>
        </div>
    )
}

export default Navbar
