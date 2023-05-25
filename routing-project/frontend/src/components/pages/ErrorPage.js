import PageContent from "../PageContent";
import {useRouteError} from "react-router-dom"



export default function ErrorPage(){

    const error = useRouteError()
    let title = "An error occured";
    let message = "Something went wrong"

    if(error.status===500){
        message = (error.data).message
    }
    if(error.status===404){
        title="Not Found"
        message="Could not find the page"
    }

    return(
        <PageContent title={`${title} error code: ${error.status}`}> <p>{message}</p></PageContent>
       
    )
}