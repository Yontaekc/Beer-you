import React from "react";
import SearchInfo from "./SearchInfo.jsx";

let SearchResult = ({
  searchResult,
  searchKey,
  onOneBeerHandler,
  handleFavorite,
  favorite,
  handleDelete
}) => {
  return (
    <div>
      <h3 id="searchResult">Search Results For {searchKey}</h3>
      <div id="searchInfoContainer">
        {searchResult.map((info, index) => {
          return (
            <SearchInfo
              info={info}
              key={index}
              onOneBeerHandler={onOneBeerHandler}
              handleFavorite={handleFavorite}
              favorite={favorite}
              handleDelete={handleDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SearchResult;
