import React from "react";
import Lists from "./Lists";

const Songs = (props) => {
  let artistAlbum = props.albums;

  return (
    <>
      <div className="body__title">Songs</div>

      {artistAlbum.slice(1, 5).map((album) => (
        <Lists
          image={album.image}
          album={album.name}
          key={album.id}
          artist={props.Name}
        />
      ))}
    </>
  );
};

export default Songs;
