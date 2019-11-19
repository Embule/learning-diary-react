import React, { Component } from 'react'
import Topic from './Topic';
import {fetchAllTopics, deleteTopicWithId, postTopic} from '../service/api.client';
import Topicform from './Topicform';

export default class Topiclist extends Component {
  state = {topics: []}

  componentDidMount() {
    this.fetchTopicList();
  }

  fetchTopicList = () => {
    fetchAllTopics().then(topics => {
      this.setState({topics});
    })
  }

  addTopic = topic => {
    postTopic(topic).then(vastaus => {
      this.fetchTopicList();
    })
  }

  deleteTopic = id => {
    deleteTopicWithId(id).then(vastaus => {
      if (vastaus.status !== 200) {
        alert("Virhe")
      }
    })
  }

  render() {
    const topicrows = this.state.topics
    // .sort(function(q1, q2) {
    //   const topic1last = q1.topic.split(" ").slice(-1)[0];
    //   const topic2last = q2.topic.split(" ").slice(-1)[0];
    //   if (topic1last === topic2last) return 0;
    //   if (topic1last > topic2last) return 1;
    //   return -1;
    //})
    .map((topic) => {
      return <Topic deleteCallback={this.deleteTopic} topic={topic} key={topic.id} />
    })

    return (
      <div className="topiclist" id="topiclist">
        <h2>Topiclist</h2>
        <p id="topicrows" lisaaTopic={this.tiedotPaivita}>{topicrows}
        </p>
      </div>
    )
  }
}
