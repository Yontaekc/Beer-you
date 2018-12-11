import React from "react";

let FavoriteInfo = ({ info, onOneBeerHandler, handleFavorite }) => {
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
        <br />
        <button
          onClick={() => {
            handleFavorite(info);
          }}
          className="addToButton"
        >
          Delete From My Favorite
        </button>
      </div>
    </div>
  );
};

export default FavoriteInfo;
