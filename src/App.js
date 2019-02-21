import React, { Component } from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom'
import Home from './views/Home/Home.js'
import Navbar from './components/Navbar/Navbar.js'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
          <header>
          <Navbar/>
          </header>
        </div>
    );
  }
}

export default App;
