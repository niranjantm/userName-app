import {useState,useRef} from "react";

export default function NewCardForm(){
    const [formData,setFormData] = useState([])
    // const []
    const term = useRef();
    const description = useRef();
   const clickHandler=(event)=>{
        event.preventDefault();
        setFormData(preState=>preState.push({term:term.current.value,description:description.current.value}));
        console.log(formData)
   }

    return(
        <form>
            <div>
            <label htmlFor="deckName" >Create group*</label>
            <input id="deckName"type="text" required></input>
            <label htmlFor = "deckDescription">Add description</label>
            <input id="deckDescription" type="text"></input>
            </div>
            <div>
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
            </div>
            <div>
                <label htmlFor="term">Enter Term*</label>
                <input id="term" type="text" required  ref={term}></input>
                <label htmlFor="termDescription">Enter Description*</label>
                <input id="termDescription" type="text" ref={description}></input>
                <button onClick={clickHandler}>Add more</button>
            </div>
           
        </form>
    )
}