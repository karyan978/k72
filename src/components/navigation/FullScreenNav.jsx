import React from 'react'

const FullScreenNav = () => {
    return (
        <div id='fullscreennav' className='text-white h-screen overflow-x-hidden py-60 w-full absolute bg-black'>
            <div className='relative link border-t-1 border-white'>
                <h1 className='font-[font2] text-[5vw] text-center leading-[0.8] pt-2 uppercase'>projects</h1>
                <div className='movelink absolute top-0 bg-[#d3fd50] flex overflow-hidden'>
                    <div className='movex flex overflow-auto items-center'>
                        <h2 className='whitespace-nowrap font-[font2] text-black text-[5vw] text-center leading-[0.8]  uppercase'>Pour Tout Voir</h2>
                        <img className='rounded-full shrink-0 w-30 object-cover' src="../../../public/images/nav1.png" alt="" />
                        <h2 className='whitespace-nowrap font-[font2] text-black text-[5vw] text-center leading-[0.8]  uppercase'>Pour Tout Voir</h2>
                        <img className='rounded-full shrink-0 w-40 object-cover' src="../../../public/images/nav2.jpg" alt="" />
                    </div>
                    <div className='movex flex overflow-auto items-center'>
                        <h2 className='whitespace-nowrap text-black font-[font2] text-[5vw] text-center leading-[0.8] uppercase'>Pour Tout Voir</h2>
                        <img className='rounded-full shrink-0 w-30 object-cover' src="../../../public/images/nav1.png" alt="" />
                        <h2 className='whitespace-nowrap font-[font2] text-black text-[5vw] text-center leading-[0.8] uppercase'>Pour Tout Voir</h2>
                        <img className='rounded-full shrink-0 w-40 object-cover' src="../../../public/images/nav2.jpg" alt="" />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default FullScreenNav
