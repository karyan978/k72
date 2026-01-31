import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => { 
  return (
    <div className='font-[font2] text-[7vw] text-center flex justify-center mb-5 gap-10 uppercase'>
        <Link className='text-[6.5vw] hover:border-[#d3fd50] hover:text-[#d3fd50]  leading-[6vw] border-5 border-white rounded-full px-12 pt-3 uppercase'to='/projects'>work</Link>
        <Link className='text-[6.5vw] hover:border-[#d3fd50] hover:text-[#d3fd50] leading-[6vw] border-5 border-white rounded-full px-14 pt-3 uppercase' to='/agence'>agence</Link>
    </div>
  )
}

export default HomeBottomText
