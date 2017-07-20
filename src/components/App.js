import React, { Component } from 'react';
import moment from 'moment';
import './../styles/App.css';

import EarthquakeInfo from './EarthquakeInfo';
import EarthquakeList from './EarthquakeList';
import earthquakes from './../data/earthquakes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='title'>
          <div className="my-header">Earthquakes!</div>
        </div>
        <EarthquakeInfo />
        <EarthquakeList earthquakes={ earthquakes } />
      </div>
    );
  }
}

export default App;
