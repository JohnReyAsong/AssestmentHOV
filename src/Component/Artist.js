import React from "react";

const Artist = ({ Name, Image }) => {
  return (
    <div style={!Name ? {display:"none"} : {}}>
      <div className="body__title">Top Results</div>
      <span className="Main-Artist-Card">
        <img className="Main-Artist-Card__image" src={Image} />
        <h4>{Name}</h4>
        <span className="Main-Artist-Card__subtext">ARTIST</span>
      </span>
    </div>
  );
};

export default Artist;
