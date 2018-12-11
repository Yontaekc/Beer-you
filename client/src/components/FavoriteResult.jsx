import React from "react";
import FavoriteInfo from "./FavoriteInfo.jsx";

let FavoriteResult = ({
  searchResult,
  searchKey,
  onOneBeerHandler,
  handleFavorite
}) => {
  return (
    <div>
      <h3 id="searchResult">Your Favorite Beers</h3>
      <div id="searchInfoContainer">
        {searchResult.map((info, index) => {
          return (
            <FavoriteInfo
              info={info}
              key={index}
              onOneBeerHandler={onOneBeerHandler}
              handleFavorite={handleFavorite}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FavoriteResult;
