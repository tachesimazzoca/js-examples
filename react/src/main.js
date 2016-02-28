var React = require('react');
var ReactDOM = require('react-dom');

var MessageBox = React.createClass({
  render: function() {
    return <p>{this.props.message}</p>;
  }
});

var Items = React.createClass({
  getInitialState: function() {
    return { items: [] };
  }

, handleAddItem: function(e) {
    e.preventDefault();
    var id = Date.now();
    var text = Date.now();
    var nextItems = this.state.items.concat([ { id: id, text: text } ]);
    this.setState({ items: nextItems });
  }

, handleRemoveItem: function(key) {
    var items = this.state.items.filter(function(item, i) { return i !== key; } );
    this.setState({ items: items });
  }

, render: function() {
    return (
      <div>
        <ul>
        {this.state.items.map(function(item, i) {
          var boundClick = this.handleRemoveItem.bind(this, i);
          return <li key={i} onClick={boundClick}>{item.text}</li>;
        }, this)}
        </ul>
        <form onSubmit={this.handleAddItem}>
          <button>Add</button>
        </form>
      </div>
    );
  }
});

var App = React.createClass({
   render: function() {
    return (
      <div>
        <h2>MessageBox</h2>
        <MessageBox message="Hello, world!" />
        <h2>Items</h2>
        <Items />
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
