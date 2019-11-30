import React from 'react';
import './App.css';
import Topiclist from './components/Topiclist';
import Topicform from './components/Topicform';
import Home from './components/Home';
import Notfound from './components/Notfound';
import Navigation from '../src/components/Navigation';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    <Router>
      <Navigation />
      <Switch>
        <Route exact name="index" path="/" component={Home} />
        <Route path="/topics" component={Topiclist} />
        <Route exact path="/topicform" component={Topicform} />
        <Route component={Notfound} />
      </Switch>
    </Router>
    </div >
  
  )
}

export default App;
