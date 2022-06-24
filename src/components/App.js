import {React, useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";




function App() {

  const [value, setValue] = useState('') // State for the search bar, can pass down that state to the listing container
  const [listingsToDisplay, setListingsToDisplay] = useState([])
  const [listings, setListings] = useState([])
  const [deletedStatus, setDeletedStatus] = useState(false)
  

  function handleSearchSubmit() {
    console.log("I have been submitted")
    let searchedArray = []
    for (const listing of listingsToDisplay) {
      if ((listing.description).includes(value)) {
        searchedArray.push(listing)
      }
    setListingsToDisplay(searchedArray)
  }
  }

  useEffect(() => {
    fetch('http://localhost:6001/listings')
      .then(response => response.json())
      .then(src => setListingsToDisplay(src))
  }, [deletedStatus])

  return (
    <div className="app">
      <Header formValue={value} setValue={setValue} handleSearchSubmit={handleSearchSubmit}/>
      <ListingsContainer 
      listingsToDisplay={listingsToDisplay} 
      deletedStatus={deletedStatus}
      setDeletedStatus={setDeletedStatus}/>
      
    </div>
  );
}

export default App;
