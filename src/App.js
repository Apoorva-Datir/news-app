
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
        <News pageSize={6} country="in" category="sports"/>
      </div>
    )
  }
}

