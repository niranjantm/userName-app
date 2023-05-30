import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainNav.module.css"

function MainNav() {
  return (
    <Fragment>
      <header>
        <nav>
          <ul className={classes.list}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => {
                  return isActive ? classes.active : "";
                }}
                end
              >
               Create New
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/flashcards"
                className={({ isActive }) => {
                  return isActive ? classes.active: "";
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
