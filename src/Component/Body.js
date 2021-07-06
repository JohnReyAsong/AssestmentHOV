import React from "react";
import Artist from "./Artist";
import Songs from "./Songs";
import Albums from "./Albums";
import { Row, Col } from "react-bootstrap";
import ListOfArtists from "./ListOfArtists";
import Genres from "./Genres";

const Body = ({ ArtistDetails }) => {
  let listOfAlbums = [];
  let artistInfo = {
    name: null,
    image: null,
  };
  let artistName = null;
  let listOfArtist = [];

  if (ArtistDetails) {
    listOfArtist = ArtistDetails;
    artistInfo = ArtistDetails[0];
    listOfAlbums = ArtistDetails[0].albums;
    artistName = ArtistDetails[0].name;
  }

  return (
    <main>
      <Row style={artistName ? { display: "none" } : {}}>
        <Col>
          <div>
            <Genres />
          </div>
        </Col>
      </Row>

      <Row>
        <Col lg="auto">
          <div>
            <Artist Name={artistInfo.name} Image={artistInfo.image} />
          </div>
        </Col>

        <Col>
          <div>
            <Songs albums={listOfAlbums} Name={artistName} />
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          <div>
            <ListOfArtists Artists={listOfArtist} />
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          <div>
            <Albums albums={listOfAlbums} Name={artistName} />
          </div>
        </Col>
      </Row>
    </main>
  );
};

export default Body;
