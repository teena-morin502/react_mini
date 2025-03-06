import React,{useState} from "react";

 function AppendNumber(){

const [numbers,setNumbers]=useState("");
const [appendNumber,setAppendNumber]=useState([]);

const handleSubmit=(e)=>{
    e.preventDefault();
    if(numbers.trim()!=="") {
    setAppendNumber((prev)=>[...prev,numbers]);
    setNumbers("")
    }
}

return(
<>
<form onSubmit={handleSubmit}>
<input type="number" value={numbers} onChange={(e)=>{setNumbers(e.target.value)}} placeholder="enter a number" min={(0)} max={(50)}></input>
<button type="submit">append</button>
</form>
<p><strong>Appended number: </strong>{appendNumber.join(", ")}</p>
</>
)
 }
 export default AppendNumber;