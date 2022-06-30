import React from 'react'
import Card1 from './Cards/Card1'
import Dropbtn from './Dropbtn'
import data from './Data/data1'


export default function Explore() {
  const Cards =data.map(item=>{
    return(
      <Card1
        name={item.name}
        art={item.art}
        coverImg={item.coverImg}
        price={item.price}
        left={item.left}
        likes={item.likes}
       />
    )
  })
  return (
    <div className='mx-0 md:mx-4'>
        <div className='mx-2 grid md:grid-cols-2 pt-14 md:pt-20 pb-4'>
          <div className='text-white my-4 md:my-0'>
            <h1 className='text-3xl font-bold ml-4 md:ml-6'>Explore items</h1>
          </div>
          <div className='z-10'>
            <Dropbtn />
          </div>
        </div>
        <div className='flex md:grid overflow-x-auto md:overflow-hidden scrollbar-hide'>
          <div className='flex md:grid md:grid-flow-row lg:grid-cols-5 md:grid-cols-3 md:h-auto w-68 md:w-auto'>
          {Cards}
          </div>
        </div>
    </div>
  )
}
