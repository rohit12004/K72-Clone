  import React from 'react'
  import ProjectsCards from '../components/projects/ProjectsCards'
  import { useGSAP } from '@gsap/react'
  import gsap from 'gsap'
  import { ScrollTrigger } from 'gsap/all'

  const Projects = () => {
    const projectImages = [
      {
        image1: "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg",
        image2: "https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg"
      },
      {
        image1: "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg",
        image2: "https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg"
      },
      {
        image1: "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg",
        image2: "https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg"
      },
      {
        image1: "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg",
        image2: "https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg"
      }
    ]

    gsap.registerPlugin(ScrollTrigger)

    useGSAP(() => {
    let mm = gsap.matchMedia()

    // For screens >= 768px (tablet/desktop)
    mm.add("(min-width: 768px)", () => {
      gsap.from('.hero', {
        height: "40px",
        stagger: { amount: 0.4 },
        scrollTrigger: {
          trigger: '.lol',
          start: 'top 100%',
          end: 'top -150%',
          scrub: true
        }
      })
    })

    // For screens < 768px (mobile)
    // mm.add("(max-width: 767px)", () => {
    //   gsap.from('.hero', {
    //     height:"50px",
    //     stagger: { amount: 0.4 },
    //     scrollTrigger: {
    //       trigger: '.lol',
    //       start: 'top 100%',
    //       end: 'top -150%',
    //       scrub: true
    //     }
    //   })
    // })
  })
    return (
      <div className="bg-white p-2 mb-[2vh] lg:mb-[2vh]">
        <div className="pt-[50vh] lg:pt-[45vh]">
          <h2 className="font-[font2] text-[11vw] uppercase text-black">work</h2>
        </div>

        <div className="-mt-4 lg:-mt-10 lol">
          {projectImages.map((elem, idx) => (
            <div
              key={idx}
              className="
                hero w-full
                h-[600px] lg:h-[400px] 
                flex flex-col sm:flex-row 
                gap-2 lg:gap-4 mb-4
              "
            >
              <ProjectsCards image1={elem.image1} image2={elem.image2} />
            </div>
          ))}
        </div>
      </div>
    )
  }

  export default Projects
