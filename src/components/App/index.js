import React, { Component } from 'react';
import Intro from '../Intro';
import Series from '../containers/Series';
// import './App.css';
import 'whatwg-fetch';

class App extends Component {
  constructor() {
    super();
    this.state = {
      series: []
    }
  }

  componentDidMount() {
    fetch('http://api.tvmaze.com/search/shows?q=Vikings')
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      this.setState({ series: data });
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>TV Series List</h1>
        </header>
        <Intro message='Here you can find all of your most loved series' />
          The length of series array = {this.state.series.length}
        <Series />
      </div>
    );
  }
}

export default App;
