import Card from "../UI/Card"
import classes from "./UsersList.module.css"
export default function UserList(props){
    return(
        <Card className = {classes.users}>
            <ul>
                {props.userItems.map((item)=>{
                    return(
                        <li key={item.id}><span><b>{item.name}</b></span> <span>is of the age    </span><span>{item.age }</span></li>
                    )
                })}
            </ul>
        </Card>
    )
}