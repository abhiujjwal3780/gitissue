import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Open from './component/Open';
import Closed from './component/Closed';
import Label from './component/Label';
import Error from './Error';
import NewIssue from './component/NewIssue';
import Navbar from './component/Navbar';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/"  ><Open /></Route>
        <Route   exact path="/component/closed" component={Closed} />
        <Route exact path="/component/newissue" >
          <NewIssue />
        </Route>
        <Route exact path="/component/label" component={Label} /> 
        <Route component={Error}/>
      </Switch>
    </div>
  </ Router>
  );
}

export default App;
