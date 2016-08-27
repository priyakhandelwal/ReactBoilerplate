var React = require('react');
var {Link} = require('react-router');
var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are the links to few examples. Fell free to try these out.</p>
      <ol>
        <li>
          <Link to="/?location='Philadelphia'">Philadelphia</Link>
        </li>
        <li>
          <Link to="/?location='Rio'">Rio, Brazil</Link>
        </li>
      </ol>
    </div>

  );
}
module.exports = Examples;
