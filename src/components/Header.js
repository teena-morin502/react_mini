import { useEffect, useState } from "react"
import React from "react"
import Profile from "./Img";
import Details from "./Details";

function Header(){
const [flag, setFlag]= useState(false)
 const [name, setName]= useState("teena morin");
const [age, setAge] =  useState(19);
const [img , setImg ]=useState("https://picsum.photos/id/237/200/300");
const [phoneNumber , setPhoneNumber] =useState(6380332454);


useEffect(
    ()=>{
        console.log({name})
    },
    [name]
)
useEffect(
    ()=>{
   console.log({flag})
    },[name,flag]
)
    return(
   <div>   
    <Profile myImage={img}/>

    <Details changeName={setName} myName={name}  myAge={age} myNumber={phoneNumber} />
    {/* < button onClick={()=> setFlag(p =>!p)}>click here</button> */}
</div>  
    )   
}

export default Header