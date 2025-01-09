
import './App.css';
import React, { useState } from "react"

function App() {
  const [fVal,setFVal]=useState("");
  const [dFun,setDFun]=useState("")
  
  const[ipVal,setIpVal]=useState("");
  const getVal=(e)=>{
     setIpVal(ipVal+e.target.value);
     setDFun(dFun+e.target.value);
  }
  
  let ConVal=ipVal[ipVal.length-1]+ipVal[ipVal.length-2];
  const calculate=()=>{
    if(ipVal==="0/0"){
      setFVal("NaN")
    }else if(ipVal===""){
      setFVal("Error")
    }else if(ConVal==="/0"){
      setFVal("Infinity")
    }else{
    setDFun(eval(dFun).toString());
    setFVal(eval(dFun));
    
    }
    
  }
  const clear=()=>{
    setFVal()
    setIpVal("")
    setDFun("")
  }
  
  return (
    <div className="App">
      <h1>React Calculator</h1>
      <div>
        <input type='text' className="input" placeholder=''  value={ipVal}/>
        <br/>

        <br/>

        <div>{fVal}</div>
        <button className="btn" onClick={getVal} value="7" >7</button>
        <button className="btn" onClick={getVal} value="8">8</button>
        <button className="btn" onClick={getVal} value="9">9</button>
        <button className="btn" onClick={getVal} value="+" >+</button>
        <br/>
        <button className="btn" onClick={getVal} value="4">4</button>
        <button className="btn" onClick={getVal} value="5">5</button>
        <button className="btn" onClick={getVal} value="6">6</button>
        <button className="btn" onClick={getVal} value="-">-</button>
        <br/>
        <button className="btn" onClick={getVal} value="1">1</button>
        <button className="btn" onClick={getVal} value="2">2</button>
        <button className="btn" onClick={getVal} value="3">3</button>
        <button className="btn" onClick={getVal} value="*">*</button>
        <br/>
        <button className="btn" onClick={clear} value="C">C</button>
        <button className="btn" onClick={getVal} value="0">0</button>
        <button className="btn" onClick={calculate} value="=">=</button>
        <button className="btn" onClick={getVal} value="/">/</button>
        
      </div>
    </div>
  );
}

export default App;
