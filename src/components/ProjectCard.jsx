import React from 'react'


const ProjectCard = ({imgURL, title, description}) => {
  return (
    <div className='max-lg:w-full shadow-2xl border-e-4 border-b-4 border-t-2 bg-background-100 w-8/12 h-auto rounded-lg flex flex-col items-center justify-start hover:scale-105 pb-2' >
                  <img className='w-10/12 rounded-lg mt-6' src={imgURL}/>
                  <h2 className='text-black text-2xl py-2'>{title}</h2>
                  <h3 className='text-black text-base px-2 text-center'>{description}</h3>
                </div>
  )
}

export default ProjectCard