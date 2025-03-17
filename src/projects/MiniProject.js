import React from "react";
//routeing
 import NavBar from "../routeing/NavBar";
 import { RouterProvider } from "react-router-dom";
import MainRouter from "../routeing/Router";
//data handling
import Form from "../input tables/Form";
//append the number
import AppendNumber from "../appending numbers/AppendNumber";
//e-commerce website
import HomePage from "../e-commerce/HomePage"
// to-dolist
import TodoList from "../todolist/TodoList";


function MiniProject(){
    return(
        <div style={{display:"flex", flexDirection:"column",margin:"30px"}}>
        <h1>REACT PRACTICE MINI PROJECTS</h1>
        <h2>routeing (problem 4)</h2>
        
        <RouterProvider router={MainRouter}>
        <NavBar/>
        </RouterProvider>
        <hr></hr>
  
        <h2>data handling (problem 5)</h2>
        <Form/>
        <hr></hr>
  
        <h2>append the number (problem 6)</h2>
        <AppendNumber/>

        <hr></hr>
        {/* <h2>e-commerce website</h2>
        <HomePage/> */}
        <h2>TodoList</h2>
        <TodoList/>
  
      </div>
    )
}
export default MiniProject;