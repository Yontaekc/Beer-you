import React from "react";

let check = (obj, arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === obj.id) {
      return true;
    }
  }
  return false;
};

let SearchInfo = ({
  info,
  onOneBeerHandler,
  handleFavorite,
  favorite,
  handleDelete
}) => {
  return (
    <div id="searchInfo">
      <div>
        {info.hasOwnProperty("labels") ? (
          <img src={info.labels.medium} />
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
        {info.hasOwnProperty("breweries") ? (
          <span>
            <span className="singleInfo">Brewery: </span>
            {info.breweries[0].name}
          </span>
        ) : null}
        <br />
        <span>
          {info.style.name ? (
            <span>
              <span className="singleInfo">Style: </span>
              {info.style.name}
            </span>
          ) : null}
        </span>
        <br />
        <span>
          {info.style.category.name ? (
            <span>
              <span className="singleInfo">Category: </span>
              {info.style.category.name}
            </span>
          ) : null}
        </span>
        <br />
        <span>
          {info.abv ? (
            <span>
              <span className="singleInfo">Alcohol By Volume: </span>
              {info.abv}%
            </span>
          ) : null}
        </span>
        <br />
        {info.foodPairings ? (
          <span>
            <span className="singleInfo">Food Pairings: </span>
            {info.foodPairings}
          </span>
        ) : null}
        <br />
        <br />
        {check(info, favorite) ? (
          <button
            onClick={() => {
              handleDelete(info);
            }}
            className="addToButton"
          >
            Delete From My Favorite
          </button>
        ) : (
          <button
            onClick={() => {
              handleFavorite(info);
            }}
            className="addToButton"
          >
            Add To My Favorite
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchInfo;
