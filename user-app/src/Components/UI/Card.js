import classes from "./Card.module.css"
export default function Card(props){
    return(
        <div className={`${classes.card} ${props.className}`}>  {/*  Template litteral*/}
       
            {props.children}
        </div>
    )
}