import React from 'react'
import{ Menu } from 'semantic-ui-react'

function FavoriteDates({ user, sortPhotosByDate }) {
    return (
    <>
        <h3>Favorite Dates:</h3>
        <Menu>
            {user.favDates.map(favDate => 
                <Menu.Item
                    onClick={() => sortPhotosByDate(favDate)}>{favDate}
                 </Menu.Item>
            )}
        </Menu>
    </>
    )
}

export default FavoriteDates
