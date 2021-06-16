import React from "react";
import AlbumCard from "./AlbumCard";
import { Row, Col } from "react-bootstrap";

const Albums = (props) => {
  let artistAlbum = props.albums;

  return (
    <>
      <Row>
        <div className="body__title">Albums</div>
        {artistAlbum.map((album) => (
          <Col lg="auto">
            <AlbumCard
              image={album.image}
              album={album.name}
              key={album.id}
              artist={props.Name}
            />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Albums;
