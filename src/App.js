
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';

import React, { Component } from 'react'

export default class App extends Component {
  // c="Apoorva";
  render() {
    return (
      <div>
        {/* Hello My First Class based component {this.c} */}
        <Navbar/>
        <News/>
      </div>
    )
  }
}

