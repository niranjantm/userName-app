import { Fragment } from "react";
import EventForm from "../EventForm";
import { redirect } from "react-router-dom";


export default function NewEventPage(){
    return(
        <Fragment>
        <h1>New Event Page</h1>
        <EventForm method = "POST"></EventForm>
        </Fragment>
    )
}
