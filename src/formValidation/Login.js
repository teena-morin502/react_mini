import React from "react";
import { Formik,Form, Field } from "formik";
 import * as Yup from 'yup';

 const signinSchema = Yup.object({
    username: Yup.string().min(3,"should contain more then 3 letters").max(25,"minimum 25 letters").required("username is required"),
  });
function Login(){
return(    
<div>
    <h1>HII REGISTERS</h1>
    <Formik
    initialValues={{
        username:"",//same as the name in input
    }}
    onSubmit={(value)=>{
        console.log(
            value
        )
    }}
    >
    {({errors,touched})=>{
        
            return(
                <Form>
                    <Field 
                    className="user"
                      type="text"
                      name="username"
                      placeholder="enter  your username"
                      />
              {errors.username ? (
                <div className="error">{errors.username}</div>
              ) : (
                "hello world"
              )}

                      <button type="submit">Submit</button>
                </Form>
            )
        }
    }
    </Formik>
</div>
)
}
export default Login;