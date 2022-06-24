import {React, useState} from "react";

function ListingCard({ listing, deletedStatus, setDeletedStatus }) {

  const { id, description, image, location } = listing

  const [favoriteStatus, setFavoriteStatus ] = useState(false)

  function handleClick() {
    setFavoriteStatus(!favoriteStatus)
  }

  function handleDelete(event) {

    console.log(id)

    fetch(`http://localhost:6001/listings/${listing.id}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(() => setDeletedStatus(!deletedStatus))
      .then(() => console.log(listing, 'deleted'))


  }



  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favoriteStatus ? (
          <button className="emoji-button favorite active" onClick={handleClick}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleClick}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
