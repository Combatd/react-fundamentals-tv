import React, { Component } from 'react';
import Intro from '../Intro';
import './App.css';
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
      console.log(response);
    }).catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>TV Series List</h1>
          <Intro message='Here you can find all of your most loved series' />
          The length of series array = {this.state.series.length}
        </header>
      </div>
    );
  }
}

export default App;
