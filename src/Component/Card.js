import React from "react";

const Card = ({ image, album, key, artist }) => {
  return (
    <>
      <div className="Card mb-4">
        <img className="Card__image" src={image} />
        <h6 className="Card__title">{album}</h6>
        <span className="Card__subtext">{artist}</span>
      </div>
     
    </>
  );
};

export default Card;
