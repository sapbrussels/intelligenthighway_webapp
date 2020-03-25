import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import home from './home';
import About from'./About';


function App() {
  return (
    <BrowserRouter>
     <Route path='/'  exact component={home}/>
     <Route path='/About'  exact component={About}/>
    </BrowserRouter>
    
  );
}

export default App; 
