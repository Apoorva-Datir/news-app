import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";

import React, { useState, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //!In react-router-dom v6, "Switch" is replaced by routes "Routes".
//! we also need to change the route declaration to => <Route path='/welcome' element={<Home/>} />

function App() {
  // c="Apoorva";
  const pageSize = 12;
  const apiKey = process.env.REACT_APP_NEWS_API; //to hide API key 
  const [progress, setProgress] = useState(0);
  
  
  // setProgress(progress);
  
    return (
      <div>
       
        <Router>
          <Fragment>
          
           
            <Navbar />
            {/* Top Loading Bar */}
            <LoadingBar color="#f11946" progress={progress} />
            <Routes>
             
              <Route
                exact
                path="/entertainment"
                element={
                  <News
                    setProgress={setProgress}
                    apiKey={apiKey}
                    key="entertainment"
                    pageSize={pageSize}
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
                    setProgress={setProgress}
                    apiKey={apiKey}
                    key="business"
                    pageSize={pageSize}
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
                    setProgress={setProgress}
                    apiKey={apiKey}
                    key="general"
                    pageSize={pageSize}
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
                    setProgress={setProgress}
                    apiKey={apiKey}
                    key="health"
                    pageSize={pageSize}
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
                    setProgress={setProgress}
                    apiKey={apiKey}
                    key="science"
                    pageSize={pageSize}
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
                    setProgress={setProgress}
                    apiKey={apiKey}
                    key="sports"
                    pageSize={pageSize}
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
                    setProgress={setProgress}
                    apiKey={apiKey}
                    key="technology"
                    pageSize={pageSize}
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
export default App;
