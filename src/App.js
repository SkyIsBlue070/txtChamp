import { useState } from 'react';
import './App.css';
import About from './Component/About';
import Alert from './Component/Alert';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  const [mode,setMode]= useState('light'); // whether dark mode is enabled
  const [alert,setAlert]= useState(null);
  
  const showAlert=(message,type)=>{
        setAlert({
          msg:message,
          type:type
        })
        setTimeout(()=> {
          setAlert(null);
        },2000);
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#26282A';
      document.body.style.color='white';
      showAlert("Dark Mode Has Been Enabled!","Success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='#26282A';
      showAlert("Light Mode Has Been Enabled!","Success");
    }
  }

  return (
    <>
    <Router>      
        <Navbar Title="txtUtilz" aboutText="About txtUtilz" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <Routes>
        <Route exact path="/" element={<TextForm showAlert={showAlert} Heading="Enter Your Text Here!" mode={mode}/>} />
        <Route exact path="/about" element={<div className="container my-3"><About mode={mode}/></div>} />        
        </Routes>
    </Router>
    </>
  );
}

export default App;
