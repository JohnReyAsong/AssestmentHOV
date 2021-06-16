import React from "react";
import { Row, Col } from "react-bootstrap";
import AlbumCard from "./AlbumCard";

const ListOfArtists = (Artists) => {
  console.log("artista", Artists.Artists);

  let setOfArtists = Artists.Artists;

  return (
    <>
      <Row>
        <div className="body__title">Artists</div>
        {setOfArtists.map((Artist) => (
          <Col lg="auto">
            <AlbumCard
              image={Artist.image}
              album={Artist.name}
              key={Artist.id}
            />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default ListOfArtists;
