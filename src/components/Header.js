import {React} from "react";
import Search from "./Search";

function Header({ formValue, setValue, handleSearchSubmit }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search formValue={formValue} setValue={setValue} handleSearchSubmit={handleSearchSubmit}/>
    </header>
  );
}

export default Header;
