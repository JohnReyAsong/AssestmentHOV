import React from "react";

const Artist = ({ Name, Image }) => {
  return (
    <>
      <div className="body__title">Top Results</div>
      <span className="Cards">
        <img className="Cards__image" src={Image} />
        <h4>{Name}</h4>
        <span className="Cards__subtext">ARTIST</span>
      </span>
    </>
  );
};

export default Artist;
