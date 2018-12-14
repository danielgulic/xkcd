import React, { Component } from 'react';
import ComicController from './components/comic/ComicController';

class App extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center', paddingTop: '5%' }}>
        <h1 style={{ fontSize: '500%' }}>XKCD</h1>
        <h3>
          <a href='https://en.wikipedia.org/wiki/Xkcd'>comics by Randall Munroe </a>&#8226;
          <a href='https://danielgulic.com'> browser by Daniel Gulic</a>
        </h3>
        <ComicController />
      </div>
    );
  }
}

export default App;
