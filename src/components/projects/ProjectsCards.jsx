import React from 'react'

const ProjectsCards = ({ image1, image2 }) => {
  return (
    <>
      {/* First image card */}
      <div
        className="
        relative group 
        w-full sm:w-1/2 
        h-[300px] sm:h-[250px] md:h-[350px] lg:h-full
        transition-all hover:rounded-4xl overflow-hidden
      "
      >
        <img className="w-full h-full object-cover" src={image1} alt="" />
        <div className="h-full opacity-0 group-hover:opacity-100 transition-all w-full top-0 left-0 absolute bg-black/20 flex items-center justify-center">
          <h2 className="uppercase 
            text-base sm:text-2xl md:text-3xl lg:text-5xl 
            font-[font1] border-2 rounded-full 
            pt-1 sm:pt-2 px-4 sm:px-8 md:px-10"
          >
            view project
          </h2>
        </div>
      </div>

      {/* Second image card */}
      <div
        className="
        relative group 
        w-full sm:w-1/2 
        h-[300px] sm:h-[250px] md:h-[350px] lg:h-full
        transition-all hover:rounded-4xl overflow-hidden
      "
      >
        <img className="w-full h-full object-cover" src={image2} alt="" />
        <div className="h-full opacity-0 group-hover:opacity-100 transition-all w-full top-0 left-0 absolute bg-black/20 flex items-center justify-center">
          <h2 className="uppercase 
            text-base sm:text-2xl md:text-3xl lg:text-5xl 
            font-[font1] border-2 rounded-full 
            pt-1 sm:pt-2 px-4 sm:px-8 md:px-10"
          >
            view project
          </h2>
        </div>
      </div>
    </>
  )
}

export default ProjectsCards
