import { Fragment } from "react";
import EventForm from "../EventForm";
import { redirect, useRouteLoaderData } from "react-router-dom";


export default function EditEventPage(){

    const data = useRouteLoaderData("edit-event");

    return(
        <Fragment>
            <h1>Edit your Events</h1>
        <EventForm  method = "PATCH" event={data.event}></EventForm>
        </Fragment>
        
    )
}
