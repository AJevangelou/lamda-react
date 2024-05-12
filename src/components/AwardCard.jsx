import React, { useRef } from 'react'

const AwardCard = ({title, imgURL, subtitle}) => {
  const ref = useRef();
  return (
    <div className={`hover:scale-105 flex-1 sm:w-[350px] sm:min-w-[250px] w-full rounded-[20px] shadow-2xl px-10 py-16 `}>
                <div className={`flex flex-col justify-center items-center`}>
                    <img src={imgURL} alt='label' width={200} height={200} className='rounded-sm'/>
                    <h2 className='select-none mt-5 font-palanquin text-2xl leading-normal font-bold'>{title}</h2>
                    <p className='select-none mt-3 break-words font-monserrat text-center text-md leading-normal text-gray-500'>{subtitle}</p>
                </div>
            </div>
  )
}

export default AwardCard