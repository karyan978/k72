import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => { 
  return (
    <div className='font-[font2] text-[7vw] text-center flex justify-center gap-10 uppercase'>
        <Link className='text-[6.5vw] leading-[7vw] border-5 border-white rounded-full px-14 pt-3 uppercase'>projects</Link>
        <Link className='text-[6.5vw] leading-[7vw] border-5 border-white rounded-full px-16 pt-3 uppercase'>agence</Link>
    </div>
  )
}

export default HomeBottomText
