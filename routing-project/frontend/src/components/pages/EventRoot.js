import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import EventsNavigation from "../EventsNavigation";


export default function EventRoot(){
    return(
        <Fragment>
            <div>
             <EventsNavigation></EventsNavigation>
             <main><Outlet></Outlet></main>
             </div>

        </Fragment>
       
    )
}