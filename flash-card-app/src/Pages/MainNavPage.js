import {Link} from "react-router-dom"

export default function MainNavPage(){
    return(
       <header>
        <h2>Create FlashCard </h2>
        <Link to ={"/new"}>Create new </Link>
        <Link to={"/myFlashCards"}>My FlashCard</Link>
       </header>
    )
}