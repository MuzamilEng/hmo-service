import React from 'react'
import Header from '../../layouts/Header';
import Navbar from '../../_components/State/Header';
import DropdownList from "../../src/Compoment/DropdownList"
import Invoices from '../../_components/State/Invoices';
import Link from 'next/link';
import { houseDetail, tenantCards } from '../StateManagement/Onboarding/Data';
import Sidebar from '../../layouts/Sidebar';
import Invoice2 from '../../_components/State/Invoice2';
import Maintainer from '../../_components/State/Maintainer';
import Info from '../../_components/State/Info';
import Dashboard from '../../_components/State/Dashboard';


const Tenant = () => {
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
              <div className="ml-[1rem]"><Dashboard title={'Tenant'} url={'BusinessMgt/Tenant'}/></div>
             <div className="grid grid-cols-3">
                {tenantCards?.map((item, index) => (
                    <div key={index}>
                        <Info icon={item?.icon} name={item?.name} email={item?.email} icon2={item?.icon2} icon3={item?.icon3} info={item?.info} address={item?.address} phone={item?.phone} family={item?.family} property={item?.property} unit={item?.unit} s_date={item?.s_date} e_date={item?.e_date}/>
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

export default Tenant