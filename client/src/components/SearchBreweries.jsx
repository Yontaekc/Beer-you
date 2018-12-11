import React from "react";

let SearchBreweries = ({
  onChangeBrewery,
  handleChangeLocation,
  onSubmitBrewery
}) => {
  return (
    <div id="searchContainer">
      <h4>Search Breweries</h4>
      <form
        id="search"
        onSubmit={e => {
          onSubmitBrewery(e);
        }}
      >
        <input type="text" size="30" onChange={onChangeBrewery} />
        <br />
        Show Location
        <input
          type="checkbox"
          name="showLoc"
          value="Y"
          onChange={handleChangeLocation}
        />
        <br />
        <input className="searchButton" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SearchBreweries;
