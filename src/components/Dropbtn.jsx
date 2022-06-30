import React from 'react'
import Dropbtn1 from './Dropbtn/Dropbtn1'
import Dropbtn2 from './Dropbtn/Dropbtn2'
import Dropbtn3 from './Dropbtn/Dropbtn3'

export default function dropBtn() {
  return (
    <div className='text-white flex lg:space-x-5 flex-wrap my-2 md:space-x-3 md:place-content-center lg:place-content-end lg:mx-10'>
        <Dropbtn1 />
        <Dropbtn2 />
        <Dropbtn3 />
    </div>
  )
}
