var React = require('react');

var WeatherMessage = (props) => {
  return (
    <div>
      It is {props.temp} in {props.location}
    </div>
  );
};

module.exports = WeatherMessage;
