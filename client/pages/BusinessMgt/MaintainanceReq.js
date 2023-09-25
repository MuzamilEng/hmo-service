import React, { useState } from 'react';
import Header from '../../layouts/Header';
import Navbar from '../../_components/State/Header';
import Sidebar from '../../layouts/Sidebar';
import Maintainer from '../../_components/State/Maintainer';
import Dashboard2 from '../../_components/State/Dashboard2';
import Request from './Request';

const MaintainanceReq = () => {
  const [showMaintainer, setShowMaintainer] = useState(true);

  const toggleMaintainer = () => {
    setShowMaintainer((prevShowMaintainer) => !prevShowMaintainer);
  };

  return (
    <>
      <div>
        <div className="">
          <Header />
          <div className="flex">
            <div className="mt-[2.6%] pt-3 fixed top-0 left-0">
              <Sidebar />
            </div>
            <div className="absolute w-full max-w-[88rem] right-1">
              <div className=''>
                <Navbar />
                <div onClick={toggleMaintainer} className="ml-[1rem]">
                  <Dashboard2 title={'Maintainer'} />
                </div>
              </div>
              <div className="flex justify-center items-center mt-4">
                <div className="absolute w-full max-w-[75rem] top-[10rem]">{!showMaintainer && <Request close={toggleMaintainer} />}</div>
                <div className={``} style={{backgroundColor : !setShowMaintainer && 'red'}}>
                   <Maintainer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MaintainanceReq;
