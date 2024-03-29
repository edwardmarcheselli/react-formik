import React from "react";
import { useFormik } from "formik";
import { Alert } from "react";

function App() {
  const formik = useFormik({
    initialValues: {
      emailField: '',
      pswField: ''
    },
    onSubmit: values =>{
      console.log('form', values);
      alert("Login Successful");
    },
    validate: values =>{
      let errors = {};
      if(!values.emailField) errors.emailField = "Field required";
      if(!values.emailField.includes('@')) errors.emailField = "Username should be an email";
      if(!values.pswField) errors.pswField = "Field required";
      return errors;
    }
  })
    
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email</div>
        <input id="emailField" type="text" onChange={formik.handleChange} value={formik.values.emailField}/>
        {formik.errors.emailField ? <div id="emailError" style={{color:'red'}}>{formik.errors.emailField}</div>: null}
        <div>Password</div>
        <input id="pswField" type="text" onChange={formik.handleChange} value={formik.values.pswField}/>
        {formik.errors.pswField ? <div id="pswError" style={{color:'red'}}>{formik.errors.pswField}</div>: null}
        <button id="submitBtn" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
