import React from "react";

let Dropdowns = ({ onDropdownHandler, handleChangeAbv, handleChangeBrew }) => {
  return (
    <div id="dropdownsContainer">
      <h4>Alcoholic?</h4>
      <form id="dropdowns" onSubmit={onDropdownHandler}>
        Alcohol By Volume:{" "}
        <select name="ABV" onChange={handleChangeAbv}>
          <option value="0,5">0-5%</option>
          <option value="5,10">5-10%</option>
          <option value="10,15">10-15%</option>
          <option value="+15">15+%</option>
        </select>
        <br />
        Show Brewery
        <input
          type="checkbox"
          name="showBrewery"
          value="Y"
          onChange={handleChangeBrew}
        />
        <br />
        <input className="searchButton" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Dropdowns;
