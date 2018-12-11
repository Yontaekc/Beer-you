import React from "react";

let BreweryInfo = ({ info }) => {
  return (
    <div id="breweryInfo">
      <div>
        {info.hasOwnProperty("images") ? (
          <img src={info.images.squareMedium} />
        ) : (
          <img
            src="https://s3.us-east-2.amazonaws.com/yonbundle/noImgBeer.jpg"
            height="256"
            width="256"
          />
        )}
        <br />
        {info.hasOwnProperty("name") ? (
          <span>
            <span
              className="infoName"
              onClick={() => {
                onOneBeerHandler(info);
              }}
            >
              {info.name}
            </span>
          </span>
        ) : null}
        <br />
        {info.hasOwnProperty("website") ? (
          <span>
            <span className="singleInfo">website: </span>
            {info.website}
          </span>
        ) : null}
        <br />
        {info.hasOwnProperty("description") ? (
          <span>
            <span className="singleInfo">About: </span>
            {info.description.split(".")[0] + "."}
          </span>
        ) : null}
        <br />
        {info.hasOwnProperty("locations") ? (
          <span>
            <span className="singleInfo">location: </span>
            {info.locations[0].streetAddress +
              " | " +
              info.locations[0].locality +
              ", " +
              info.locations[0].region}
          </span>
        ) : null}
      </div>
    </div>
  );
};

export default BreweryInfo;
