import React from 'react'
import { msg } from '../utils/message'
import ico1 from '../assets/instagram.png'
import ico2 from '../assets/facebook.png'
import ico3 from '../assets/twitter.png'
export const Footer = () => {
    return (
        <div className='footer' >
            <div className='desc'>
                {msg.title1}
                <br />
                {msg.description}
            </div>
            <div className='flex'>
                <img className='ico' src={ico1}/>
                <img className='ico' src={ico2} />
                <img className='ico' src={ico3}/>
            
            </div>


        </div>
    )
}