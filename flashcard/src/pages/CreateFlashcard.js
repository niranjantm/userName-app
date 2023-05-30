import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import MainNav from '../Component/MainNav'
import classes from "./CreateFlashcard.module.css"


function CreateFlashcard() {
  return (
    <Fragment>
    <div className={classes.cfc}><h1>CreateFlashcard</h1></div>

    <main>
        <MainNav></MainNav>
        <Outlet></Outlet>
    </main>
    </Fragment>


  )
}

export default CreateFlashcard