import React from 'react'
import Card2 from './Cards/Card2'
import data from './Data/data2'

export default function Hotcollections() {
  const Cards =data.map(item=>{
    return(
      <Card2
        art={item.art}
        coverImg={item.coverImg}
        name={item.name} 
        erc ={item.ERC}
        verified={item.Verified}
        
      />
    )
  })
  return (
    <div className='py-6 mx-2'>
        <div className='mx-4 my-4'>
            <h2 className='text-2xl font-bold text-white'>Hot Collections</h2>
            <div className='flex space-x-5 overflow-x-auto scrollbar-hide'>
              {Cards}
            </div>
        </div>
    </div>
  )
}
