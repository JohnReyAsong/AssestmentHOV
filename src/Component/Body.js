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

  if (ArtistDetails) {
    artistInfo = ArtistDetails;
    listOfAlbums = ArtistDetails.albums;
    artistName = ArtistDetails.name;
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
            <Songs />
          </div>
        </Col>
      </Row>

      <Row className="p-4">
        <Col>
          <div>
            <ListOfArtists albums={listOfAlbums} Name={artistName} />
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
    </>
  );
};

export default Body;
