import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Agence = () => {
  const imageDivRef = useRef(null)
  const imageRef = useRef(null)
  const imageArray = [
    "../../public/images/1.jpg",
    "../../public/images/2.jpg",
    "../../public/images/3.jpg",
    "../../public/images/4.jpg",
    "../../public/images/5.jpg",
    "../../public/images/6.jpg",
    "../../public/images/7.jpg",
    "../../public/images/8.jpg",
  ]

  useGSAP(function () {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        markers: true,
        start: 'top 24.5%',
        end: 'top -140%',
        scrub: true,
        pin: true,
        onUpdate: (elem) => {
          let imageIndex;

          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length)
          } else {
            imageIndex = imageArray.length - 1
          }

          imageRef.current.src = imageArray[imageIndex]
        }

      }
    })
  })

  return (
    <div>
      <div className='section1'>
        <div ref={imageDivRef} className='absolute h-[20vw] rounded-3xl w-15vw top-45 left-118 overflow-hidden'>
          <img ref={imageRef} className='h-full w-full object-cover' src="../../public/images/1.jpg" alt="" />
        </div>
        <div className="relative font-[font2]">
          <div className="mt-[55vh]">
            <div className='text-[19vw] text-center uppercase leading-[17vw]'>SEVEN7Y <br />TWO</div>
          </div>
          <div className='pl-[40%] mt-3'>
            <p className='text-6xl font-[font1]'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.</p>
          </div>
        </div>
      </div>
      <div className='section2 h-screen'>

      </div>
    </div>
  )
}

export default Agence
