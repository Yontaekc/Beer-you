import React from "react";

let Search = ({ onChangeHandler, onSubmitSearch, handleSearchBrew }) => {
  return (
    <div id="searchContainer">
      <h4>Search Beers</h4>
      <form
        id="search"
        onSubmit={e => {
          onSubmitSearch(e);
        }}
      >
        <input type="text" size="30" onChange={onChangeHandler} />
        <br />
        Show Brewery
        <input
          type="checkbox"
          name="showBrewery"
          value="Y"
          onChange={handleSearchBrew}
        />
        <br />
        <input className="searchButton" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Search;
