import React, { Component } from 'react';
import './App.css';
import Countdown from './Countdown.js';

class App extends Component {

  componentDidMount(){
    document.title = "Ashenmall - 2021"
  }

  render() {
    return (
      <div className="App">
        <Countdown date={`2021-06-13T00:00:00`} />
        <div className="Video">
          <iframe title='iframe' width="853" height="480" src="https://www.youtube.com/embed/OR-ZccJyFhM?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe>
        </div>
      </div> 
    );
  }
}

export default App;
