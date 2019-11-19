import React from 'react';
import './App.css';
import Topiclist from './components/Topiclist';
import Topicform from './components/Topicform';
import Home from './components/Home';
import Notfound from './components/Notfound';
import Navigation from './Navigation';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

const App = appProps => (
  <Router>
    <div className="App">
      <Navigation/>
      <Switch>
        <Route exact name="index" path="/" component={Home} />
        <Route path="/topics" component={Topiclist} />
        <Route exact path="/topicform" component={Topicform} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
  );


export default App;
