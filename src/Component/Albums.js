import React from "react";
import Card from "./Card";
import { Row, Col } from "react-bootstrap";

const Albums = (props) => {
  let artistAlbum = props.albums;

  return (
    <>
      <Row>
        <div className="body__title" style={artistAlbum.length == 0 ? {display:"none"} : {}}>Albums</div>
        {artistAlbum.map((album) => (
          <Col lg="auto">
            <Card
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
