import React from 'react'
import { useState } from 'react'

export default function Dropbtn1() {
    let lists=[
        {name:"Art"},
        {name:"Music"},
        {name:"Domain Names"},
        {name:"Virtual World"},
        {name:"Trading Cards"},
        {name:"Collectibles"},
        {name:"Sports"},
        {name:"Utility"}
    ]
    const [list, setList] = useState(false);
   

  return (
    <div className='mx-1 md:mx-0 md:my-0 my-2 md:z-0 z-50'>
        <div className='border-slate-600 border-2 h-12 w-36 p-2 rounded-md relative cursor-pointer' >
            <div onClick={()=>setList(!list)}>
                <h3 className='text-lg font-bold'>All Categories</h3>
            </div>
                {list?<ul className='space-y-2 w-[8.7rem] absolute border-b-2 border-l-2 border-r-2 rounded-md text-base font-bold border-slate-600 top-[2.75rem] left-[0px] bg-[#26292D]'>
                    {lists.map((list)=>(
                        <li className='border-t-2 border-slate-600 p-2 hover:text-green-800'>{list.name}</li>
                    ))}
                </ul>:null}
        </div>
    </div>
  )
}
