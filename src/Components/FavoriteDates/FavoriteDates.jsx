import React from 'react'
import { Menu } from 'semantic-ui-react'
import './FavoriteDates.css'

function FavoriteDates({ user, sortPhotosByDate }) {
    return (
    <>
        <h3>Favorite Dates:</h3>
        <div id="dateMenu">
        <Menu color='blue'>
            {user.favDates.map((favDate, i) => 
                <Menu.Item
                    onClick={() => sortPhotosByDate(favDate)} key={i}>
                        {favDate}
                </Menu.Item>
            )}
        </Menu>
        </div>
    </>
    )
}

export default FavoriteDates
