import { Fragment } from "react"
import {Link,useLoaderData,json} from "react-router-dom"
import EventsList from "../EventsList";


export default function EventsPage(){
    // const [isLoading, setIsLoading] = useState(false);
    // const [fetchedEvents, setFetchedEvents] = useState();
    // const [error, setError] = useState();
  
    // useEffect(() => {
    //   async function fetchEvents() {
    //     setIsLoading(true);
    //     const response = await fetch('http://localhost:8080/events');
  
    //     if (!response.ok) {
    //       setError('Fetching events failed.');
    //     } else {
    //       const resData = await response.json();
    //       setFetchedEvents(resData.events);
    //     }
    //     setIsLoading(false);
    //   }
  
    //   fetchEvents();
    // }, []);
    const data = useLoaderData()
    // if(data.isError){
    //     return(
    //         <h1>{data.message}</h1>
    //     )
    // }
    const events = data.events

    
    return (
    //   <>
    //     <div style={{ textAlign: 'center' }}>
    //       {isLoading && <p>Loading...</p>}
    //       {error && <p>{error}</p>}
    //     </div>
    <Fragment>
     {<EventsList events={events} />}
    </Fragment>
       
    //   </>
    );
}
export async function loader (){
    const response = await fetch("http://localhost:8080/events")
    if (!response.ok) {
        // return({isError:true,message:"Some thing went Wrong"})
        // throw new Response(JSON.stringify({message:"Some thing went wrong"}),{status:500})
        throw json({message:"Some thing went wrong"},{status:500})
    }
    // } else {
    //   const resData = await response.json();
      return(response)
    }

