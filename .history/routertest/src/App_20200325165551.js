import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import home from './home';
import About from'./About';


function App() {
  return (
    <BrowserRouter>
     <Route path='/' component={home}/>
     <Route path='/About' component={About}/>
    </BrowserRouter>
    
  );
}

export default App; 
