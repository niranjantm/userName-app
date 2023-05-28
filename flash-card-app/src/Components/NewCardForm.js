import {useState,useRef} from "react";
import {Formik,Form,ErrorMessage,Field} from "formik"

export default function NewCardForm(){
    
    // const []
    
    // const description = useRef();
    const initialValues={
        name:"",
        description:"",
        term:"",
        termDes:""
    }
    const onSubmit=values=>{
        console.log(values)
    }
    
    

   const clickHandler=(event)=>{
   }

    return(
        <Formik initialValues={initialValues}>
        <Form>
            <div>
            <label htmlFor="deckName" >Create group*</label>
            <Field id="deckName"type="text" required name ="name"></Field>
            <label htmlFor = "deckDescription">Add description</label>
            <Field as="textarea"id="deckDescription" type="text" name="description"></Field>
            
            {/* <div>
                {formData.map(data=>{
                    return(
                        <div>
                <label htmlFor="term">Enter Term*</label>
                <input id="term" type="text" required value={data.term} ></input>
                <label htmlFor="termDescription">Enter Description*</label>
                <input id="termDescription" type="text" value={data.description}></input>
                <button onClick={clickHandler}>Add more</button>
            </div>
                    )
                })}
            </div> */}
            <div>
                <Field>
               
                {(props)=>{
                    <div>
                     <label htmlFor="term">Enter Term*</label>
                    <input id="term" type="text" required name="term"></input>
                    <label htmlFor="termDescription">Enter Description*</label>
                    <input as = "textarea"id="termDescription" type="text" name="termDes" ></input>
                    <button onClick={clickHandler}>Add more</button>
                    </div>
                }}
                
               
                </Field>
            </div>
            <button>Submit</button>
            </div>
           
        </Form>
        </Formik>
    )
        }
