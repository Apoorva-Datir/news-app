import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";

import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //!In react-router-dom v6, "Switch" is replaced by routes "Routes".
//! we also need to change the route declaration to => <Route path='/welcome' element={<Home/>} />

export default class App extends Component {
  // c="Apoorva";
  pageSize=12;
  render() {
    return (
      <div>
        {/* Hello My First Class based component {this.c} */}
        {/* even after using router, our news component don't get mounted agin and again even if we switch between different categories
        so we have to give then a uniwue key prop so that react knows that this is a unique value and we have to remount or
        change the news component to show category wise news */}
        <Router>
        <Fragment>    {/* Fragments are basically used to return multiple elements, you can also use short syntax like <> </> opening and closing brackets insted of using fragmnts   */}
            <Navbar />
            <Routes>
            <Route exact path="/home" element={<News key="general" pageSize={this.pageSize} country="in" category="general" />} />
              <Route exact path="/entertainment" element={<News key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" />} />
              <Route exact path="/business" element={<News key="business" pageSize={this.pageSize} country="in" category="business" />} />
              <Route exact path="/general" element={<News key="general" pageSize={this.pageSize} country="in" category="general" />} />
              <Route exact path="/health" element={<News key="health" pageSize={this.pageSize} country="in" category="health" />} />
              <Route exact path="/science" element={<News key="science" pageSize={this.pageSize} country="in" category="science" />} />
              <Route exact path="/sports" element={<News key="sports" pageSize={this.pageSize} country="in" category="sports" />} />
              <Route exact path="/technology" element={<News key="technology" pageSize={this.pageSize} country="in" category="technology" />} />
            </Routes>
          </Fragment>
        </Router>
      </div>
    );
  }
}
