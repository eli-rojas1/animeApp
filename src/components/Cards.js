import React, { useContext, useEffect, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { userContext } from '../context/UserContext';

export const Cards = ({ option }) => {

    const { peticion, dataFav, dataRec, Modal} = useContext(userContext)
    const [open, setOpen] =useState(true)

    useEffect(() => {
        peticion(option)
    }, [option]
    )
    const handleCards = (index, option) => {
        Modal(index, option)
    }
    const handleData = (arr) => {
        return (
            arr.map((e, index) =>
                <SplideSlide key={index} className='cards'>
                    <img onClick={() => handleCards(index, option)} className='img' src={e.attributes.posterImage.small} />
                </SplideSlide>)
        )
    }

    return (
        <>
            <Splide options={{
                padding: '20px 0px',
                breakpoints: {
                    800: {
                        perPage: 5
                    },
                    600: {
                        perPage: 4
                    },
                    400: {
                        perPage: 3
                    }
                },
                perPage: 10,
                rewind: true,
                height: 180,
                gap: '1rem'
            }} >

                { option === 'fav' ? handleData(dataFav) : handleData(dataRec)}
            </Splide>


        </>
    )
}
