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

    var updates = {},
      name = this.refs.name.value;
      msg = this.refs.msg.value;

     if (name.length > 0 ) {
       this.refs.name.value = '';
       updates.name = name;
     }
     if (msg.length > 0) {
       this.refs.msg.value = '';
       updates.msg = msg;
     }
     this.props.onNewData(updates);
  },
  render: function () {

    return (
      <div>
        <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name" placeholder="Enter name"></input><br></br>
          <textarea rows="4" cols="40" ref="msg" placeholder="Enter message"></textarea>
          <button> Submit </button>
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
      name: this.props.name,
      msg: this.props.msg
    }
  },
  handleData: function (updates) {
    // this.setState({
    //   'name': updates.name ? updates.name : this.state.name,
    //   'msg': updates.msg ? updates.msg : this.state.msg
    // });
    this.setState(updates);
  },
  render: function () {
    var name = this.state.name,
      msg = this.state.msg;

    return (
      <div>
        <GreeterMessage name={name} msg={msg}/>
        <GreeterForm onNewData={this.handleData}/>
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
