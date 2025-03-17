import React from "react";
import  NavBar from "./NavBar";
import  Landing  from "./Landing";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function HomePage(){
  return (
    <div>
      <NavBar/>
      <Landing/>
      <Footer />
    </div>
  );
};
export default HomePage;