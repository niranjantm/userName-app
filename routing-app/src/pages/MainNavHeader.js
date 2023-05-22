import { Link, NavLink } from "react-router-dom";
import classes from "./MainNav.module.css";

export default function MainNavHeader() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <h4>
              <NavLink
                to={"/"}
                className={({isActive}) => {return( isActive?classes.active:'')
                 
                }} end
              >
                Link to Home
              </NavLink>
            </h4>
          </li>
          <li>
            <h4>
              <NavLink to={"/products"}  className={({isActive}) => {return( isActive?classes.active:'')
                 
                }}> Link to Products Page</NavLink>
            </h4>
          </li>
        </ul>
      </nav>
    </header>
  );
}
