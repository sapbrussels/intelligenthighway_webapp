import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';
import home from './home';
import About from'./About';


function App() {
  return (
    <BrowserRouter>
    <Switch>
     <Route path='/' component={home}/>
     <Route path='/About' component={About}/>
     </Switch>
    </BrowserRouter>
    
  );
}

export default App; 
