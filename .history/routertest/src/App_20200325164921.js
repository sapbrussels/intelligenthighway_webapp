import React from 'react';
import {Browserrouter, Route} from "react-router-dom";
import './App.css';
import home from './home';
import About from'./About>;

function App() {
  return (
    <Browserrouter>
     <Route path='/' component={home}/>
     <Route path='/About' component={About}/>
    </Browserrouter>
    
  );
}

export default App; 
