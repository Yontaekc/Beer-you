import React from "react";
import BreweryInfo from "./BreweryInfo.jsx";

let BreweryResult = ({ brewResult, breweryKey }) => {
  return (
    <div>
      <h3 id="searchResult">Search Results For {breweryKey}</h3>
      <div id="searchInfoContainer">
        {brewResult.map((info, index) => {
          return (
            <BreweryInfo
              info={info}
              key={index}
              // onOneBeerHandler={onOneBeerHandler}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BreweryResult;
