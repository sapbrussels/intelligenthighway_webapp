import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';
import Gamepage from './Gamepage';

function App() {
  return (
    <BrowserRouter>
    <Switch>
     <Route path='/' exact component={Gamepage}/>
     </Switch>
    </BrowserRouter>
    
  );
}

export default App; 
