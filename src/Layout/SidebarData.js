import React from "react";
import { RiHome5Line } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";
import { VscLibrary } from "react-icons/vsc";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <RiHome5Line />,
    active: false,
  },

  {
    title: "Search",
    path: "/search",
    icon: <BiSearch />,
    active: false,
  },
  {
    title: "Your Libary",
    path: "/library",
    icon: <VscLibrary />,
    active: false,
  },
];
