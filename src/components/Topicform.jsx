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
      <div className="topicform">
        <form>
          <input type="text" placeholder='Title'
            value={this.state.etunimi} onChange={this.titleArvoMuuttunut} /><br />
          <input type="text" placeholder='Description'
            value={this.state.sukunimi} onChange={this.descriptionArvoMuuttunut} /><br />
          <input type="text" placeholder='Time to master subject'
            value={this.state.etunimi} onChange={this.timeToMasterNimenArvoMuuttunut} /><br />
          <input type="text" placeholder='Time spent on subject'
            value={this.state.sukunimi} onChange={this.timeSpentArvoMuuttunut} /><br />
          <input type="text" placeholder='Source'
            value={this.state.etunimi} onChange={this.sourceArvoMuuttunut} /><br />
          <input type="text" placeholder='Start Date'
            value={this.state.sukunimi} onChange={this.startDateArvoMuuttunut} /><br />
          <p>Done?</p><input type="checkbox" value={this.state.progress} onClick={this.toggleCheckbox} /><br />
          <input type="submit" defaultValue="Add Topic" onClick={this.nappiaPainettu} />
        </form>

      </div>
    )
  }
}
