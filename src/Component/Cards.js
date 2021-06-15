import React from 'react'
import Adele from './Adele.png'

const Cards = () => {
    return (
        <span className="Cards">
            <img className="Cards__image" src={Adele}/>
            <h4>Adele</h4>
            <span className="Cards__subtext">ARTIST</span>
        </span>
    )
}

export default Cards

