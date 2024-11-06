import React from "react";
import Carditem from "./Carditem";
import './Cards.css';

function Cards() {
  return (
    <div className="cards">
      <h1>Check out this EPIC casts</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <Carditem
            
            src="images/img"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
