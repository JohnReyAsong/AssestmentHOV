import React from "react";
import { useLazyQuery } from "@apollo/client";
import { SEARCH_ARTIST_QUERY } from "../GraphQL/Queries";
import Body from "./Body";
import { BiSearch } from "react-icons/bi";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useState } from "react";

const Header = () => {
  const [byName, setByName] = useState("");

  const [searchArtist, { loading, error, data }] = useLazyQuery(
    SEARCH_ARTIST_QUERY,
    {
      variables: { byName },
    }
  );

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      searchArtist();
      setByName(event.target.value);
    }
  };

  let artistDetails = null;

  if (error) return <h1>Error Found!</h1>;

  if (data) {
    console.log("hehe", data);
    artistDetails = data.queryArtists;
  }

  return (
    <>
      <div className="header">
        <span className="header__position">
          <button className="header__pager-button">
            <BsChevronLeft className="header__chevron" />
          </button>
          <button className="header__pager-button">
            <BsChevronRight className="header__chevron" />
          </button>

          <BiSearch className="header__search-icon" />
          <input
            className="header__search"
            type="search"
            placeholder="Artist, songs, or podcasts"
            onKeyDown={handleKeyDown}
          />
        </span>
        <span>
          <span className="header__text">SIGN UP</span>
          <button className="header__button">LOG IN</button>
        </span>
      </div>
      <body className="body">
        <Body ArtistDetails={artistDetails} />
      </body>
    </>
  );
};

export default Header;
