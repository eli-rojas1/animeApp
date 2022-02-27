import React, { useContext, useState } from 'react'
import Style from '../Style.css'
import { msg } from '../utils/message'
import { Link, useNavigate } from 'react-router-dom'
import {userContext} from '../context/UserContext'
import { Config } from './Menu'
export const Header = () => {
  
  const navigate = useNavigate()
  const value = useContext(userContext)
  const navegateHome = () =>{
    navigate('/')
  }
  return (
    <div className='header'>
      <div onClick={navegateHome} className='name'>{msg.title1}</div>
      <div>
        {!value.user && (
          <Link to={'/login'}><button className='categoriesButtons'>{msg.title4}</button></Link>
        )}
        <Config  className='categoriesButtons'>Config</Config>
      </div>
    </div>
  )
}
