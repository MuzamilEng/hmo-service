import React from 'react'

const PropertyCard = ({img, title, icon, room, icon2, unit, para, property, icon3, icon4}) => {
  return (
    <div style={{width: '100%', maxWidth: '19rem',}} className='bg-[#fff] m-2 rounded-md top_radius shadow-md'>
    <div style={{borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem'}} className="img rounded-t-md">
        <img src={img} style={{width: '100%', maxWidth: "20rem"}} alt="def" className='rounded-t-md top_radius' />
    </div>
    <h1 className="text-black text-2xl font-bold ml-2 p-1">{title}</h1>
    <div className="flex items-center p-2">
        <span className='text-xl'>{icon}</span>
        <span className='text-base font-bold ml-2'>{unit}</span>
        <span className='text-xl ml-3'>{icon2}</span>
        <span className='text-base font-bold ml-2'>{room}</span>
    </div>
    <p className='text-base flex text-justify p-2'>{para}</p>
    <div className="flex justify-between items-center">
        <span className='text-base p-2 bg-gray-200 rounded-md m-2'>{property}</span>
        <div className="flex items-center p-2 m-2">
        <span className='text-xl'>{icon3}</span>
        <span className='text-xl ml-2'>{icon4}</span>
        </div>
    </div>
    </div>
  )
}

export default PropertyCard