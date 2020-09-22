import React, { Component } from 'react'
import * as authService from '../../service/authService'
import FavoriteDates from '../../Components/FavoriteDates/FavoriteDates'
import AddFavoriteDate from '../../Components/AddFavoriteDate/AddFavoriteDate'
import LoginSpotify from '../../Components/LoginSpotify/LoginSpotify'
function ProfilePage(props) {
        function sortPhotosByDate(datePicked) {
                console.log(`sorting photos by date ${datePicked}`)
                return datePicked.toLocaleDateString()
        }
        return ( 
            <>
            <h1>{props.user.name}'s Profile</h1>
            <FavoriteDates user={props.user} sortPhotosByDate={sortPhotosByDate} />
            <AddFavoriteDate user={props.user} />
            <LoginSpotify />
            </>

         );
    }
 
export default ProfilePage;
