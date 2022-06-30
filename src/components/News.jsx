import React from 'react'
import Card3 from './Cards/Card3'
import data from './Data/news'



export default function News() {
 
  const Cards =data.map(item=>{
    return(
      <Card3
        date={item.Date}
        section={item.Section}
        coverImg={item.CoverImg}
        topic={item.Topic}
        article={item.Article}
      />
    )
  })
  return (
    <div>
        <div className='mx-4'>
            <h3 className='text-3xl font-bold text-white'>Latest News</h3>
        </div>
        <div className='mx-5 overflow-x-auto scrollbar-hide md:mx-10 lg:mx-8 py-12 flex space-x-6'>
          <div className='flex space-x-6 md:grid md:grid-cols-2 lg:grid-cols-3'>
            {Cards}
          </div>
        </div>     
    </div>
  )
}
