var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'React',
      msg: 'Sample React component'
    }
  },
  getInitialState: function () {
    return {
      name: this.props.name
    }
  },
  onButtonClick: function (e) {
    e.preventDefault();
    
    var name = this.refs.name.value;
    if (typeof name === "string" && name.length > 0) {
      this.setState({
        name: name
      })
    }
  },
  render: function () {
    var name = this.props.name,
      msg = this.props.msg;

    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{msg + "!!"}</p>

        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name"></input>
          <button> set Name</button>
        </form>

      </div>
    );
  }
});

var firstName = "Priya",
  msg = "This is a react component.";



ReactDOM.render(
  <Greeter name={firstName} msg={msg}/>,
  document.getElementById('app')
);
