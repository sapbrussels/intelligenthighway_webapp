import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';
import Startpage from './Startpage';
import Gamepage from './Gamepage';

function App() {
  return (
    <BrowserRouter>
    <Switch>
     <Route path='/' exact component={Startpage}/>
     <Route path='/Gamepage' exact component={Gamepage}/>
     </Switch>
    </BrowserRouter>
    
  );
}

export default App; 
