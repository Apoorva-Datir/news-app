import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";

import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //!In react-router-dom v6, "Switch" is replaced by routes "Routes".
//! we also need to change the route declaration to => <Route path='/welcome' element={<Home/>} />

export default class App extends Component {
  // c="Apoorva";
  pageSize = 12;
  apiKey = process.env.REACT_APP_NEWS_API;  //to hide API key => //*.env.local is in gitignore so others cant access it
  state = {
    progress: 0
  }
  setProgress=(progress)=> {
    this.setState({ progress: progress });
  }
  render() {
    return (
      <div>
        {/* Hello My First Class based component {this.c} */}
        {/* even after using router, our news component don't get mounted agin and again even if we switch between different categories
        so we have to give then a uniwue key prop so that react knows that this is a unique value and we have to remount or
        change the news component to show category wise news */}
        <Router>
          <Fragment>
            {" "}
            {/* Fragments are basically used to return multiple elements, you can also use short syntax like <> </> opening and closing brackets insted of using fragmnts   */}
            <Navbar />
            {/* Top Loading Bar */}
            <LoadingBar color="#f11946" progress={this.state.progress} />
            <Routes>
              <Route
                exact
                path="/home"
                element={
                  <News
                    setProgress={this.setProgress}
                    apiKey={this.apiKey}
                    key="general"
                    pageSize={this.pageSize}
                    country="in"
                    category="general"
                  />
                }
              />
              <Route
                exact
                path="/entertainment"
                element={
                  <News
                    setProgress={this.setProgress}
                    apiKey={this.apiKey}
                    key="entertainment"
                    pageSize={this.pageSize}
                    country="in"
                    category="entertainment"
                  />
                }
              />
              <Route
                exact
                path="/business"
                element={
                  <News
                    setProgress={this.setProgress}
                    apiKey={this.apiKey}
                    key="business"
                    pageSize={this.pageSize}
                    country="in"
                    category="business"
                  />
                }
              />
              <Route
                exact
                path="/general"
                element={
                  <News
                    setProgress={this.setProgress}
                    apiKey={this.apiKey}
                    key="general"
                    pageSize={this.pageSize}
                    country="in"
                    category="general"
                  />
                }
              />
              <Route
                exact
                path="/health"
                element={
                  <News
                    setProgress={this.setProgress}
                    apiKey={this.apiKey}
                    key="health"
                    pageSize={this.pageSize}
                    country="in"
                    category="health"
                  />
                }
              />
              <Route
                exact
                path="/science"
                element={
                  <News
                    setProgress={this.setProgress}
                    apiKey={this.apiKey}
                    key="science"
                    pageSize={this.pageSize}
                    country="in"
                    category="science"
                  />
                }
              />
              <Route
                exact
                path="/sports"
                element={
                  <News
                    setProgress={this.setProgress}
                   apiKey={this.apiKey}
                    key="sports"
                    pageSize={this.pageSize}
                    country="in"
                    category="sports"
                  />
                }
              />
              <Route
                exact
                path="/technology"
                element={
                  <News
                    setProgress={this.setProgress}
                    apiKey={this.apiKey}
                    key="technology"
                    pageSize={this.pageSize}
                    country="in"
                    category="technology"
                  />
                }
              />
            </Routes>
          </Fragment>
        </Router>
      </div>
    );
  }
}
