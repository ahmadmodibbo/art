import React from 'react'

export default function Card2(props) {
  return (
    <div className='w-64 h-72 p-2 rounded-xl my-12 bg-[#26292D] drop-shadow-md border-2 border-gray-700'>
        <div className='w-60 p-2'>
            <div>
                <img className='rounded-t-xl h-[9rem] object-fit w-60' src={`../arts/${props.art}`} alt="" />
                <div className='relative'>
                    <div className='absolute w-16 h-16 rounded-full border-4 border-red-900 -top-7 left-20'>
                        <img className='w-14 h-14 rounded-full' src={`../img/${props.coverImg}`} alt="" />
                    </div>
                    {props.verified===1 && <img className='absolute w-6 h-6 left-[7.5rem] top-[14px]' src="../icon/verified.png" alt="" />}
                </div>
            </div> 
            <div className='grid justify-center text-white text-center mt-10'>
                <h2 className='text-2xl font-bold my-1'>{props.name}</h2>
                <h3 className='text-base font-bold my-1'>{props.erc}</h3>
            </div>
        </div>
    </div>
  )
}
