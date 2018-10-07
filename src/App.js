import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Main from './components/Main';
import Footer from './components/Footer';
import Jumbotron from './components/Jumbotron';
import './styles/page-style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Jumbotron />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
