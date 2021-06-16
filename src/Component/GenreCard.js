import React from 'react'
import first from "./first.png";
import second from "./second.png";
import third from "./third.png";
import fourth from "./fourth.png";
import fifth from "./fifth.png";
import sixth from "./sixth.png";
import seven from "./seven.png";
import eight from "./eight.png";
import nine from "./nine.png";
import ten from "./ten.png";
import eleven from "./eleven.png";
import twelve from "./twelve.png";



const GenreCard = ({name, color}) => {
    
    return (
        <div className="Genre-Card mb-4" style={{backgroundColor:color } } >
        <h4 className="Genre-Card__title">{name}</h4>

        <img className="Genre-Card__image"  src={third} />

      </div>
    )
}

export default GenreCard
