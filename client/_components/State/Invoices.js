import React from 'react';
import { dummyData } from './Data';

const Invoices = () => {
  const columns = ["Invoice", "Property", "Amount", "Status", "Action"];
  const buttons = ["Print", "Copy", "PDF", "Excel"]

  return (
   <div className="mt-2 bg-[#ffff] p-3 rounded-lg pb-3">
    <div className="flex mb-2 ml-2 p-2">{buttons?.map((item, index) => <div style={{backgroundColor: "#1a7cbc"}} className='rounded-md ml-4 w-[3rem] p-2 text-white text-base' key={index}>{item}</div>)}</div>
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
        {dummyData.map((data, index) => (
          <tr className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'} key={index}>
            <td className="border p-3 w-[10rem]">{data?.invoice}</td>
            <td className="border p-3 w-[10rem]">{data?.property}</td>
            <td className="border p-3 w-[10rem]">{data?.amount}</td>
            <td className="border p-3 w-[10rem]">{data?.status}</td>
            <td className="border flex justify-around items-center p-3 w-[10rem]">{data?.action?.map((item, index) => (
              <div key={index} className=''><span style={{fontSize: '1.4rem'}} className='text-base hover:shadow-md hover:underline'>{item?.icon}</span></div>
            ))}</td>
          </tr>
        ))}
      </tbody>
    </table>
   </div>
  );
};

export default Invoices;


    //     <div className="col-md-7 col-sm-7 w-[45rem] ml-8">
    //         <div className="card">
    //           <div className="card-header">
    //             <div className="row">
    //               <div className="col">
    //                 <h5 className="card-title">Recent Invoices</h5>
    //               </div>
    //               <div className="col-auto">
    //                 <Link href="/invoices">
    //                   <a className="btn-right btn btn-sm btn-outline-primary">
    //                     View All
    //                   </a>
    //                 </Link>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="card-body">
    //             <div className="mb-3">
    //               <div className="progress progress-md rounded-pill mb-3">
    //                 <div
    //                   className="progress-bar bg-success"
    //                   role="progressbar"
    //                   style={{ width: "47%" }}
    //                   aria-valuenow="47"
    //                   aria-valuemin="0"
    //                   aria-valuemax="100"
    //                 ></div>
    //                 <div
    //                   className="progress-bar bg-warning"
    //                   role="progressbar"
    //                   style={{ width: "28%" }}
    //                   aria-valuenow="28"
    //                   aria-valuemin="0"
    //                   aria-valuemax="100"
    //                 ></div>
    //                 <div
    //                   className="progress-bar bg-danger"
    //                   role="progressbar"
    //                   style={{ width: "15%" }}
    //                   aria-valuenow="15"
    //                   aria-valuemin="0"
    //                   aria-valuemax="100"
    //                 ></div>
    //                 <div
    //                   className="progress-bar bg-info"
    //                   role="progressbar"
    //                   style={{ width: "10%" }}
    //                   aria-valuenow="10"
    //                   aria-valuemin="0"
    //                   aria-valuemax="100"
    //                 ></div>
    //               </div>
    //               <div className="row">
    //                 <div className="col-auto">
    //                   <i className="fas fa-circle text-success mr-1"></i> Paid
    //                 </div>
    //                 <div className="col-auto">
    //                   <i className="fas fa-circle text-warning mr-1"></i> Unpaid
    //                 </div>
    //                 <div className="col-auto">
    //                   <i className="fas fa-circle text-danger mr-1"></i> Overdue
    //                 </div>
    //                 <div className="col-auto">
    //                   <i className="fas fa-circle text-info mr-1"></i> Draft
    //                 </div>
    //               </div>
    //       <div className="grid grid-cols-5 gap-2 p-2"></div>
    //       {piadUnpaid?.map((item, index) => (
    //         <div key={index} className='flex justify-evenly border-b-2 m-2 border-gray-800 pt-1'>
    //           <p className='w-[2rem] text-center' style={{width: '4rem'}}>{item?.name}</p>
    //           <p className='w-[2rem] text-center' style={{width: '4rem'}}>{item?.amount}</p>
    //           <p className='w-[2rem] text-center' style={{width: '4rem'}}>{item?.date}</p>
    //           <p className='w-[2rem] text-center' style={{width: '4rem'}}>{item?.status}</p>
    //           </div>
    //       ))}
    // </div>
    //             </div>
    //           </div>
    //         </div>