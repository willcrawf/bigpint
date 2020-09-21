import React from 'react'
import { userFromToken } from '../../service/tokenService'

function FavoriteDates({user}) {
    return (
        <>
        <h3>Favorite Dates:</h3>
        <ol>
            <li><a href="">Fav 1</a></li>
            <li><a href="">Fav 2</a></li>
            <li><a href="">Fav 3</a></li>
            <li><a href="">Fav 4</a></li>
            <li><a href="">Fav 5</a></li>
        </ol>

        <br></br>
        </>
    )
}

export default FavoriteDates