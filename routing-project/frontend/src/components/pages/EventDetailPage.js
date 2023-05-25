import { Fragment } from 'react'
import {redirect, useParams} from 'react-router-dom'
import EventItem from '../EventItem'
import {useRouteLoaderData,json} from "react-router-dom"

export default function EventDetailPage(){
    const data = useRouteLoaderData("edit-event");
    const event = data.event;
    
    return(
        <Fragment>
             <h1>EventDetailPage</h1>
             {/* <h2>{param.id}</h2> */}
             <EventItem event={event}></EventItem>

        </Fragment>
       
    )
}

export async function loader({request,params}){
   const id = params.id;

   const response = await fetch("http://localhost:8080/events/" +id);

   if(!response.ok){
    throw json({message:"Could not find the event"},{status:500});
   }
   else{
    return response
   }

}
export async function action({request,params}){
    const id = params.id;
    const response = await fetch("http://localhost:8080/events/"+id,{
        method:request.method,

    });

    return redirect("/events")

}