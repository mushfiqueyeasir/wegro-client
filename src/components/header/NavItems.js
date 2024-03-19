import React from "react";
import {  NavLink } from "react-router-dom";

const NavItems = () => {
  return (
    <>
      <li className="active:!bg-inherit">
        <NavLink
          className="hover:!bg-inherit !bg-inherit !text-black "
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className="hover:!bg-inherit !bg-inherit !text-black "
          to="/recommended"
        >
          Recommended
        </NavLink>
      </li>
      <li>
        <NavLink
          className="hover:!bg-inherit !bg-inherit !text-black "
          to="/trending"
        >
          Trending
        </NavLink>
      </li>
    </>
  );
};

export default NavItems;
