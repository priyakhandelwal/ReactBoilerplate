var React = require('react');
var ReactDOM = require('react-dom');

var temp = {
	"firstName": "Priya"
};

var obj = {
	"lastName": "Khandelwal",
	...temp
};
console.log(obj);

ReactDOM.render(
	<h1>Boilerplate</h1>,
  document.getElementById('app')
);
