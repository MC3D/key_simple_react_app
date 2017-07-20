import React, { Component } from 'react';
import moment from 'moment';

export default class EarthquakeList extends Component {
  render() {
    let quakes = this.props.earthquakes.features.map((earthquake, index) => {
      return (
        <div className="col-sm-6" key={ index }>
          <div className="card" >
            <div className="card-block">
              <h4 className="card-title">{ earthquake.place }</h4>
              <h6 className="card-subtitle mb-2 text-muted">Magnitude: { earthquake.mag }</h6>
              <h6 className="card-subtitle mb-2 text-muted">Time: {moment(earthquake.time).format('llll')}</h6>
              <p className="card-text">Coordinates: { earthquake.geometry.coordinates.join(' ') }</p>
              <a href={ earthquake.url } className="card-link">USGS Event Link</a>
            </div>
          </div>
        </div>
      )
    });
    return (
      <div className="quake-list">
        <div className="row">
          {quakes}
        </div>
      </div>
    )
  }
}
