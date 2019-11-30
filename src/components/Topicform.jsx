import React, { Component } from 'react'
import Button from 'react-bootstrap';
import Topiclist from './Topiclist';

export default class Topicform extends Component {
  state = {
    title: '', description: '', timetomaster: '', timespent: '',
    source: '', startdate: '', progress: ''
  };
  titleArvoMuuttunut = (e) => { this.setState({ title: e.target.value }); }
  descriptionArvoMuuttunut = (e) => { this.setState({ description: e.target.value }); }
  timeToMasterArvoMuuttunut = (e) => { this.setState({ timeToMaster: e.target.value }); }
  timeSpentArvoMuuttunut = (e) => { this.setState({ timeSpent: e.target.value }); }
  sourceArvoMuuttunut = (e) => { this.setState({ source: e.target.value }); }
  startDateArvoMuuttunut = (e) => { this.setState({ startDate: e.target.value }); }
  toggleCheckbox = (e) => { this.setState({ progress: !this.set.state.progress }); }
  nappiaPainettu = (e) => {
    e.preventDefault();
    this.props.lisaaTopic(this.state);
    this.setState({title: '', description: '', timetomaster: '', timespent: '',
    source: '', startdate: '', progress: ''});
  }

  render() {
    return (
      <div className="topicform" id="topicform">
        <h3>Add topic</h3>
        <form>
          Title: <input type="text" value={this.state.etunimi} onChange={this.titleArvoMuuttunut} /><br />
          Description: <input type="text" value={this.state.sukunimi} onChange={this.descriptionArvoMuuttunut} /><br />
          Time Left to Master the Topic: <input type="text" value={this.state.etunimi} onChange={this.timeToMasterNimenArvoMuuttunut} /><br />
          Time Spent on the Topic: <input type="text" value={this.state.sukunimi} onChange={this.timeSpentArvoMuuttunut} /><br />
          Source of Learning: <input type="text" placeholder='www' value={this.state.etunimi} onChange={this.sourceArvoMuuttunut} /><br />
          Start Date<input type="text" placeholder='YYYY-MM-DD' value={this.state.sukunimi} onChange={this.startDateArvoMuuttunut} /><br />
          <p>Done?</p><input type="checkbox" value={this.state.progress} onClick={this.toggleCheckbox} /><br />
          <input type="submit" class="button" defaultValue="Add Topic" onClick={this.nappiaPainettu} />
        </form>

      </div>
    )
  }
}
