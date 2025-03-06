import main from "../main";
import Constact from "../Constact";
import Address from "../Address"
import React from "react";
import {createBrowserRouter,Router,routes}  from "react-router-dom"

let routers=createBrowserRouter[{
    path:"./",
    element:<Main/>,
    children=[
        {
            path:".contact",
            element:<Constact/>

        }
    ]

}]