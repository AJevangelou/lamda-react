import React from 'react'
import bg_contact from '../assets/images/bg_contact.webp'

const Projects = () => {
  return (
    <>
        <div className='relative'>
            <div className='w-full h-[80vh] bg-gray-200 '/> 
            <div />
            <div className='gap-4 grid max-sm:grid-cols-1 max-lg:grid-cols-2 grid-cols-2 justify-items-center py-8 px-8'>
                <div className='max-lg:w-full shadow-2xl border-e-4 border-b-4 border-t-2 bg-background-100 w-8/12 h-auto rounded-lg flex flex-col items-center justify-start hover:scale-105' >
                  <img className='w-10/12 rounded-lg mt-6' src={bg_contact}/>
                  <h2 className='text-black text-2xl py-2'>O' Pari </h2>
                  <h3 className='text-black text-base px-2 text-center'>Custom aluminum construction</h3>
                </div>
                <div className='max-lg:w-full bg-foreground-100 w-8/12 h-[300px] rounded-lg flex flex-col items-center justify-start hover:scale-105' >
                  <img className='w-10/12 rounded-lg mt-6' src={bg_contact}/>
                  <h2 className='text-white text-2xl py-4'>O' Pari </h2>
                  <h3 className='text-white text-lg'>Custom aluminum construction</h3>
                </div>
                <div className='bg-foreground-100 w-8/12 h-[300px] rounded-lg flex flex-col items-center justify-start hover:scale-105' >
                  <img className='w-10/12 rounded-lg mt-6' src={bg_contact}/>
                  <h2 className='text-white text-2xl py-4'>O' Pari </h2>
                  <h3 className='text-white text-lg'>Custom aluminum construction</h3>
                </div>
            </div>
        </div>
    </>
  )
}

export default Projects