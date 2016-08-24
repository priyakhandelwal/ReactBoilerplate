var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      location: 'Chennai',
      temp: 29
    }
  },
  getWeather: function (location) {
    self = this;
    this.setState({
      isLoading: true
    });
    OpenWeatherMap.getWeather(location).then(function(temp) {
      self.setState({
        isLoading: false,
        location: location,
        temp: temp
      })
    }, function (error) {
      self.setState({
        isLoading: false
      });
      alert(error);
    });
  },
  render: function() {
    var {isLoading, location, temp} = this.state;
    function renderMessage () {
      if (isLoading) {
        return <h3>Fetching temperature ... </h3>;
      } else if (location && temp) {
        return <WeatherMessage temp={temp} location={location}/>;
      }
    }
    return (
      <div>
          <h1>Weather component</h1>
          <WeatherForm handleSearch={this.getWeather}/>
          {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
