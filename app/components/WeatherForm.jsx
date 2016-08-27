var React = require('react');

var WeatherForm = React.createClass({

  handleSubmit: function (e) {
    e.preventDefault();

    var location = this.refs.city.value;
    if (location.length > 0) {
      this.refs.city.value = '';
    }
    this.props.handleSearch(location);
  },
  render: function () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="search" placeholder="Search weather by city" ref="city"></input>
          <button className="button expanded hollow">Get Weather</button>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
