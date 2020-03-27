import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';
import Login from './Login';
import Jobspage from'./Jobspage';
import Maintenance from './Maintenance';


function App() {
  return (
    <BrowserRouter>
    <Switch>
     <Route path='/' exact component={Login}/>
     <Route path='/Jobspage' exact component={Jobspage}/>
     <Route path='/Maintenance' exact component={Maintenance}/>
     </Switch>
    </BrowserRouter>
    
  );
}

export default App; 
