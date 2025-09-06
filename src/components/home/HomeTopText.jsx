import React from "react";
import Video from "./Video";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HomeTopText = () => {
    useGSAP(() => {
    gsap.from(".line-inner", {
      y: -100,
      rotateX:90,
      opacity: 0,
      transformOrigin: "top center", // pivot point
      duration: 1.2,
      delay: 1,
      ease: "power4.out",
      stagger: {
        amount: 0.4,
      },
    });
  }, []);

  return (
    <div className="toptext font-[font2] text-center mt-20 md:mt-3">
      {/* Row 1 */}
      <div className="line overflow-hidden">
        <div className="line-inner flex items-center justify-center uppercase text-[10vw] leading-[12vw] sm:text-[6vw] sm:leading-[6vw] md:text-[8vw] md:leading-[8vw]">
          The spark for
        </div>
      </div>

      {/* Row 2 */}
      <div className="line overflow-hidden">
        <div className="line-inner flex items-center justify-center uppercase text-[10vw] leading-[12vw] sm:text-[6vw] sm:leading-[6vw] md:text-[8vw] md:leading-[8vw]">
          all
          <div className="overflow-hidden rounded-full h-[10vw] w-[20vw] sm:h-[8vw] sm:w-[15vw] md:h-[6vw] md:w-[12vw] mx-2">
            <Video />
          </div>
          things
        </div>
      </div>

      {/* Row 3 */}
      <div className="line overflow-hidden">
        <div className="line-inner flex items-center justify-center uppercase text-[10vw] leading-[12vw] sm:text-[6vw] sm:leading-[6vw] md:text-[8vw] md:leading-[8vw]">
          creative
        </div>
      </div>
    </div>
  );
};

export default HomeTopText;
