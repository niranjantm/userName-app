import { Fragment } from "react";
import {Outlet} from "react-router-dom";
import MainNavHeader from "./MainNavHeader";
import classes from "./MainNav.module.css"
function RootLayout(){
    return(
        <Fragment>
              <MainNavHeader></MainNavHeader>
              <main className={classes.main}><Outlet></Outlet></main>
        
        </Fragment>
      
    )
}
export default RootLayout