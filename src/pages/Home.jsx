import React from 'react'
import Video from '../components/home/Video'
import HomeTopText from '../components/home/HomeTopText'
import HomeBottomText from '../components/home/HomeBottomText'

const Home = () => {
  return (
    <>
      <div className="relative h-screen w-screen overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0">
          <Video />
        </div>

        {/* Content */}
        <div className="relative z-10 h-screen w-screen flex flex-col justify-between px-4 sm:px-6 md:px-10">
          <HomeTopText />
          <HomeBottomText />
        </div>
      </div>
    </>
  )
}

export default Home
