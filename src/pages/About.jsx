import React from 'react'
import { abouts } from '../constants'
import AboutCard from '../components/AboutCard'
const About = () => {
  return (
    <section id='about-us' className=' bg-blue-300 py-10'>
        <div className='bg-blue-300  w-full flex-1 flex-col flex justify-center items-center min-h-[object] '>
            <h1 className=' text-6xl font-semibold  text-white text-center'>We take pride in our work</h1>
            <div className='pt-5 pb-6 padding-x object-contain rounded-lg bg-white mt-10 w-3/4 grid max-md:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-10 justify-between items-start'>
              {abouts.map((about, index) => (
                <AboutCard key={about.heading} {...about}/>
              ))}
            </div>
          </div>
    </section>
  )
}

export default React.memo(About)
