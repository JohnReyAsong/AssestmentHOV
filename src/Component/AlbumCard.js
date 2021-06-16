import React from "react";

const AlbumCard = ({ image, album, key, artist }) => {
  return (
    <div className="Album-Cards mb-4">
      <img className="Album-Cards__image" src={image} />
      <h6 className="Album-Cards__title">{album}</h6>
      <span className="Album-Cards__subtext">{artist}</span>
    </div>
  );
};

export default AlbumCard;
