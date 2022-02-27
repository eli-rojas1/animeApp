import React from 'react'
import { msg } from '../utils/message'
import { Cards } from './Cards'
export const Favorite = () => {
  const option = "fav"
  return (
    <>
      <div className='title'>{msg.title2}</div>
      <div className='back-cards'>
        <Cards option={option}></Cards>
      </div>
    </>
  )

}
