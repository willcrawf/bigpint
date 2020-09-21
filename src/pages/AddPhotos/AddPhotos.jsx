import React, { useState } from 'react'
import * as photoService from '../../service/photoService'


export default function AddPhotos({ user }) {
    const [photos, setPhotos] = useState(photoService.getGPhotos())
    const [profilePhotos, setProfilePhotos] = useState(photoService.getUserPhotos())

    async function searchGPhotos() {
        const photos = await photoService.getGPhotos()
        setPhotos(photos)
    }
    async function getUserPhotos() {
        const profilePhotos = await photoService.getUserPhotos()
        setProfilePhotos(profilePhotos)
    }
    async function addToProfilePhotos(photo) {
        const profilePhotos = await photoService.addPhotoToUser()


        // id productUrl baseUrl mimeType mediaMetadata filename
    }
    return (
        <>
            {user && profilePhotos.length &&
                <>
                    <a href="http://localhost:3001/auth/google">Sign in to google</a>
                    <button onClick={searchGPhotos}>search gPhotos</button>
                </>
            }
            {!photos.length ?
                <>
                    <a href="http://localhost:3001/auth/google">Sign in to google</a>
                    <button onClick={searchGPhotos}>search gPhotos</button>
                </>
                :
                <>
                    {photos.map((photo, i) => <button key={i} onClick={() => addToProfilePhotos(photo)}><img src={photo.baseUrl} alt="" /></button>)}
                </>
            }
        </>
    )
}