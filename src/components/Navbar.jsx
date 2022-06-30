import React from 'react'
import { useState } from 'react'
import logo from '../img/logo.png'
import menu from '../icon/menu.svg'
import close from '../icon/close-circle.svg'

export default function () {
    const links=[
        {name:"Home", link:"/"},
        {name:"Explore", link:"/"},
        {name:"Stats", link:"/"},
        {name:"About", link:"/"},
    ]

    const [open, setOpen] = useState(false)
    
  return (
    <>
        <div className='bg-slate-800 nav p-2 md:p-4 grid md:grid-cols-2'>
            <div className='my-1 px-2'>
                <div className='md:flex md:space-x-6'>
                    <img src={logo} />
                    <input className='w-60 h-10 rounded-xl hidden md:grid bg-transparent p-2 border-2 border-slate-600' type="text" placeholder='Search item here'/>
                </div>
            </div>
            <div className='md:flex md:space-x-8 md:place-content-end my-1 md:mx-10'>
                <div className='absolute px-1 left-[18rem] top-[1px] md:hidden' onClick={()=>setOpen(!open)}>
                     {open?<img className='w-16 h-16' src={close} alt="" />:<img className='w-16 h-16' src={menu} />}
                     
                </div>
                <ul className={`absolute md:bg-transparent bg-slate-800  md:w-auto w-full md:static md:flex md:space-x-8 md:pl-0 pl-6 py-4 md:py-0 ${open?'top-[4rem] left-[-1px]':'top-[-450px]'}`}>
                    {links.map((link)=>(    
                        <li className='text-lg font-bold text-white pl-2 md:pl-0 py-2 hover:text-green-600'><a href={link.link}>{link.name}</a></li>
                        ))}
                    <button className='bg-gradient-to-r from-fuchsia-800 to-purple-600 py-2 px-4 rounded-2xl text-lg font-bold text-white my-4 md:my-0'>Connect wallet</button>
                </ul>
            </div>
        </div>
    </>
  )
}
