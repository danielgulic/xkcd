import React, { Component } from 'react';
import Comic from './Comic';

class ComicController extends Component {
  constructor() {
    super();

    this.state = {
      amount: null,
      comic: null,
      nextComic: null,
    }

    this.showNextComic = this.showNextComic.bind(this);
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  async showNextComic() {
    this.setState({ comic: this.state.nextComic });
    // get another random comic to be on hold for when it cycles
    let res = await fetch('https://xkcd.now.sh/' + this.getRandomInt(1, this.state.amount));
    let json = await res.json();
    this.setState({ nextComic: json });    
  }

  async componentDidMount() {
    let res;
    let json;

    // get amount of comics by getting the number of the latest one
    res = await fetch('https://xkcd.now.sh/');
    json = await res.json();
    this.setState({ amount: json.num });

    // get random comic
    res = await fetch('https://xkcd.now.sh/' + this.getRandomInt(1, this.state.amount));
    json = await res.json();
    this.setState({ comic: json });

    // get another random comic to be on hold for when it cycles
    res = await fetch('https://xkcd.now.sh/' + this.getRandomInt(1, this.state.amount));
    json = await res.json();
    this.setState({ nextComic: json });    
  }

  render() {
    return (
      <div style={{ paddingBottom: '5%' }}>
        <button onClick={this.showNextComic}>Get another random comic!</button>
        {this.state.comic && 
        <Comic comic={this.state.comic} nextComicImg={this.state.nextComic ? this.state.nextComic.img : undefined} />}
      </div>
    );
  }
}

export default ComicController;
