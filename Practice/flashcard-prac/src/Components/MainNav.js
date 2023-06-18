import {Fragment} from "react";
import {Link} from "react-router-dom"

export default function MainNav(props){
    return(
        <Fragment>
            <nav >
           <ul className="flex space-x-6" >
               <li><Link className={props.className} to="/">CreateNew</Link></li>
               <li><Link className={props.className} to="flashcards">My FlashCards</Link></li>
               
           </ul>
           </nav>
        </Fragment>
    )
}