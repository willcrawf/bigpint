import React from 'react'

const AddFavoriteDate = (user) => {
    return (
        <form>
        <div>
            <input name="favDates" id="favDates" type="date" className="active" value='favDates'  />
            <label htmlFor="favDates">Add Fav. Date</label>
        </div>
            <button type="submit">Add</button>
        </form>
      );
}
 
export default AddFavoriteDate;