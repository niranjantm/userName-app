import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainNav.module.css"

function MainNav() {
  return (
    <Fragment>
      <header>
        <nav>
          <ul className="flex space-x-4 text-sm px-24 mx-6">
            <li className="hover:text-red-600">
              <NavLink
                to="/"
                className={({ isActive }) => {
                  return isActive ? " text-red-600 underline" : "";
                }}
                end
              >
               Create New
              </NavLink>
            </li>
            <li className="hover:text-red-600">
              <NavLink
                to="/flashcards"
                className={({ isActive }) => {
                  return isActive ? "text-red-600 underline": "";
                }}
                
              >
               My Flashcards
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </Fragment>
  );
}

export default MainNav;
