import React from 'react'
import Adele from './Adele.png'


const AlbumCard = () => {
    return (

        <div className="Album-Cards mb-4">
            <img className="Album-Cards__image" src={Adele}/>
            <h6>Adele</h6>
            <span className="Album-Cards__subtext">ARTIST</span>
        </div>
    )
}

export default AlbumCard
