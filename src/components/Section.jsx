import React from 'react'
import Explore from './Explore'
import Hotcollections from './Hotcollections'
import News from './News'

export default function Section() {
  return (
    <div className='bg-[#1F2123] overflow-hidden'>
        <Explore />
        <Hotcollections />
        <News />
    </div>
  )
}
