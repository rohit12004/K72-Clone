import React, { useRef, useContext } from 'react'
import { NavbarColorContext, NavbarContext } from '../../context/NavContext'
import { useNavigate } from 'react-router-dom'  

const Navbar = () => {
  const navGreenRef = useRef(null)
  const lineRef1 = useRef(null)
  const lineRef2 = useRef(null)
  const [navOpen, setnavOpen] = useContext(NavbarContext)
  const [navColor, setNavColor] = useContext(NavbarColorContext)

  const navigate = useNavigate()

  return (
    <div className="z-40 flex fixed w-full justify-between px-2 sm:px-4 md:px-6 lg:px-8 py-2">
      {/* Logo */}
      <div 
      onClick={() => navigate('/')}
      className="w-16 sm:w-20 md:w-28 lg:w-36 p-1 sm:p-2 cursor-pointer">
        <svg
          className="w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 103 44"
        >
          <path
            fill={navColor}
            fillRule="evenodd"
            d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
          ></path>
        </svg>
      </div>

      {/* Hamburger */}
      <div
        className="relative bg-black h-10 sm:h-12 w-12 sm:w-20 lg:w-24 cursor-pointer"
        onClick={() => setnavOpen(true)}
        onMouseEnter={() => {
          navGreenRef.current.style.height = '100%'
          lineRef1.current.style.background = 'black'
          lineRef2.current.style.background = 'black'
        }}
        onMouseLeave={() => {
          navGreenRef.current.style.height = '0%'
          lineRef1.current.style.background = 'white'
          lineRef2.current.style.background = 'white'
        }}
      >
        <div className="absolute z-10 h-8 sm:h-10 lg:h-12 w-full flex flex-col gap-1 items-end justify-center pr-3 sm:pr-5">
          <div
            ref={lineRef1}
            className="bg-white h-0.5 w-1/3 sm:w-1/4 rounded-full"
          ></div>
          <div
            ref={lineRef2}
            className="bg-white h-0.5 w-1/4 sm:w-1/6 rounded-full"
          ></div>
        </div>
        <div
          ref={navGreenRef}
          className="bg-[#D3FD50] transition-all w-full absolute top-0 h-0 flex flex-col justify-center items-center"
        ></div>
      </div>
    </div>
  )
}

export default Navbar
