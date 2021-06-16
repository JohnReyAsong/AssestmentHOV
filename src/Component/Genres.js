import React from 'react'
import { Row, Col } from "react-bootstrap";
import GenreCard from "./GenreCard";
import First from "./First.png";



const Genres = () => {

    const genreCardDetails = [
        {
            name: "Pop",
            color: "#27856A",
            image: "First"
        },

        {
            name: "OPM",
            color: "#8D67AB",
            

        },

        {
            name: "RNB",
            color: "#1E3264",
            

        },

        {
            name: "Rock",
            color: "#E61E32",
            

        },

        {
            name: "K-Pop",
            color: "#148A08",
            

        },

        {
            name: "Folk",
            color: "#1E3264",
            

        },


        {
            name: "Mood",
            color: "#AF2896",
            

        },

        {
            name: "Indie",
            color: "#FFC864",
            

        },

        {
            name: "Soul",
            color: "#777777",
            

        },

        {
            name: "Punk",
            color: "#E13300",
            

        },

        {
            name: "Country",
            color: "#27856A",
            
        },

        {
            name: "Romance",
            color: "#8D67AB",
            

        },

    ]




    return (
        <>
            <Row>
                <div className="body__title">Browse All</div>
                {genreCardDetails.map((genre) => (
                    <Col lg="auto">
                        <GenreCard
                            name={genre.name}
                            color={genre.color}
                            image={genre.image}
                        />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Genres
