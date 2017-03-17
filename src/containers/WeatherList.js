import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';
import Map from '../components/Map';

class WeatherList extends Component {
  renderWeather(data, index) {
    const temperatures = data.list.map((row) => {
      return row.main.temp;
    });
    const pressures = data.list.map((row) => {
      return row.main.pressure;
    });
    const humidities = data.list.map((row) => {
      return row.main.humidity;
    });
    const { lat, lon } = data.city.coord;

    return (
      <tr key={data.city.name + index}>
        <td><Map lat={lat} lon={lon} /></td>
        <td><Chart data={temperatures} color="red" units=" C" /></td>
        <td><Chart data={pressures} color="blue" units=" mPa" /></td>
        <td><Chart data={humidities} color="green" units="%" /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = ({ weather }) => {
  return { weather };
};

export default connect(mapStateToProps)(WeatherList);
