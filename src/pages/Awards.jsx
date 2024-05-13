import React, { Suspense, lazy } from 'react'
import { awards } from '../constants'
import Loader from '../components/Loader';


const AwardCard = lazy(() => import('../components/AwardCard'));
const Awards = () => {
  return (
    <section id='awards' className=' bg-white object-contain flex flex-col justify-center items-center'>
        <h1 className=' text-6xl font-semibold my-5 text-black text-center'>Honored By</h1>
        <div className='bg-white lg:w-full w-2/3 max-lg:gap-2 lg:gap-y-10 grid 2xl:grid-cols-4 max-lg:grid-cols-1 grid-cols-2 justify-center items-center min-h-[object] justify-items-center'>
        {awards.map((award) => (
          <Suspense key={award.title} fallback={<Loader/>}>
            <AwardCard key={award.title} {...award}/>
          </Suspense>
              ))}
        </div>
    </section>
  )
}

export default React.memo(Awards)