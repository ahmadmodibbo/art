import React from 'react'
import { useState } from 'react'

export default function Dropbtn2() {
    let lists=[
        {name:"On Auction"},
        {name:"Has Offer"}
    ]
    const [list,setList]=useState(false)
  return (
    <div className='my-2 mx-1 md:mx-0 md:my-0'>
        <div className='border-slate-600 border-2 h-12 w-36 p-2 rounded-md relative cursor-pointer'>
            <div onClick={()=>setList(!list)} className=''>
                <h2 className='text-lg font-semibold'>Buy Now</h2>
            </div>
            {list?<ul className='space-y-2 w-[8.7rem] absolute border-b-2 border-l-2 border-r-2 rounded-md border-slate-600 text-base font-bold top-[2.75rem] left-[0px] bg-[#26292D]'>{lists.map((list)=>(
                <li className='border-t-2 border-slate-600 p-2 hover:text-green-800'>{list.name}</li>
            ))}</ul>:null}
        </div>
    </div>
  )
}
