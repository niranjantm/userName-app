import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import MainNavPage from "./MainNavPage";


export default function RoutingPage(){
    return(
        <Fragment> 
           <MainNavPage></MainNavPage>
            <main><Outlet></Outlet></main>
        </Fragment>
      
    )
}