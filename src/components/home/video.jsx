import React from 'react'

const video = () => {
  return (
    <div className='h-screen w-screen'>
      <video className='h-full w-full object-cover' autoPlay loop muted src="../../../public/video.mp4"></video>
    </div>
  )
}

export default video
