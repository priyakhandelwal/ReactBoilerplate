var React = require('react');

var WeatherMessage = (props) => {
  return (
    <div>
      <h3 className="text-center">It is {props.temp} in {props.location}</h3>
    </div>
  );
};

module.exports = WeatherMessage;
