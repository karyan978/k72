import React from 'react'

const video = () => {
  return (
    <div className='h-screen w-screen'>
      <video className='h-full w-full object-cover' autoPlay loop muted src="https://download-video-ak.vimeocdn.com/v3-1/playback/36bc59b8-6671-4358-abc2-15555fc6ae59/69496b2d?__token__=st=1769838527~exp=1769842127~acl=%2Fv3-1%2Fplayback%2F36bc59b8-6671-4358-abc2-15555fc6ae59%2F69496b2d%2A~hmac=88981a4aca6b22941e592c8c78bdafcc7227d1419de3c755016f0957fdf83df7&r=dXMtZWFzdDE%3D"></video>
    </div>
  )
}

export default video
