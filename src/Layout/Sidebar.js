import React from "react";
import spotifys from "../Assets/Images/spotifys.png";
import { RiHome5Line } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";
import { VscLibrary } from "react-icons/vsc";

const Sidebar = () => {
  return (
    <>
      <img className="sidebar__image" src={spotifys}></img>
      <ul>
        <li className="sidebar__list">
          <RiHome5Line color="white" className="sidebar__list-img" />
          <span className="sidebar__list-name">Home</span>
        </li>
        <li className="sidebar__list">
          <BiSearch color="white" className="sidebar__list-img" />
          <span className="sidebar__list-name">Search</span>
        </li>
        <li className="sidebar__list">
          <VscLibrary color="white" className="sidebar__list-img" />
          <span className="sidebar__list-name">Your Library</span>
        </li>
      </ul>

      {/* <ul>
        <li className="sidebar__list">
          <span>
            <RiHome5Line size="30px" color="white" />
          </span>
          <span className="sidebar__list-name">Home</span>
        </li>
        <li className="sidebar__list">
          <span>
            <RiHome5Line size="30px" color="white" />
          </span>
          <span className="sidebar__list-name">Search</span>
        </li>{" "}
        <li className="sidebar__list">
          <span>
            <RiHome5Line size="30px" color="white" />
          </span>
          <span className="sidebar__list-name">Your Library</span>
        </li>
      </ul> */}
    </>
  );
};

export default Sidebar;
