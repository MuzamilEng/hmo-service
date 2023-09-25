import React from 'react'

const Dues = ({title, amount, status, tent, damount, def, unpaid, untent}) => {
  return (
    <div>
        <div style={{width: '75rem'}} className="bg-[#fff] p-1 rounded-lg shadow-md">
            <div className="p-3">
               <div className="flex justify-between">
               <h1 className="text-gray-400 text-2xl">{title}</h1>
               <span className='text-black text-xl font-semibold'>Januanry</span>
               </div>
                <div className="flex justify-between items-center">
                    <h1 style={{color: "#1C9ABB"}} className="text-blue-500 text-2xl font-semibold">{amount}</h1>
                    <div className="">
                        <span className="text-gray-400 text-base">{status}</span>
                        <p className="text-black text-base">{tent}</p>
                    </div>
                </div>
                <h1 className="text-gray-400 text-lg">{unpaid}</h1>
                <div className="flex justify-between text-base items-center">
                    <h1 className=" text-xl text-black">{def}</h1>
                    <div className="">
                        <span className="text-gray-400 text-base">{damount}</span>
                        <p className="text-black text-base">{untent}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dues