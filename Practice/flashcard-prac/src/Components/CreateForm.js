import React, { Fragment } from "react";
import { ErrorMessage, Field, Formik } from "formik";
import * as YUP from "yup";
import ErrorElement from "./ErrorElement";
import {useRef} from "react"

function CreateForm() {

    const groupRef = useRef()
  const intialvalues = {
    groupName: "",
    groupDes: "",
    groupImg: "",
    terms: [{ termName: "", termDes: "", termImg: "" }],
  };

  const onSubmit = (values) => {
    console.log(values);
  };
  const validationSchema = YUP.object({
    groupName: YUP.string().required("Required !"),
    groupDes: YUP.string().required("Required !"),
    terms: YUP.array(
      YUP.object({
        termName: YUP.string().required("Required !"),
        termDes: YUP.string().required("Required !"),
      })
    ),
  });
  return (
    <Fragment>
      <Formik
        initialValues={intialvalues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ values, error }) => {
          console.log(values);
          console.log(error);
          return (
            <Fragment>
              {/* Group Name */}
              <div className="bg-slate-100  w-[75%] m-auto px-[2%] py-[1%] space-y-6">
                <div className=" flex justify-between">
                <div>
                    <label htmlFor="groupName" className="block">Create Group*</label>
                  <Field name="groupName" type="text" className="border border-gray-500 rounded-md"></Field>
                  <ErrorMessage
                    name="groupName"
                    component={ErrorElement}
                  ></ErrorMessage>
                  </div>
                  <input type= "file" accept="image/png, image/jpeg" hidden= "true" ref={groupRef}></input>
                  <button type="button" onClick={()=>{groupRef.current.click()}} className="bg-blue-500 p-2">Upload</button>
                </div>
                <div>
                <label htmlFor="groupDes" className="block">Add Description</label>
                <Field
                  name="groupDes"
                  type="text"
                  as="textarea"
                  className="w-[75%] border border-gray-500 rounded-md"
                ></Field>
                <ErrorMessage
                    name="groupName"
                    component={ErrorElement}
                  ></ErrorMessage>
                </div>
              </div>
            </Fragment>
          );
        }}
      </Formik>
    </Fragment>
  );
}

export default CreateForm;
