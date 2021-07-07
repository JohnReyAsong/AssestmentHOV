import React from "react";
import spotifys from "../Assets/Images/spotifys.png";
import { NavLink } from "react-router-dom";
import { SidebarData } from "./SidebarData";

const Sidebar = () => {
  return (
    <>
      <img className="sidebar__image" alt="spotify_logo" src={spotifys}></img>
      <ul>
        {SidebarData.map((item, index) => {
          return (
            <li key={index}>
              <NavLink
                exact
                to={item.path}
                className="sidebar__list"
                activeClassName="sidebar__list sidebar__list--active"
              >
                <span className="sidebar__list-img">{item.icon}</span>
                <span className="sidebar__list-name">{item.title}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Sidebar;
