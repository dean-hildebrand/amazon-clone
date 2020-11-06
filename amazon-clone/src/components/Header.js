import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import "../css/header.css";

function Header() {
  return (
    <div className="header">
      <img className="header__logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS5eMxH-ypqXJtd3TDkzQHvIZdXTq5IrfFMMQ&usqp=CAU" />

      <div className="header__search">
        <input className="header_searchInput" type="text" />
        <SearchIcon />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
