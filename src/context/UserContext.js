import React, { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../utils/api'
import Swal from 'sweetalert2';
export const userContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [dataFav, setDataFav] = useState([])
    const [dataRec, setDataRec] = useState([])
    const [user, setUser] = useState(false)
    const navigate = useNavigate()
    const logOut = () => {
        setUser(false)
    }
    const handleUser = () => {
        setUser(true)
        navigate('/')
    }
    const peticion = (option) => {
        if (option === 'fav') {
            fetch(BASE_URL + 'anime?filter[categories]=adventure&page[limit]=20&page[offset]=0')
                .then(response => response.json())
                .then(({ data }) => setDataFav(data))
        } else {
            fetch(BASE_URL + 'anime?filter[categories]=elementary-school&page[limit]=20&page[offset]=0')
                .then(response => response.json())
                .then(({ data }) => setDataRec(data))
        }
    }

    const Modal = (index, option) => {
        const data = option === 'fav' ? dataFav[index] : dataRec[index]
        Swal.fire({
            customClass: 'Swal',
            width: 900,
            title: data.attributes.canonicalTitle, 
            imageUrl: data.attributes.posterImage.small,
            imageHeight: 200,
            text: data.attributes.description == null ||  data.attributes.description.length === 0 ?  "No description" : data.attributes.description
        })
    }
    const value = {
        user,
        handleUser,
        logOut,
        dataFav,
        dataRec,
        peticion,
        Modal
    }


    return <userContext.Provider value={value}>{children}</userContext.Provider>
}

