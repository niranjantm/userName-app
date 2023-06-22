import React, { Fragment } from "react";
import { ErrorMessage, Field, Formik, Form, FieldArray } from "formik";
import * as YUP from "yup";
import ErrorElement from "./ErrorElement";
import { useRef } from "react";

function CreateForm() {
  const groupRef = useRef();
  const termRef = useRef();
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
            <Form>
              {/* Group Name */}
              <div className="bg-slate-100  w-[75%] m-auto px-[2%] py-[1%] space-y-6">
                <div className=" flex justify-between">
                  <div>
                    <label htmlFor="groupName" className="block">
                      Create Group*
                    </label>
                    <Field
                      name="groupName"
                      type="text"
                      className="border border-gray-500 rounded-md"
                    ></Field>
                    <ErrorMessage
                      name="groupName"
                      component={ErrorElement}
                    ></ErrorMessage>
                  </div>
                  <input
                    type="file"
                    accept="image/png, image/jpeg"
                    hidden="true"
                    ref={groupRef}
                  ></input>
                  <button
                    type="button"
                    onClick={() => {
                      groupRef.current.click();
                    }}
                    className="bg-blue-500 p-2 rounded-md"
                  >
                    Upload
                  </button>
                </div>
                {/* {Group Description} */}
                <div>
                  <label htmlFor="groupDes" className="block">
                    Add Description
                  </label>
                  <Field
                    name="groupDes"
                    type="text"
                    as="textarea"
                    className="w-[75%] border border-gray-500 rounded-md"
                  ></Field>
                  <ErrorMessage
                    name="groupDes"
                    component={ErrorElement}
                  ></ErrorMessage>
                </div>
              </div>
              {/* Terms */}
              <FieldArray name="terms">
                {({ push, remove }) => {
                  return (
                    <div className="bg-slate-100 w-[75%] m-auto ">
                      {values.terms.map((item, index) => {
                        return (
                          <div
                            className="bg-slate-100 w-[100%] m-auto px-[2%] py-[1%] mt-[2%] flex flex-col justify-between md:flex-row transition-all  "
                            key={index}
                          >
                            <div className="w-[100%] bg-red-400 flex justify-between md:w-[25%]">
                              <div>
                              <label htmlFor="termName" className="block">
                                Enter term*
                              </label>
                              <Field
                                name="termName"
                                type="text"
                                className="border border-gray-500 rounded-md w-[100%] md:[25%] "
                              ></Field>
                              </div>
                              <div className="md:hidden">
                              <input
                                type="file"
                                accept="image/png,image/jpeg"
                                hidden
                                ref={termRef}
                              ></input>
                              <button
                                onClick={() => {
                                  termRef.current.click();
                                }}
                                className="bg-blue-500 p-2 rounded-md"
                              >
                                Upload
                              </button>
                            </div>
                            </div>
                            <div className="w-[50%] bg-blue-400">
                              <label htmlFor="termDes" className="block">
                                Defination
                              </label>
                              <Field
                                name="termDes"
                                type="text"
                                as="textarea"
                                className="border border-gray-500 rounded-md w-[100%] inline"
                              ></Field>
                            </div>
                            <div className="hidden md:hidden=false">
                              <input
                                type="file"
                                accept="image/png,image/jpeg"
                                hidden
                                ref={termRef}
                              ></input>
                              <button
                                onClick={() => {
                                  termRef.current.click();
                                }}
                                className="bg-blue-500 p-2 rounded-md"
                              >
                                Upload
                              </button>
                            </div>
                          </div>
                        );
                      })}
                      <div className="w-[100%] m-auto px-[2%] py-[1%]">
                        <button
                          className="block"
                          onClick={() => {
                            push({ termName: "", termDes: "", termImg: "" });
                          }}
                        >
                          Add more+
                        </button>
                      </div>
                    </div>
                  );
                }}
              </FieldArray>
            </Form>
          );
        }}
      </Formik>
    </Fragment>
  );
}

export default CreateForm;
