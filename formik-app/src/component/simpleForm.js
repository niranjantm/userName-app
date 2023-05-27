import React from 'react'
import {useFormik} from "formik"

function simpleForm() {
    const formik = useFormik({
        initialValues:{
          deckName:"",
          deckDescription:"",
          email:""
        }
      })
      return (
        <div>
          <form>
         
                <label htmlFor="deckName" >Create group*</label>
                <input id="deckName"type="text" name="deckName"required onChange={formik.handleChange} value={formik.values.deckName}></input>
                <label htmlFor = "deckDescription">Add description</label>
                <input id="deckDescription" type="text" name="deckDescription"onChange={formik.handleChange} value={formik.values.deckDescription}></input>
                <input type="email" name="email" onChange={formik.handleChange} value={formik.values.email}></input>
                
          </form>
        </div>
      );
}

export default simpleForm