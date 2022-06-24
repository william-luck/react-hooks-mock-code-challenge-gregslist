import {React} from "react";

function Search({formValue, setValue, handleSearchSubmit}) {

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formValue)
    handleSearchSubmit();
  }


  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={formValue}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
