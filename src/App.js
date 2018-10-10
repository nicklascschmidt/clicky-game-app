import React, { Component } from 'react';
import NavBar from './components/Nav/NavBar';
import Footer from './components/Footer';
import Jumbotron from './components/Jumbotron';
import ImageBoard from './components/ImageBoard';
import './styles/page-style.css';

class App extends Component {
  constructor(props) {
    super(props);
    // this.handleIncrementScore = this.handleIncrementScore.bind(this);
    this.state = {
      score: 0,
      topScore: 0,
      gameOver: false
    }
  }
  

  handleIncrementScore = (characterClicked, characterArray) => {
    // console.log('characterClicked',characterClicked);
    // console.log('characterArray',characterArray);
    let unique = true;
    for (let n=0; n < characterArray.length; n++) {
      if (characterClicked === characterArray[n]) {
        unique = false;
        // TRIGGER YOU LOSE FUNCTION
        alert('game over squid~');
        this.setState({
          score: 0,
          gameOver: true
        });
      }
    }
    // if the character hasn't been clicked before...
    if (unique) {
      this.setState({
        score: this.state.score + 1
      }, () => {
        // callback checks to see if score is better than the current top score
        if (this.state.score > this.state.topScore) {
          this.setState({
            topScore: this.state.score
        });
      }
      });
    }
  };

  getGameOver = (value) => {
    // console.log('getGameOver----',value);
    if (value) {
      this.setState({
        gameOver: false
      });
    }
  }


  render() {
    return (
      <div className="App">
        <NavBar state={this.state}/>
        <Jumbotron />
        <div className='container'>
          <ImageBoard
            handleIncrementScore={ (characterClicked, characterArray) => this.handleIncrementScore(characterClicked, characterArray)}
            gameOver={this.state.gameOver}
            getGameOver={ (value) => this.getGameOver(value) }
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
