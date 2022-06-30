import React from 'react'
import { useState } from 'react'

export default function Card3(props) {
 const [read, setRead]=useState(false) 
  return (
    <div className='bg-transparent w-72 bg-[#26292D] rounded-xl md:w-96 p-1 my-4 md:mx-6 lg:mx-8'>
        <div className='p-2 relative'>
          <img className='h-64 w-[30rem] object-cover rounded-2xl'  src={`../arts/${props.coverImg}`} alt="" />
          <div className='absolute top-[-0.1px] my-4 mx-4 bg-green-700 rounded-xl'>
            <h2 className='text-sm m-2 font-bold text-white tracking-wider'>{props.section}</h2>
          </div>
        </div>
        <div className='text-white py-2 px-4'>
          <div>
            <h4 className='text-sm font-bold tracking-widest uppercase text-gray-500'>{props.date}</h4>
            <h2 className='text-lg md:text-2xl font-bold my-2'>{props.topic}</h2>
            <div className={`my-2 h-24 md:h-32 ${read?'overflow-y-auto':'overflow-hidden'}`}>
              <p className='text-sm md:text-lg text-gray-500 my-1'>{props.article}</p>
            </div>
          </div>
          <div className='mb-4'>
            <button className='bg-gradient-to-r from-fuchsia-800 to-purple-600 py-1 px-3 rounded-2xl text-base font-bold text-white mt-3 md:mt-5 md:my-0' onClick={()=>setRead(!read)}>{read?'Close read':'Read More'}</button>
          </div>
        </div>
    </div>
  )
}
