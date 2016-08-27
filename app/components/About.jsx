var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>This is a weather application based on react and node.</p>
      <p>Here are the few tools I have used</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React - </a>This was the javascript framework used.
        </li>
        <li>
          <a href="http://openweathermap.org">Open weather Map - </a>has been used to get the weather data.
        </li>
      </ul>
    </div>

  );
};
module.exports = About;
