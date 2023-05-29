import { useState, useRef, Fragment } from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { useSelector,useDispatch } from "react-redux";
import {deckActions,termAction} from "../store/formReducer"
 
export default function NewCardForm() {
    const dispatch = useDispatch();
    const deckState = useSelector(state=>state.deckReducer);
    const termState  =useSelector(state=>state.termReducer)
    const [deck,setDeck] = useState()
    

    const deckNameHandler=(event)=>{
        // console.log(event.target.value)
        // dispatch(deckActions.addDeck({deckName:event.target.value}))
      

    }
    const deckDesHandler=(event)=>{
        // console.log(event.target.value)
        // dispatch(deckActions.addDeck({deckDes:event.target.value}))
        
    }
    const termHandler=(event)=>{

    }
    const termDesHandler=(event)=>{

    }
  return (
    <Fragment>
      <form>
        <div>
          <label htmlFor="deckName">Create group*</label>
          <input
            id="deckName"
            type="text"
            required
            name="name"
            onChange={deckNameHandler}
          ></input>
          <label htmlFor="deckDescription">Add description</label>
          <input
            as="textarea"
            id="deckDescription"
            type="text"
            name="description"
            onChange={deckDesHandler}
          ></input>

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
            <label htmlFor="term">Enter Term*</label>
            <input id="term" type="text" required name="term" onChange={termHandler}></input>
            <label htmlFor="termDescription">Enter Description*</label>
            <input
              as="textarea"
              id="termDescription"
              type="text"
              name="termDes"
              onChange={termDesHandler}
            ></input>
            <button type="button">Add more</button>
          </div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </Fragment>
  );
}
