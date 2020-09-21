import React, { Component } from 'react'
import * as authService from '../../service/authService'


class ProfilePage extends Component {
    state = { 
        user: authService.getUser()
     }
    render() { 
        return ( 
            <>
            <h1>{this.state.user.name}'s Profile</h1>
            {/* < FavoriteDates /> */}
            </>
         );
    }
}
 
export default ProfilePage;