import {React, useState, Suspense} from 'react'
import services_1 from '../assets/images/services_1.webp'
import services_bg from '../assets/images/services_bg.webp'
import about_img from '../assets/images/about_img.webp'
import { serviceText, servicesList, facilitiesList } from '../constants/service'
import ServiceCard from '../components/ServiceCard'

const Services = () => {
  const text = serviceText;
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <>
      <div className='relative'>
      {!imageLoaded ?
          <div className='w-full h-[80vh] bg-gray-200 '/> :
          <div />
      }
      <img
        alt="Large pic"
        src={services_bg}
        className='w-full'
        style={imageLoaded ? {} : { display: `none` }}
        onLoad={() => setImageLoaded(true)}
      />
        <div className='flex flex-col justify-center items-center'>
          <div className='bg-blue-300  py-10 flex flex-col justify-center items-center justify-items-center'>
            <h1 className='text-center text-6xl text-white font-semibold font-worksans'>
            {serviceText.title.split('\n').map((line, index) => (
            <div key={index}>
              {line}
              {index !== serviceText.title.split('\n').length - 1 && <br/>}
            </div>
            ))}
            </h1>
            <h2 className='text-center text-white pt-4 w-3/4 text-2xl max-md:text-xl'>{text.subtitle}</h2>
          </div>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <ServiceCard imageSrc={services_1} services={servicesList} />
          <ServiceCard imageSrc={about_img} services={facilitiesList} />
        </Suspense>
      </div>
    </>
  )
}

export default Services