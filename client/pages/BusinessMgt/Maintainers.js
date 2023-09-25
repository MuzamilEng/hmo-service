import React from 'react'
import Header from '../../layouts/Header';
import Navbar from '../../_components/State/Header';
import DropdownList from "../../src/Compoment/DropdownList"
import Invoices from '../../_components/State/Invoices';
import Link from 'next/link';
import {  maintainers } from '../StateManagement/Onboarding/Data';
import Sidebar from '../../layouts/Sidebar';
import Invoice2 from '../../_components/State/Invoice2';
import Maintainer from '../../_components/State/Maintainer';
import Info from '../../_components/State/Info';
import MaintainerCard from '../../_components/State/MaintainerCard';
import Dashboard from '../../_components/State/Dashboard';


const Maintainers = () => {
  let arr = [];
  return (
    <>
      <div>
        <div className="">
          <Header />
          <div className="flex">
            <div className="mt-[2.6%] pt-3 fixed top-0 left-0">
              {/* <DropdownList /> */}
              <Sidebar />
            </div>
            <div className="absolute w-full max-w-[88rem] right-1">
              <Navbar />
              <div className="ml-[1rem]"><Dashboard title={'Maintainer'} url={'BusinessMgt/Maintainer'}/></div>
             <div className="grid grid-cols-3">
                {maintainers?.map((item, index) => (
                    <div key={index}>
                        <MaintainerCard icon={item?.icon} type={item?.type} name={item?.name} email={item?.email} icon2={item?.icon2} icon3={item?.icon3} info={item?.info} phone={item?.phone} property={item?.property} unit={item?.unit} s_date={item?.s_date}/>
                    </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </div >
    </>
  )
}

export default Maintainers