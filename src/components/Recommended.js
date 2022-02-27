import React from 'react'
import { msg } from '../utils/message'
import { Cards } from './Cards'
export const Recommended = () => {
  const option = 'recommended'

  return (
    <>
      <div className='title'>
        {msg.title3}
      </div>
      <div className='back-cards'>
        <Cards option={option}></Cards>
      </div>
    </>
  )
}
