import React from "react";
import { Row, Col } from "react-bootstrap";
import GenreCard from "./GenreCard";
import first from "../Assets/Images/first.png";
import second from "../Assets/Images/second.png";
import third from "../Assets/Images/third.png";
import fourth from "../Assets/Images/fourth.png";
import fifth from "../Assets/Images/fifth.png";
import sixth from "../Assets/Images/sixth.png";
import seven from "../Assets/Images/seven.png";
import eight from "../Assets/Images/eight.png";
import nine from "../Assets/Images/nine.png";
import ten from "../Assets/Images/ten.png";
import eleven from "../Assets/Images/eleven.png";
import twelve from "../Assets/Images/twelve.png";

const Genres = () => {
  const genreCardDetails = [
    {
      name: "Sad Beats",
      color: "#F77994",
      image: first,
    },

    {
      name: "Hugot",
      color: "#6097F7",
      image: second,
    },

    {
      name: "Mood Booster",
      color: "#754175",
      image: third,
    },

    {
      name: "Relax Tayo",
      color: "#237175",
      image: fourth,
    },

    {
      name: "Work From Home",
      color: "#C2C2C0",
      image: fifth,
    },

    {
      name: "Happy Hits",
      color: "#F5BA53",
      image: sixth,
    },

    {
      name: "Confidence Booster",
      color: "#F55358",
      image: seven,
    },

    {
      name: "Morning K-Pop",
      color: "#ACACF9",
      image: ten,
    },

    {
      name: "Just Smile",
      color: "#785C56",
      image: twelve,
    },

    {
      name: "Wake Up Gently",
      color: "#F98B63",
      image: eleven,
    },

    {
      name: "Sad Indie",
      color: "#F76C8A",
      image: nine,
    },

    {
      name: "Feelin Good",
      color: "#9FCAF9",
      image: eight,
    },

    {
      name: "Sad Beats",
      color: "#F77994",
      image: first,
    },

    {
      name: "Hugot",
      color: "#6097F7",
      image: second,
    },

    {
      name: "Mood Booster",
      color: "#754175",
      image: third,
    },

    {
      name: "Relax Tayo",
      color: "#237175",
      image: fourth,
    },

    {
      name: "Work From Home",
      color: "#C2C2C0",
      image: fifth,
    },

    {
      name: "Happy Hits",
      color: "#F5BA53",
      image: sixth,
    },

    {
      name: "Confidence Booster",
      color: "#F55358",
      image: seven,
    },

    {
      name: "Morning K-Pop",
      color: "#ACACF9",
      image: ten,
    },

    {
      name: "Just Smile",
      color: "#785C56",
      image: twelve,
    },

    {
      name: "Wake Up Gently",
      color: "#F98B63",
      image: eleven,
    },

    {
      name: "Sad Indie",
      color: "#F76C8A",
      image: nine,
    },

    {
      name: "Feelin Good",
      color: "#9FCAF9",
      image: eight,
    },
  ];

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
  );
};

export default Genres;
