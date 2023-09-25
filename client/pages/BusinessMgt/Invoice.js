import React from 'react'
import Header from '../../layouts/Header';
import Navbar from '../../_components/State/Header';
import DropdownList from "../../src/Compoment/DropdownList"
import Invoices from '../../_components/State/Invoices';
import Link from 'next/link';
import { houseDetail } from '../StateManagement/Onboarding/Data';
import Sidebar from '../../layouts/Sidebar';
import Invoice2 from '../../_components/State/Invoice2';
import Dashboard from '../../_components/State/Dashboard';

const Invoice = () => {
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
              <div className="ml-[1rem]"><Dashboard title={'Invoice'} url={'BusinessMgt/Invoice'}/></div>
              <div className="flex justify-center items-center mt-4">
              <div className='ml-[1rem]'>
                <Invoice2 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
    </>
  )
}

export default Invoice