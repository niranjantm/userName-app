import { Fragment } from "react";
import classes from "./MainNav.module.css"
import MainNavHeader from "./MainNavHeader";

export default function ErrorElement(){
    return(
        <Fragment>
            <MainNavHeader></MainNavHeader>
            <main className={classes.main}>
                <h1>An Error occured</h1>
                <p>Can't find this page</p>
            </main>
            
        </Fragment>
    )
}