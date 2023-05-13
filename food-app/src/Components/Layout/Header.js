import React,{Fragment} from "react";
import foodImage from "../../Assests/foodImg.png"
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
// import BTclasses from "../UI/Button.module.css"

export default function Header(props){
    return(
        <Fragment>
            <header className= {classes.header}>
            <h1>Good Meals</h1>
           <HeaderCartButton onClick = {props.onShown}></HeaderCartButton>
            </header>
           
            <div className= {classes["main-image"]}>
                <img src = {foodImage} alt="Food picture"/>
            </div>
        </Fragment>
    )
}