import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Navigation extends Component {
  render() {
    return (
      <div id="navigation">
        <Link to="/">Home</Link>
        <br />
        <Link to="/topics">Topics</Link>
        <br />
        <Link to="/topicform">Add Topics</Link>
      </div>
    )
  }
}
