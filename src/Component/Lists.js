import React from "react";
import { Row, Col } from "react-bootstrap";

const List = ({ image, album, key, artist }) => {
  return (
    <Row className="Lists">
      <Col lg="auto">
        <img className="Lists__image" src={image} />
      </Col>
      <Col>
        <Row>
          <h6>{album}</h6>
        </Row>
        <Row>
          <span>{artist}</span>
        </Row>
      </Col>

      <Col lg="auto" className="my-auto">
        <h6>3:58</h6>
      </Col>
    </Row>
  );
};

export default List;
