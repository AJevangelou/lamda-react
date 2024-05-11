import {React, useState, Suspense, lazy } from 'react'
import '../index.css'
import bg_1 from '../assets/images/bg_1.webp'


const About = lazy(() => import('./About'));
const Awards = lazy(() => import('./Awards'));
const Home = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
<>
  <div className='relative'>
  <div className='flex flex-col justify-center items-center'>
      {!imageLoaded ?
          <div className='w-full h-[80vh] bg-gray-200 '/> :
          <div />
      }

      <img
        alt="Large pic"
        src={bg_1}
        style={imageLoaded ? {} : { display: `none` }}
        onLoad={() => setImageLoaded(true)}
        className='w-full'
      />
    </div>
    <div className='absolute top-0 bottom-0 left-0 right-0 flex justify-center items-start'>
      <h1 className={`pt-[150px] duration-1000 font-worksans text-center hidden xl:block lg:block select-none font-semibold text-6xl text-white lg:tracking-widest`}>
        Lamda Yachts 
        <br />
        <span className='tracking-[0.55em] text-xl block mt-10 text-center'> Crafting excellence one yacht at a time</span>
      </h1>
    </div>
    <div className='absolute z-10 mb-0 left-1/2 bottom-8'>
      <a href="#about-us" className="items-end">
        <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer animate-bounce  h-12 w-12 text-white " fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </a>
    </div>
  </div>
  <Suspense fallback={<div>Loading ...</div>}>
    <About/>
    <Awards/>
  </Suspense>
  
  
</>


  
  )
}

export default Home