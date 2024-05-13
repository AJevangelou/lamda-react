import React, {Suspense, lazy, useState} from 'react'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../constants/projects'
import bg_1 from '../assets/images/bg_1.webp'
import Loader from '../components/Loader'

const Projects = () => {
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
            <div className='gap-4 grid max-sm:grid-cols-1 max-lg:grid-cols-2 grid-cols-2 justify-items-center py-8 px-8'>
              <Suspense fallback={<Loader/>}>
              {projects.map((project) => (
                  <ProjectCard key={project.title} imgURL={project.imgURL} title={project.title} description={project.description}/>
                ))}
              </Suspense>
            </div>
        </div>
    </>
  )
}

export default Projects