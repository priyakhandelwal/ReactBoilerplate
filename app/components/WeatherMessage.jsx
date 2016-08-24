var React = require('react');

var WeatherMessage = React.createClass({

  render: function() {
    var location = this.props.location,
      temp = this.props.temp;
    return (
      <div>
        it is {temp}  in {location}.
      </div>
    );
  }
});

module.exports = WeatherMessage;
