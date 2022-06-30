import React from 'react'
import { useState } from 'react'



export default function Card1(props) {
  let likes = props.likes
  const [count, setCount] =useState(likes)

  function add(){
    setCount(preCount=>count + 1)
  }
  function sub(){
    setCount(preCount=>count - 1)
  }

  return (
  <div className='my-4 w-80 drop-shadow-md'>
    
    <div className='mx-6 md:mx-4 my-4'>
        <div className=' md:w-72 lg:w-[14rem] h-96 md:h-96 lg:h-[21rem] border-2 border-gray-700  bg-transparent rounded-2xl'>
         <div className='p-3'>
            <div className='pt-2' >
              <img className='rounded-3xl h-64 md:h-64 lg:h-52 p-3 object-cover object-center' src={`../arts/${props.art}`} alt="" />
              <div className='relative'>
              <div className='absolute cursor-pointer w-18 h-18 bg-green-700 p-[2px] -top-64 md:-top-64 lg:top-[-210px] md:-left-1  lg:left-[-3px] rounded-full'>
                <img className='w-10 h-10 hover:w-12 hover:h-12 rounded-full' src={`../img/${props.coverImg}`} alt="" />
              </div>
              </div>
            </div>
            <div className='p-1 text-white'>
              <h2 className='text-lg font-bold'>{props.name}</h2>
              <h5 className='text-sm font-bold my-1'>{props.price} ETH <span>{props.left}</span></h5>
              <div className='flex justify-between my-1'>
                <button className='text-xs font-bold text-red-500'>Place a bid</button>
                <div onClick={()=>setCount(!count)}>
                  {count?<img className='w-6 h-6' src="../icon/add.svg" alt="" />:<img className='w-6 h-6'  src="../icon/remove.svg" alt="" />}
                </div>
                
                
                
              </div>
            </div>
         </div>
        </div>
    </div>
    </div>
  )
}
