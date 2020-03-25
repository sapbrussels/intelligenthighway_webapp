import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import home from './home';


function App() {
  return (
    <BrowserRouter>
     <Route path='/' component={home}/>
    </BrowserRouter>
    
  );
}

export default App; 
