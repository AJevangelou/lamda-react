import React from 'react'
const AboutCard = ({heading, about_text}) => {
  return (
    <div className={`${heading === "Technical Excellence" ? 'md: col-span-full' : "col-span-1"} items-center justify-center`}>
        <h1 className={`h-[80px] text-4xl text-center flex items-center justify-center`}>{heading}</h1>
        <p className={` mt-5 text-justify`}> {about_text}</p>
    </div>
  )
}

export default AboutCard