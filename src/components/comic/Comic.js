import React, { Component } from 'react';

class Comic extends Component {
  render() {
    return (
      <div>
        <h2>"{this.props.comic.safe_title}"</h2>
        <img src={this.props.comic.img} alt={this.props.comic.transcript} />
      </div>
    );
  }
}

export default Comic;
