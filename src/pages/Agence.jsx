import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { ScrollTrigger } from 'gsap/all'

const Agence = () => {
  gsap.registerPlugin(ScrollTrigger)
  const imageDivRef = useRef(null)
  const imageRef = useRef(null)

  const imageArray = [
    "/images/team/Carl.jpg",
    "/images/team/Olivier.jpg",
    "/images/team/Lawrence.jpg",
    "/images/team/HugoJoseph.jpg",
    "/images/team/ChantalG.jpg",
    "/images/team/MyleneS.jpg",
    "/images/team/SophieA.jpg",
    "/images/team/Claire.jpg",
    "/images/team/Michele.jpg",
    "/images/team/MEL.jpg",
    "/images/team/CAMILLE.jpg",
    "/images/team/MAXIME.jpg",
    "/images/team/MEGGIE.jpg",
    "/images/team/joel.jpg",
  ]

  useGSAP(() => {
    const mm = gsap.matchMedia()

    // Desktop / Tablet animation (scroll trigger pinning)
    mm.add("(min-width: 768px)", () => {
      ScrollTrigger.create({
        trigger: imageDivRef.current,
        start: 'top 23%',
        end: 'top -120%',
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: "transform",
        scrub: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (elem) => {
          let progress = elem.progress
          let imageIndex = Math.floor(progress * (imageArray.length - 1))

          if (progress <= 0) imageIndex = 0
          if (progress >= 1) imageIndex = imageArray.length - 1

          imageRef.current.src = imageArray[imageIndex]
        }
      })
    })

    // Mobile animation (images loop automatically)
    mm.add("(max-width: 767px)", () => {
      let index = 0
      const changeImage = () => {
        imageRef.current.src = imageArray[index]
        index = (index + 1) % imageArray.length
      }

      // Start loop
      const interval = setInterval(changeImage, 1500) // change every 1.5s

      // Cleanup when unmounted / resized
      return () => clearInterval(interval)
    })
  })

  return (
    <div className='bg-white text-black'>
      <div className="section1 py-1">
        {/* Floating image container */}
        <div
          ref={imageDivRef}
          className="absolute overflow-hidden 
            h-[40vw] w-[30vw] sm:h-[20vw] sm:w-[15vw] 
            rounded-3xl top-20 left-1/3 sm:top-44 sm:left-[30vw] 
            -translate-x-1/2 sm:translate-x-0"
        >
          <img
            ref={imageRef}
            className="w-full h-full object-cover"
            src="/images/team/Carl.jpg"
            alt=""
          />
        </div>

        {/* Text Section */}
        <div className="relative font-[font2]">
          <div className=" mt-[25vh] lg:mt-[55vh]">
            <h1 className="text-[19vw] text-center uppercase leading-[17vw]">
              SEVENTY <br /> TWO
            </h1>
          </div>
          <div className="px-6 sm:pl-[40%] mt-10 sm:mt-20">
            <p className="text-lg sm:text-4xl leading-relaxed">
              We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner.
              A brand is a living thing, with values, a personality and a story.
              If we ignore that, we can achieve short-term success, but not influence that goes the distance.
              We bring that perspective to every brand story we help tell.
            </p>
          </div>
        </div>
      </div>

      <div className="section2 h-screen"></div>
    </div>
  )
}

export default Agence
