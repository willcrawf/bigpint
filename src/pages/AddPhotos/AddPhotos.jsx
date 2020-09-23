import React, { useState, useEffect } from 'react'
import * as photoService from '../../service/photoService'
import * as authService from '../../service/authService'
import './AddPhotos.css'



export default function AddPhotos({ user, setUser }) {
    const [gPhotos, setGPhotos] = useState([])
    const [upImg, setUpImg] = useState({ url: '' })
    
    useEffect(() => {
    }, [user])

    async function setPhotosFromGoogle() {
        const response = await photoService.getGPhotos()
        const retPhotos = response[0] ? response : []
        setGPhotos(retPhotos)
    }
    // async function setUserPhotos() {
    //     const profilePhotos = await photoService.getUserPhotos()
    //     setProfilePhotos(profilePhotos)
    // }
    async function addToProfilePhotos(photo) {
        await photoService.addPhotoToUser(photo, user._id)
        const updatedUser = await authService.getUser(user._id)
        setUser(updatedUser)
    }

    async function removeFromProfilePhotos(photoId) {
        await photoService.removePhotoFromUser(photoId, user._id)
        const updatedUser = await authService.getUser(user._id)
        setUser(updatedUser)
    }

    function getPhoto(url) {
        const img = new Image()
        img.url = `${url}`
        setUpImg(img)
    }

        // id productUrl baseUrl mimeType mediaMetadata filename
    return (
        <div className="add-photos-pg">
            {user.photos && user.photos.length > 0 &&
            <> 
                <div className="user-photos">
                    {user.photos.map((photo, i) => <div className="img-wrapper" key={i} onClick={() => removeFromProfilePhotos(photo._id)}><img src={photo.baseUrl} alt="" /></div>)}
                </div>
                </>
            }
            {gPhotos.length ?
                <div className="g-photos">
                    {gPhotos.map((photo, i) => <div className="img-wrapper" key={i} onClick={() => addToProfilePhotos(photo)}><img src={photo.baseUrl} alt="" /></div>)}
                </div>
                :
                <>
                    <a href="http://localhost:3001/auth/google">Sign in to google</a>
                    <button onClick={setPhotosFromGoogle}>search gPhotos</button>
                </>
            }
        </div>
    )
}