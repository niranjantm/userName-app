import { Fragment } from "react";
import {Link} from "react-router-dom"
import classes from "./MainNav.module.css"


export default function (){
    return(
        <Fragment>
            <header className={classes.header}>
            <nav>
            <ul className={classes.list}>
                <li >
                    <Link to={"/"}>HomePage</Link>
                </li>
                <li>
                    <Link to={"/events"}>EventsPage</Link>
                </li>
                <li>
                    <Link to={"/events/new"}>Add New Event</Link>
                </li>
            </ul>
            </nav>
            </header>
           
            
            </Fragment>
    )
}