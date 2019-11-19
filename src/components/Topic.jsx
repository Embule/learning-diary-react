import React, { Component } from 'react'

export default class Topic extends Component {
  poistaMinut = () => {
    this.props.deleteCallback(this.props.topic.id);
  }
  render() {
    const {id, title, description, timetomaster, timespent, source, startdate, progress} = this.props.topic;
    return (
      <div className="topic"> 
        <h3>{title}</h3>
        <p>{id}</p>
        <p>{description}</p>
        <p>{timetomaster}</p>
        <p>{timespent}</p>
        <p>{source}</p>
        <p>{startdate}</p>
        <p>{progress}</p>
        <button type="button" onClick={this.postaMinut}>Delete</button>
      </div>
    )
  }
}
