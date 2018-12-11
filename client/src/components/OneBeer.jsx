import React from "react";

let OneBeer = ({ oneBeer }) => {
  return (
    <div id="oneBeerContainer">
      <div>
        {oneBeer.labels ? (
          <img src={oneBeer.labels.large} />
        ) : (
          <img
            src="https://s3.us-east-2.amazonaws.com/yonbundle/noImgBeer.jpg"
            height="512"
            width="512"
          />
        )}
        <br />
        <span
          className="oneBeerName"
          onClick={() => {
            onOneBeerHandler(oneBeer);
          }}
        >
          {oneBeer.name}
        </span>
        <br />
        <span>
          {oneBeer.style.name ? (
            <span>
              <span className="singleoneBeer">Style: </span>
              {oneBeer.style.name}
            </span>
          ) : null}
        </span>
        <br />
        <span>
          {oneBeer.style.category.name ? (
            <span>
              <span className="singleoneBeer">Category: </span>
              {oneBeer.style.category.name}
            </span>
          ) : null}
        </span>
        <br />
        <span>
          {oneBeer.abv ? (
            <span>
              <span className="singleoneBeer">Alcohol By Volume: </span>
              {oneBeer.abv}%
            </span>
          ) : null}
        </span>

        {oneBeer.foodPairings ? (
          <span>
            <br />
            <span className="singleoneBeer">Food Pairings: </span>
            {oneBeer.foodPairings}
          </span>
        ) : null}
        <br />
        {oneBeer.description ? (
          <span>
            <span className="singleoneBeer">About this beer: </span>
            {oneBeer.description}
          </span>
        ) : null}
        <br />
        {/* <button className="addToButton">Add To My Favorite</button> */}
      </div>
    </div>
  );
};

export default OneBeer;
