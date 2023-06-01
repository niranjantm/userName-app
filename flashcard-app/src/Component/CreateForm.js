import React from "react";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deckAction } from "./store/FormReducer";
import ErrorComponent from "./ErrorComponent";
import { Formik, Form, Field, FieldArray,ErrorMessage } from "formik";
import * as YUP from "yup";
import PreviewImage from "./ImgPreview";

function CreateForm() {
    const deckRef = useRef();
    const termRef = useRef([]);
    console.log(deckRef);
  const intialValues = {
    deckName: "",
    deckDes: "",
    deckImg:"",
    terms: [{ term: "", definition: "", image: null }],
  };
  
  const onSubmit = (values) => console.log(values);
  const validationSchema = YUP.object({
    deckName:YUP.string().required("Reqiured !"),
    deckDes:YUP.string().required("Required !"),
    terms:YUP.array(YUP.object({
        term:YUP.string().required("Reqiured !"),
        definition:YUP.string().required("Reqiured !")
    }))
  });
  // const deckState = useSelector((state)=>{return(state.deck)});
  // const dispatch = useDispatch();
  // const termNameRef = useRef();
  // const termDesRef=useRef();
  // const deckNameRef = useRef();
  // const deckDesRef = useRef();
  // const addMoreHandler=()=>{

  //     dispatch(deckAction.addTerm({termName:termNameRef.current.value,termDes:termDesRef.current.value}))
  //     console.log(deckState.terms)

  // }
  // const submitHandler=(event)=>{
  //     event.preventDefault()
  //     dispatch(deckAction.addDeck({deckName:deckNameRef.current.value,deckDes:deckDesRef.current.value}))
  //     console.log(deckState)
  //     console.log(deckNameRef.current.value)
  //     addMoreHandler()
  // }
  return (
    <Formik initialValues={intialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({values, errors, isSubmitting,setFieldValue}) => (
        console.log(values),
        <Form className="flex flex-col">
          <div className="bg-white mx-28 rounded-md py-16 mt-10 shadow-lg">
            <ul className="flex flex-col space-x-5">
               
              <li className="flex flex-col px-10">
                <label htmlFor="deckName">Create group</label>
                <div className="flex flex-row">
                    <div className="flex flex-col">
                    <Field
                  type="text"
                  name="deckName"
                  id="deckName"
                  className="bg-gray-50 border border-gray-300 rounded-lg w-96 my-3 "
                ></Field>
              
                <ErrorMessage name="deckName" component={ErrorComponent}></ErrorMessage>
                    </div>
               
                <input hidden type="file" accept="image/png, image/jpeg" name="img" ref={deckRef} onChange={(event)=>setFieldValue("deckImg",event.target.files[0])}></input>
                {!values.deckImg?<button className="text-blue-600 ml-24 border pr-4 pl-4 border-gray-950" type="button" onClick={()=>deckRef.current.click()}>Upload Image</button>:""}
                {values.deckImg && <PreviewImage file={values.deckImg} className={"rounded-md w-20 ml-40 "} ></PreviewImage>}
                
                </div>
              </li>
              
              <li className="flex flex-col px-5">
                <label htmlFor="deckDes">Add Description</label>
                <Field
                  as="textarea"
                  type="text"
                  name="deckDes"
                  id="deckDes"
                  className="bg-gray-50 border border-gray-300 rounded-lg  my-3"
                ></Field>
                <ErrorMessage name="deckDes" component={ErrorComponent}></ErrorMessage>
              </li>
            </ul>
          </div>

          {/* {deckState.terms.map((item)=>{
            return(
                <ul className="flex space-x-5">
                <li className='flex flex-col px-10'>
                <label htmlFor='termName'>Enter term</label>
                <input type='text' name='termName' id="termName" className="bg-gray-50 border border-gray-300 rounded-lg w-96 my-3" value={item.termName} ></input>
                </li>
                <li className='flex flex-col px-10'>
                <label htmlFor='termDes'>Enter defination</label>
                <textarea type='text' name='termDes' id="termDes" value={item.termDes} className="bg-gray-50 border border-gray-300 rounded-lg w-96 my-3"></textarea>
                </li>
            </ul>
            )
        })} */}
          <FieldArray name="terms">
            {({ push, remove }) => {
              // console.log(fieldArrayProps);
              // const {push,remove,form} = fieldArrayProps
              // const {values} = form;
              // const {terms,termName,termDes} = values
              return (
                <div className="bg-white mx-28 rounded-md py-16 mt-5 shadow-lg">
                  {values.terms.map((item, index) => {
                    return (
                      <div key={index}>
                        <ul className="flex space-x-5 ">
                          <li className="flex flex-col px-10">
                            <label htmlFor="termName">Enter term</label>
                            <Field
                              type="text"
                              name={`terms[${index}].term`}
                              id="term"
                              className="bg-gray-50 border border-gray-300 rounded-lg w-96 my-3"
                            ></Field>
                            <ErrorMessage name={`terms[${index}].term`} component={ErrorComponent}></ErrorMessage>
                          </li>
                          <li className="flex flex-col px-10">
                            <label htmlFor="termDes">Enter defination</label>
                            <Field
                              as={"textarea"}
                              type="text"
                              name={`terms[${index}].definition`}
                              id="definition"
                              className="bg-gray-50 border border-gray-300 rounded-lg w-96 my-3"
                            ></Field>
                             <ErrorMessage name={`terms[${index}].definition`} component={ErrorComponent}></ErrorMessage>
                          </li>
                          <li>
                            <input type="file" hidden accept="image/png, image/jpg" ref={(element)=>termRef.current[index]=element} onChange={(event)=>setFieldValue(`terms[${index}].image`,event.target.files[0])}></input>
                            { values.terms[index].image&&<PreviewImage file={values.terms[index].image} className={"w-24 mt-7"}></PreviewImage>}
                            {!values.terms[index].image?<button className="text-blue-600 border border-blue-600 mt-10 p-3" type="button" onClick={()=>termRef.current[index].click()}>Select Image</button>:""}
                          </li>
                        </ul>
                        
                      </div>
                    );
                  })}
                  <button
                          type="button"
                          className=" px-3 mx-10 rounded-md text-md text-blue-500"
                          onClick={() =>
                            push({ term: "", definition: "", image: "" })
                          }
                        >
                          Add More +
                        </button>

                </div>
              );
            }}
          </FieldArray>
          <div className="flex flex-col items-center justify-center ">
            <button type="submit" className="bg-red-600 px-4 rounded-md w-20 ">
              Create
            </button>
            <pre>{JSON.stringify({ values, errors }, null, 4)}</pre>
            
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default CreateForm;
