import React from 'react'

const ContactCard = ({title, address, imgURL, contact_info}) => {
  return (
    <>
    
    <div className='padding-x max-md:justify-center max-md:items-center max-md:w-full flex'>
    <div className='w-full justify-evenly py-7 max-md:w-3/4 max-md:flex-col max-md:flex max-md:justify-center max-md:items-center '>
    <div className='max-md:w-3/4 place-items-stretch max-md:flex max-md:flex-col grid grid-cols-3'>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-center font-bold text-2xl max-md:my-1'>{title}</h1>
            <h2 className='text-center max-md:my-1'>{address}</h2>
        </div>
        <div className='flex flex-col items-center'>
            <img src={imgURL} alt="logo" width={96} height={96} className='bg-contain bg-foreground-100 rounded-full max-md:my-2'/>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-center max-md:my-1'>
            {contact_info}
            </h1>
        </div>
    </div>
     
  </div>
 
  </div>
  <hr className="flex-grow border-t border-blue-300"/>
  </>
  )
}

export default ContactCard