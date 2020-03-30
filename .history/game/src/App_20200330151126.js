import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';
import Startpage from './Startpage';

function App() {
  return (
    <BrowserRouter>
    <Switch>
     <Route path='/' exact component={Startpage}/>
     </Switch>
    </BrowserRouter>
    
  );
}

export default App; 
