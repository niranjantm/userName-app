import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import MainNav from '../Component/MainNav'
import classes from "./CreateFlashcard.module.css"


function CreateFlashcard() {
  return (
    <Fragment>
    <div className= "text-xl flex items-center mb-5 mx-10 px-20"><h1>CreateFlashcard</h1></div>
    
    <main>
        <MainNav></MainNav>
        <hr className='border border-gray-500 mx-20'></hr> 
        <Outlet></Outlet>
    </main>
    </Fragment>


  )
}

export default CreateFlashcard