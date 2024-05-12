import React from 'react';

const ServiceCard = ({ imageSrc, services}) => {
    return (
<div className='py-10 max-md:py-5 flex justify-center '>
  <div className='w-4/6 grid grid-cols-2 max-md:grid-cols-1 justify-evenly justify-items-center'>
    <img src={imageSrc} alt="services" className='md:max-h-80 md:max-w-96 md:-w-1/2 px-5 w-full h-full ' />
    <ul className="list-disc w-3/4 max-md:py-5">
      {services.map((service) => (
        <li key={service.key} className='text-lg'>{service.description}</li>
      ))}
    </ul>
  </div>
</div>

    );
  }
  
export default ServiceCard;
