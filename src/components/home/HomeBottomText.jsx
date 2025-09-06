import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className="font-[font2] flex flex-wrap items-center justify-center gap-2 mb-6">
      <div className="hover:text-[#D3FD50]">
        <Link
          to="/projects"
          className="text-[6vw] leading-[7vw] sm:text-[5vw] sm:leading-[5vw] md:text-[5vw] md:leading-[3.5vw] border-2 border-white hover:border-[#D3FD50] rounded-full uppercase px-6 sm:px-8 py-2 transition-all"
        >
          Projects
        </Link>
      </div>
      <div className="hover:text-[#D3FD50]">
        <Link
          to="/agence"
          className="text-[6vw] leading-[7vw] sm:text-[5vw] sm:leading-[5vw] md:text-[5vw] md:leading-[3.5vw] border-2 border-white hover:border-[#D3FD50] rounded-full uppercase px-6 sm:px-8 py-2 transition-all"
        >
          Agency
        </Link>
      </div>
    </div>
  )
}

export default HomeBottomText
