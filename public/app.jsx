var GreeterMessage = React.createClass({

  render: function () {
    var name = this.props.name,
      msg = this.props.msg;
    return (
      <div>
        <h1> Hello {name}</h1>
        <p> {msg} </p>
      </div>
    );
  }
});

var GreeterForm = React.createClass({
  onButtonClick: function (e) {
    e.preventDefault();

     var name = this.refs.name.value;
     if (name.length > 0) {
       this.refs.name.value = '';
       this.props.onNewName(name);
     }
  },
  render: function () {
    var onNewName = this.props.onNewName;
    return (
      <div>
        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name"></input>
          <button> set Name</button>
        </form>
      </div>
    );
  }
});

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
  handleName: function (name) {
    this.setState({
      'name': name
    });
  },
  render: function () {
    var name = this.state.name,
      msg = this.props.msg;

    return (
      <div>
        <GreeterMessage name={name} msg={msg}/>
        <GreeterForm onNewName={this.handleName}/>
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
