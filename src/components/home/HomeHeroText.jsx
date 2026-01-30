import React from 'react'
import Video from '../home/video'

const HomeHeroText = () => {
  return (
    <div className='font-[font1] pt-5 text-center'>
      <div className='text-[9.5vw] justify-center flex items-center uppercase leading-[9vw]'>The spark for</div>
      <div className='text-[9.5vw] justify-center flex items-center uppercase leading-[9vw]'>all 
        <div className='h-[7vw] w-[16vw] rounded-full -mt-5 overflow-hidden'><Video/></div> 
        things</div>
      <div className='text-[9.5vw] justify-center flex items-center uppercase leading-[9vw]'>creative</div>
    </div>
  )
}

export default HomeHeroText
