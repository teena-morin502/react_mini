import React from "react";
//routeing
 import NavBar from "../routeing/NavBar";
 import { RouterProvider } from "react-router-dom";
import MainRouter from "../routeing/Router";
//data handling
import Form from "../input tables/Form";
//append the number
import AppendNumber from "../appending numbers/AppendNumber";

function MiniProject(){
    return(
        <div>
        <h1>REACT PRACTICE MINI PROJECTS</h1>
        <h2>routeing (problem 4)</h2>
        <React.StrictMode>
        <RouterProvider router={MainRouter}>
        <NavBar/>
        </RouterProvider>
        </React.StrictMode>
        <hr></hr>
  
        <h2>data handling (problem 5)</h2>
        <Form/>
        <hr></hr>
  
        <h2>append the number (problem 6)</h2>
        <AppendNumber/>
  
      </div>
    )
}
export default MiniProject;