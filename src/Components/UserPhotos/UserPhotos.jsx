import React, { useState } from 'react'
import * as photoService from '../../service/photoService'

export default function UserPhotos({ user }) {
    const [photos, setPhotos] = useState([])
    async function searchGPhotos() {
        const photos = await photoService.getGPhotos()
        setPhotos(photos)
    }
    return (
        <>
        {user ?
        <>
            <a href="http://localhost:3001/auth/google">Sign in to google</a>
            <button onClick={searchGPhotos}>search gPhotos</button>
            <>
            {photos.length ? 
            <>
                {photos.map(photo => <img src={photo.baseUrl} alt=""/>)}
            </>
                :
                <h3>no photos</h3> 
            }
            </>
            </>
            :
            <h3>please sign up or login</h3>
        }
        </>
    )
}