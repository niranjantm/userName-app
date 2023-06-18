import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import MainNav from '../Components/MainNav'

function CreateFlashcard() {
  return (
    <Fragment>
    <div className='font-bold text-3xl py-5'>CreateFlashcard</div>
    <MainNav className = {"text-xl"}></MainNav>
    <div><Outlet></Outlet></div>
    </Fragment>

  )
}

export default CreateFlashcard