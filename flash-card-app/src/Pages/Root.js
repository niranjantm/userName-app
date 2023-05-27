import { Outlet } from "react-router-dom";
import MainNavPage from "./MainNavPage";
import {Fragment} from "react"

export default function Root(){
    return(
        <Fragment>
        <header><MainNavPage></MainNavPage></header>
        <main><Outlet></Outlet></main>
        </Fragment>
    )
}