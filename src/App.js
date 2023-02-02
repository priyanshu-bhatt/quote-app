import { useEffect } from "react";

import { useState } from "react";
import "./App.css";
 
  function App() {

    useEffect(()=>getQuote(),[])

    function randomcolor() {
        return Math.floor(Math.random() * 255);
      }
    
      function changeColor(color) {
        document.body.style.background = color;
    }
      
    function Run() {
        changeColor("rgba("+ randomcolor() + "," + randomcolor() + "," + randomcolor() + ")");
    }

      const [quote,setQuote] = useState("");
      const getQuote=()=>{
        fetch("https://api.quotable.io/random").
        then((response)=>response.json()).
        then((data)=>setQuote(data))
      }
      
  return (
    <>
    
    <div className="container">
    <div className="App">
      
      <h2>{quote.content}</h2>
      <h4>~{quote.author}</h4>
      <button onClick={() => {getQuote(); Run()}} className="btn btn-danger">New Quote🆕</button>
      
    </div>
    </div>
    
    </>
    
  );
}

export default App;
