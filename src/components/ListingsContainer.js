import { React, useState} from "react";
import { useEffect } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listingsToDisplay, deletedStatus, setDeletedStatus }) {

  
 


  

  return (
    <main>
      <ul className="cards">
        {listingsToDisplay.map(listing => {
            return <ListingCard 
            key={listing.id} 
            listing={listing} 
            deletedStatus={deletedStatus}
            setDeletedStatus={setDeletedStatus}/>
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
