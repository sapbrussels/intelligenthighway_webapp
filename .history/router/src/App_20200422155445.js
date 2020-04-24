import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';
import Login from './Login';
import Jobspage from'./Jobspage';
import Maintenance from './Maintenance';
import Help from './Help';
import Problempage from './Problempage';
import MqttConnect from './MqttConnect';

function App() {
  return (
    <BrowserRouter>
    <Switch>
     <Route path='/' exact component={Login}/>
     <Route path='/Jobspage' exact component={Jobspage}/>
     <Route path='/Maintenance' exact component={Maintenance}/>
     <Route path='/Help' exact component={Help}/>
     <Route path='/Problempage' exact component={Problempage}/>
     <Route path='/MqttConnect' exact component={MqttConnect}/>
     </Switch>
    </BrowserRouter>
    
  );
}

export default App; 
