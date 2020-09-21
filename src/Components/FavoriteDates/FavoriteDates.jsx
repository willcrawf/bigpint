import React from 'react'

function FavoriteDates({ user, sortPhotosByDate }) {
    return (
        <>
        <h3>Favorite Dates:</h3>
        <ol>
            <li><button onClick={sortPhotosByDate(user.faveDates[0])}>{user.faveDates[0]}</button></li>
            <li><button onClick={sortPhotosByDate(user.faveDates[0])}>{user.faveDates[1]}</button></li>
            <li><button onClick={sortPhotosByDate(user.faveDates[0])}>{user.faveDates[2]}</button></li>
            <li><button onClick={sortPhotosByDate(user.faveDates[0])}>{user.faveDates[3]}</button></li>
            <li><button onClick={sortPhotosByDate(user.faveDates[0])}>{user.faveDates[4]}</button></li>
        </ol>

        <br></br>
        </>
    )
}

export default FavoriteDates
