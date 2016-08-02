var Game = React.createClass({
  getInitialState: function() {
    return {
      status: " ",
      turn:'o',
      clicks: 0
    };
  },

  clickHandler: function() {
    var newClicks = this.state.clicks + 1;
    var newMark = newClicks%2 ? 'X' : 'O';
    if ((status === 'X' || STATUS === "O")){
      return;
    }
    this.setState({
      status: newMark,
      clicks: newClicks
    });
  },

  render: fucntion() {
    return <div>
      <div className="box" onClick={this.clickHandler}><h1>{this.state.status}</h1></div>
      <div className="box" onClick={this.clickHandler}><h1>{this.state.status}</h1></div>
      <div className="box" onClick={this.clickHandler}><h1>{this.state.status}</h1></div>
      <div className="box" onClick={this.clickHandler}><h1>{this.state.status}</h1></div>
      <div className="box" onClick={this.clickHandler}><h1>{this.state.status}</h1></div>
      <div className="box" onClick={this.clickHandler}><h1>{this.state.status}</h1></div>
      <div className="box" onClick={this.clickHandler}><h1>{this.state.status}</h1></div>
      <div className="box" onClick={this.clickHandler}><h1>{this.state.status}</h1></div>
      <div className="box" onClick={this.clickHandler}><h1>{this.state.status}</h1></div>

    </div>
  }
});

React.render(
  <Game />, document.getElementById("content")
);
