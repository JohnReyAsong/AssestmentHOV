import React from "react";
import Artist from "./Artist";
import Songs from "./Songs";
import Albums from "./Albums";
import { Row, Col } from "react-bootstrap";
import ListOfArtists from "./ListOfArtists";

const Body = ({ ArtistDetails }) => {
  let listOfAlbums = [];
  let ListOfSongs = null;
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
    <>
      <Row className="p-4">
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

      <Row className="p-4">
        <Col>
          <div>
            <Albums albums={listOfAlbums} Name={artistName} />
          </div>
        </Col>
      </Row>

      <Row className="p-4">
        <Col>
          <div>
            <ListOfArtists Artists={listOfArtist} />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Body;
