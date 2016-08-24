var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      location: 'Chennai',
      temp: 31
    }
  },
  getWeather: function (location) {
    self = this;

    OpenWeatherMap.getWeather(location).then(function(temp) {
      self.setState({
        location: location,
        temp: temp
      })
    }, function (error) {
      alert(error);
    });
  },
  render: function() {
    var {location, temp} = this.state;
    return (
      <div>
          <h1>Weather component</h1>
          <WeatherForm handleSearch={this.getWeather}/>
          <WeatherMessage temp={temp} location={location}/>
      </div>
    );
  }
});

module.exports = Weather;
