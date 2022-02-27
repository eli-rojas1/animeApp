import React, { useContext, useEffect, useState } from 'react'
import { userContext } from '../context/UserContext'
import { msg } from '../utils/message'
import { Header } from './Header'
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { PropTypes } from 'prop-types';
export const Login = () => {
  const value = useContext(userContext)
  return (
    <>
      <Header />
      <div className='login flex'>

        <div className='inputs flex'>
          <div className='title'>
            {msg.title4}
          </div>
          <div className='flex'>
            <Input className='input' placeholder="Usuario"/>
            <Input className='input' placeholder="Contraseña" />
          </div>
          <div>
            <Button onClick={value.handleUser} variant="contained">
              {msg.button3}
            </Button>
          </div>
        </div>
      </div>
    </>


  )
}

