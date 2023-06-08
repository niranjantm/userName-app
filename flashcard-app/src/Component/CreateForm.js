import React from "react";
import { useRef,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deckAction } from "./store/FormReducer";
import ErrorComponent from "./ErrorComponent";
import {
  Formik,
  Form,
  Field,
  FieldArray,
  ErrorMessage,
  useField,
  
} from "formik";
import * as YUP from "yup";
import PreviewImage from "./ImgPreview";

import { AiOutlineDelete } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";

function CreateForm() {
  const deckRef = useRef();
  const termRef = useRef([]);
  const focusRef = useRef([]);
  const addDeck = useSelector(state=>state.deck)
  const dispatch = useDispatch();
  console.log( "State:--- ", addDeck);
  

  const intialValues = {
    deckName: "",
    deckDes: "",
    deckImg: "",
    terms: [{ term: "", definition: "", image: "" }],
  };

  const onSubmit = (values) => {
    console.log(values);
    dispatch(deckAction.addDeck(values));
    
  };
  const validationSchema = YUP.object({
    deckName: YUP.string().required("Reqiured !"),
    deckDes: YUP.string().required("Required !"),
    terms: YUP.array(
      YUP.object({
        term: YUP.string().required("Reqiured !"),
        definition: YUP.string().required("Reqiured !"),
      })
    ),
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
    <Formik
      initialValues={intialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ values, errors, isSubmitting, setFieldValue }) => (
        console.log(values),
        (
          <Form className="flex  flex-col  max-w-[100%]">
            <div className="bg-white mx-28 flex  rounded-md py-16 mt-10  shadow-lg min-w-[85%]">
              <ul className="flex  flex-col space-x-5  w-[100%]">
                <li className="flex flex-col px-10 ">
                  <label htmlFor="deckName">Create group</label>
                  <div className="flex  flex-row  min-w-[100%] justify-between">
                    <div className="flex   flex-col  w-[40%]">
                      <Field
                        type="text"
                        name="deckName"
                        id="deckName"
                        className="bg-gray-50 border border-gray-300 rounded-lg min-w-[50%] my-3 "
                      ></Field>

                      <ErrorMessage
                        name="deckName"
                        component={ErrorComponent}
                      ></ErrorMessage>
                    </div>

                    <input
                      hidden
                      type="file"
                      accept="image/png, image/jpeg"
                      name="img"
                      ref={deckRef}
                      onChange={(event) =>{
                        if(event.target.files[0]){
                          if(event.target.files[0].size > 8388608){
                            alert("Image must be less than 1mb")
                          }
                          else if(event.target.files[0].size <= 8388608){
                            const reader = new FileReader();
                            reader.readAsDataURL(event.target.files[0]);
                            reader.onload=()=>{
                              setFieldValue("deckImg",reader.result)
                            }
                          }
                        }
                       }
                      }
                        
                        
                        
                      
                    ></input>
                    {
                      <button
                        className={
                          !values.deckImg
                            ? " hidden sm:inline text-blue-600 ml-24 border p-4 border-blue-600 hover:text-white hover:bg-blue-600"
                            : ""
                        }
                        type="button"
                        onClick={() => deckRef.current.click()}
                      >
                        {" "}
                        {values.deckImg ? (
                          <PreviewImage
                            file={values.deckImg}
                            className={"rounded-md w-20 ml-40  hidden sm:inline "}
                          ></PreviewImage>
                        ) : (
                          "Upload Image"
                        )}{" "}
                      </button>
                    }
                  </div>
                </li>

                <li className="flex flex-wrap flex-col px-5">
                  <label htmlFor="deckDes">Add Description</label>
                  <Field
                    as="textarea"
                    type="text"
                    name="deckDes"
                    id="deckDes"
                    className="bg-gray-50 border border-gray-300 rounded-lg  my-3"
                  ></Field>
                  <ErrorMessage
                    name="deckDes"
                    component={ErrorComponent}
                  ></ErrorMessage>
                </li>
                {
                      <button
                        className={
                          !values.deckImg
                            ? " sm:hidden text-blue-600 ml-24 border p-4 border-blue-600 hover:text-white hover:bg-blue-600"
                            : ""
                        }
                        type="button"
                        onClick={() => deckRef.current.click()}
                      >
                        {" "}
                        {values.deckImg ? (
                          <PreviewImage
                            file={values.deckImg}
                            className={"rounded-md w-20 ml-40 sm:hidden  "}
                          ></PreviewImage>
                        ) : (
                          "Upload Image"
                        )}{" "}
                      </button>
                    }
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
                  <div className="bg-white flex flex-col mx-28 rounded-md py-16 mt-5 shadow-lg min-w-[85%]">
                    {values.terms.map((item, index) => {
                      return (
                        <div key={index} className="relative min-w-[100%]   ">
                          <ul className="flex flex-col xl:flex-row space-x-5 w-[100%] bg-green-400 justify-between overflow-hidden ">
                            <li className="flex flex-col px-10   ">
                              <label htmlFor="termName">Enter term</label>
                              <Field name={`terms[${index}].term`} >
                                {(props) => {
                                  const { field, form, meta } = props;
                                  console.log(props);
                                  return (
                                    <input
                                    
                                      type="text"
                                      id="term"
                                      className="bg-blue-500 border border-gray-300 rounded-lg  my-3"
                                      {...field}
                                      ref={(element) =>
                                        (focusRef.current[index] = element)
                                      }
                                    ></input>
                                  );
                                }}
                              </Field>
                              <ErrorMessage
                                name={`terms[${index}].term`}
                                component={ErrorComponent}
                              ></ErrorMessage>
                            </li>
                            <li className="flex flex-col px-10 w-[100%] bg-yellow-300 ">
                              <label htmlFor="termDes">Enter defination</label>
                              <Field
                                as={"textarea"}
                                type="text"
                                name={`terms[${index}].definition`}
                                id="definition"
                                className="bg-gray-50 border border-gray-300 rounded-lg w-[100%] my-[3%]"
                              ></Field>
                              <ErrorMessage
                                name={`terms[${index}].definition`}
                                component={ErrorComponent}
                              ></ErrorMessage>
                            </li>
                            <li className=" w-[100%] mx-[20%] bg-pink-500">
                              <input
                                type="file"
                                hidden
                                accept="image/png, image/jpg"
                                ref={(element) =>
                                  (termRef.current[index] = element)
                                }
                                onChange={(event) =>{
                                  if(event.target.files[0]){
                                    if(event.target.files[0].size >8388608 ){
                                      alert("Term image must be less than 1mb")
                                    }
                                    else if(event.target.files[0].size <= 8388608 ){
                                      const reader = new FileReader();
                                      reader.readAsDataURL(event.target.files[0]);
                                      reader.onload =()=>{
                                        setFieldValue(`terms[${index}].image`,reader.result)
                                      }
                                    }
                                  }
                                }
                                  
                                }
                              ></input>

                              {
                                <button
                                  className={
                                    !values.terms[index].image
                                      ? "text-blue-600 ml-24 border p-4 border-blue-600 hover:text-white hover:bg-blue-600"
                                      : ""
                                  }
                                  type="button"
                                  onClick={() => termRef.current[index].click()}
                                >
                                  {values.terms[index].image ? (
                                    <PreviewImage
                                      file={values.terms[index].image}
                                      className={"w-24 mt-7"}
                                    ></PreviewImage>
                                  ) : (
                                    "Select Image"
                                  )}
                                </button>
                              }
                              {values.terms[index].image ? (
                                <button
                                  className="text-blue-600 border border-blue-600 ml-10 mb-24 p-3 hover:text-white hover:bg-blue-600"
                                  type="button"
                                  onClick={() =>
                                    focusRef.current[index].focus()
                                  }
                                >
                                  <AiOutlineEdit></AiOutlineEdit>
                                </button>
                              ) : (
                                ""
                              )}
                              {values.terms.length > 1 ? (
                                <button
                                  type="button"
                                  className="ml-7 text-blue-600 border border-blue-600 p-3 hover:text-white hover:bg-blue-600"
                                  onClick={() => remove(values.terms[index])}
                                >
                                  <AiOutlineDelete></AiOutlineDelete>
                                </button>
                              ) : (
                                ""
                              )}
                            </li>
                          </ul>
                        </div>
                      );
                    })}
                    <div >
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
                    
                  </div>
                );
              }}
            </FieldArray>
            <div className="flex flex-col items-center justify-center ">
              <button
                type="submit"
                className="text-red-600 border border-red-600 hover:text-white hover:bg-red-600 px-4 rounded-md w-20 "
              >
                Create
              </button>
              <pre>{JSON.stringify({ values, errors }, null, 4)}</pre>
            </div>
          </Form>
        )
      )}
    </Formik>
  );
}

export default CreateForm;
