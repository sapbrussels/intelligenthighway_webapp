import React from 'react';
import {Browserrouter, Route} from "react-router";
import './App.css';
import home from './home';


function App() {
  return (
    <Browserrouter>
     <Route path='/' component={home}/>
    </Browserrouter>
    
  );
}

export default App; 
