import { useFormik } from "formik";
import React from "react";
import * as YUP from "yup";

function App() {
  const validationSchema = YUP.object({
    deckName:YUP.string().required("Required!"),
    deckDescription:YUP.string().required("Reqiuired!"),
    email:YUP.string().email("Invalid email").required("Email required")

  })

  const formik = useFormik({
    initialValues: {
      deckName: "",
      deckDescription: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema
  //   validate:(values)=>{
  //     let error = {};
  //     if(!values.deckName){
  //       error.name="Name required"
  //     }
  //     if(!values.deckDescription){
  //       error.description="description required"
  //     }
  //     if(!values.email){
  //       error.email="Email required"
  //     }
  //     if(values.email){
  //       if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i.test(values.email))
  // {
  //       error.email="Enter valid email"
  // }
  //     }
      
  //     return error
      
  //   }
  });
  
    console.log(formik.errors)
    console.log(formik.touched)
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
        <label htmlFor="deckName">Create group*</label>
        <input
          id="deckName"
          type="text"
          name="deckName"
        
          // onChange={formik.handleChange}
          // value={formik.values.deckName}
          // onBlur={formik.handleBlur}
          {...formik.getFieldProps("deckName")}
        ></input>
        {(formik.touched.deckName && formik.errors.deckName)?<p style={{color:"red"}}>{formik.errors.deckName}</p>:""}
        </div>
        <div>
        <label htmlFor="deckDescription">Add description</label>
        <input
          id="deckDescription"
          type="text"
          name="deckDescription"
          // onChange={formik.handleChange}
          // value={formik.values.deckDescription}
          // onBlur={formik.handleBlur}
          {...formik.getFieldProps("deckDescription")}
        ></input>
        {(formik.touched.deckDescription && formik.errors.deckDescription)?<p style={{color:"red"}}>{formik.errors.deckDescription}</p>:""}
        </div>
        <div>
          <label >Enter email</label>
        <input
          type="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
        ></input>
        <button type="submit">submit</button>
        {(formik.touched.email && formik.errors.email)?<p style={{color:"red"}}>{formik.errors.email}</p>:""}
        </div>
      </form>
    </div>
  );
}

export default App;
