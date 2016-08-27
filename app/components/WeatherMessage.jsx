var React = require('react');

// var WeatherMessage = React.createClass({
//
//   render: function() {
//     var location = this.props.location,
//       temp = this.props.temp;
//     return (
//       <div>
//         it is {temp}  in {location}.
//       </div>
//     );
//   }
// });

var WeatherMessage = (props) => {
  return (
    <div>
      It is {props.temp} in {props.location}
    </div>
  );
};

module.exports = WeatherMessage;
