import React from 'react'
import Navbar from './Navbar'

export default function Hero() {
  return (
    <div>
        <div className='hero bg-cover object-cover bg-opacity-10 h-[35rem] md:h-[40.8rem]'>
          <div>
            <Navbar />
          </div>
          <div className='grid justify-center'>
            <div className='md:w-[42rem] md:mt-36 px-3 grid justify-center text-white'>
              <h2 className='md:text-6xl font-bold tracking-wide leading-10 text-center text-3xl md:mx-0 mx-6 mt-20 md:my-0'>Rock the world with masterpiece</h2>
              <p className='md:text-2xl md:my-8 text-center font-bold text-xl my-6'>Anim aute enim dolor in velit deserunt consequat dolor exercitation sed officia sed minim nulla aute adipisicing amet occaecat</p>
              <div className='grid justify-center md:my-0 mt-6'>
              <button className='bg-gradient-to-r from-fuchsia-800 to-purple-600 py-2 px-4 rounded-2xl text-lg font-bold text-white my-4 md:my-0'>Connect wallet</button>
              </div>
            </div>
            
          </div>
        </div>
    </div> 
  )
}
