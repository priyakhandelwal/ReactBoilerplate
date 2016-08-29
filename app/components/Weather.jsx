var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
  getInitialState: function () {
    return {}
  },
  getWeather: function (location) {
    self = this;
    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined
    });
    OpenWeatherMap.getWeather(location).then(function(temp) {
      self.setState({
        isLoading: false,
        location: location,
        temp: temp
      })
    }, function (e) {
      self.setState({
        isLoading: false,
        errorMessage: e.message
      });
    });
  },
  componentDidMount: function () {
    var location = this.props.location.query.location;

    if (location && location.length > 0) {
      this.getWeather(location);
      window.location.hash = "#/";
    }
  },
  componentWillReceiveProps: function (newProps) {
    var location = newProps.location.query.location;

    if (location && location.length > 0) {
      this.getWeather(location);
      window.location.hash = "#/";
    }
  },
  render: function() {
    var {isLoading, location, temp, errorMessage} = this.state;
    function renderMessage () {
      if (isLoading) {
        return <h3 className="text-center">Fetching temperature ... </h3>;
      } else if (location && temp) {
        return <WeatherMessage temp={temp} location={location}/>;
      }
    }

    function renderError () {
      if (errorMessage) {
        return (
          <ErrorModal message={errorMessage}/>
        );
      }
    }
    return (
      <div>
          <h3 className="text-center page-title">Get Weather</h3>
          <WeatherForm handleSearch={this.getWeather}/>
          {renderMessage()}
          {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
