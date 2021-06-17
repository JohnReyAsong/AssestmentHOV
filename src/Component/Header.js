import React from "react";
import {
  Navbar,
  Form,
  FormControl,
  Button,
  Row,
  Col,
  Container,
} from "react-bootstrap";
import spotifys from "../Assets/Images/spotifys.png";
import { useLazyQuery } from "@apollo/client";
import { SEARCH_ARTIST_QUERY } from "../GraphQL/Queries";
import Body from "./Body";

const Header = (props) => {
  const [searchArtist, { loading, error, data }] = useLazyQuery(
    SEARCH_ARTIST_QUERY,
    {
      variables: { byName: "Billie Eilish" },
    }
  );

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      searchArtist();
    }
  };

  let artistDetails = null;

  if (error) return <h1>Error Found!</h1>;

  if (data) {
    artistDetails = data.queryArtists;
  }

  return (
    <>
      <Row className="header">
        <Col lg="auto">
          <img className="header__image" src={spotifys}></img>
        </Col>
        <Col xs lg="4" className="ml-auto">
          <FormControl
            type="text"
            placeholder="Search Artist"
            onKeyDown={handleKeyDown}
          />
        </Col>
        <Col>{/* <Button variant="outline-success" >Search</Button> */}</Col>
      </Row>

      <Body ArtistDetails={artistDetails} />
    </>
  );
};

export default Header;
