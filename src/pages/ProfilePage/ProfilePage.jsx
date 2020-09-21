import React, { Component } from 'react'
import * as authService from '../../service/authService'
import FavoriteDates from '../../Components/FavoriteDates/FavoriteDates'
import AddFavoriteDate from '../../Components/AddFavoriteDate/AddFavoriteDate'

function ProfilePage(props) {
        function sortPhotosByDate(datePicked) {
                return datePicked.toLocaleDateString
                console.log(`sorting photos by date ${datePicked}`)
        }
        return ( 
            <>
            <h1>{props.user.name}'s Profile</h1>
            <FavoriteDates user={props.user} sortPhotosByDate={sortPhotosByDate}/>
            <AddFavoriteDate user={props.user} />
            </>

         );
    }
 
export default ProfilePage;
