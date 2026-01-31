import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { useLocation } from 'react-router-dom'

const Stairs = () => {

  const { pathname } = useLocation()
  const stairParentRef = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline()

    // show stairs
    tl.set(stairParentRef.current, { display: 'flex' })

    // grow stairs
    tl.from('.stair', {
      height: 0,
      stagger: {
        amount: -0.4
      },
      ease: 'power2.out'
    })

    // move down
    tl.to('.stair', {
      y: '100%',
      stagger: {
        amount: -0.4
      },
      ease: 'power2.in'
    })

    // hide after animation
    tl.set(stairParentRef.current, {
      display: 'none'
    })

    // reset
    tl.set('.stair', {
      y: '0%'
    })

  }, [pathname])

  return (
    <div
      ref={stairParentRef}
      className='fixed top-0 left-0 h-screen w-full z-50 flex'
    >
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className='stair flex-1 bg-black'
        />
      ))}
    </div>
  )
}

export default Stairs
