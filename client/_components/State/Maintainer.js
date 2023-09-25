import React from 'react';
import { dummyData, invoices, maintiReq } from './Data';

const Maintainer = () => {
  const columns = ["Property",'Unit', "Issue", "Request Date", "Attachment","Status", "Action"];
  const buttons = ["Print", "Copy", "PDF", "Excel"]

  return (
   <div className="mt-2 w-full max-w-[81rem] bg-[#ffff] p-3 rounded-lg pb-3">
    <div className="flex justify-between items-center">
    <div className="flex mb-2 ml-2 p-2">{buttons?.map((item, index) => <div style={{backgroundColor: "#1a7cbc"}} className='rounded-md ml-4 w-[3rem] p-2 text-white text-base' key={index}>{item}</div>)}</div>
<div className="flex border-[1px] border-gray-300 rounded-md p-2">
    <label htmlFor="searcg">Search:</label>
    <input type="search" />
</div>
    </div>
     <table className="border-collapse w-full">
      <thead>
        <tr className="bg-gray-100">
          {columns.map((column, index) => (
            <th className="border text-lg p-3 w-[10rem]" key={index}>
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {maintiReq.map((data, index) => (
          <tr className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'} key={index}>
            <td style={{width: "15rem"}} className="border p-3 w-[15rem]">{data?.invoice}</td>
            <td style={{width: "12rem"}} className="border p-3 w-[10rem]">{data?.property}</td>
            <td style={{width: "12rem"}} className="border p-3 w-[10rem]">{data?.unit}</td>
            <td style={{width: "12rem"}} className="border p-3 w-[10rem]">{data?.month}</td>
            <td style={{width: "12rem"}} className="border p-3 w-[10rem]">{data?.attachment}</td>
            <td style={{width: "12rem"}} className="border p-3 w-[10rem]">{data?.status}</td>
            <td style={{width: "12rem"}} className="border flex justify-around items-center p-3 w-[10rem]">{data?.action?.map((item, index) => (
              <div key={index} className=''><span style={{fontSize: '1.4rem'}} className='text-base hover:shadow-md hover:underline'>{item?.icon}</span></div>
            ))}</td>
          </tr>
        ))}
      </tbody>
    </table>
   </div>
  );
};

export default Maintainer;
