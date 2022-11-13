import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import {BrowserRouter, Routes , Route} from 'react-router-dom';
function App() {
  
  const [mode, setmode] = useState("light");
  const [redmode, setredmode] = useState("light");
  
  const changetheme =()=>{
    if(mode === "light"){
      setmode("dark");
      document.body.style.backgroundColor ="#3c3e5e";
      document.body.style.color ="white";
    }
    else {
      setmode("light");
      document.body.style.backgroundColor ="white";
      document.body.style.color ="black";
    }
  }

  const redtheme =()=>{
    if(mode === "light"){
      setmode("red");
      document.body.style.backgroundColor ="#b34c4c";
      document.body.style.color ="white";
    }
    else {
      setmode("light");
      document.body.style.backgroundColor ="white";
      document.body.style.color ="black";
    }
  }
  return (
    <React.Fragment>
         
        
      
      <Navbar title="TextTransform"  mode={mode}  changetheme={changetheme}  redtheme={redtheme}/>
      <div className="container my-3" >
      
    
      <TextForm heading="Enter Text to Transform." mode={mode}  changetheme={changetheme}/>
    
      </div>
      
      
 </React.Fragment>
  );
}

export default App;
