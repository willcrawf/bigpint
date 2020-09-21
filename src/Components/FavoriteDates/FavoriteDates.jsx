import React from 'react'
import{ Menu } from 'semantic-ui-react'
import './FavoriteDates.css'
var dateFormat = require('dateformat');

function FavoriteDates({ user, sortPhotosByDate }) {
    return (
    <>
        <h3>Favorite Dates:</h3>
        <div id = "dateMenu">
        <Menu color = 'blue'>
            {user.favDates.map(favDate => 
                <Menu.Item
                    onClick={() => sortPhotosByDate(favDate)}>{dateFormat(favDate, "fullDate")}
                 </Menu.Item>
            )}
        </Menu>
        </div>
    </>
    )
}

export default FavoriteDates
