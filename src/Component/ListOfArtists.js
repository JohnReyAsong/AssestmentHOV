import React from "react";
import { Row, Col } from "react-bootstrap";
import Card from "./Card";

const ListOfArtists = (Artists) => {

  let setOfArtists = Artists.Artists;

  return (
    <>
      <Row>
        <div className="body__title" style={setOfArtists.length == 0 ? {display:"none"} : {}} >Artists</div>
        {setOfArtists.map((Artist) => (
          <Col lg="auto">
            <Card
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
