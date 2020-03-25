import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';
import Login from './Login';
import Jobspage from'./Jobspage';


function App() {
  return (
    <BrowserRouter>
    <Switch>
     <Route path='/' exact component={Login}/>
     <Route path='/Jobspage' exact component={Jobspage}/>
     </Switch>
    </BrowserRouter>
    
  );
}

export default App; 
