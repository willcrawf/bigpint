import React, { Component } from 'react'
import * as authService from '../../service/authService'
import FavoriteDates from '../../Components/FavoriteDates/FavoriteDates'

function ProfilePage(props) {
        return ( 
            <>
            <h1>{props.user.name}'s Profile</h1>
            <FavoriteDates user={props.user} />
            </>
         );
    }
 
export default ProfilePage;
