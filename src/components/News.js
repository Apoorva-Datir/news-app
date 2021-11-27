import React, { Component } from "react";
import NewsItem from "./NewsItem";
import "../style/News.css";

export class News extends Component {
  render() {
    return (
      <div className="container my-3">
          <h4>News Items Today!</h4>
        <div className="news-wrapper">
          <NewsItem title="myTitle" description="myDesc" />
          <NewsItem title="myTitle" description="myDesc" />
          <NewsItem title="myTitle" description="myDesc" />
          <NewsItem title="myTitle" description="myDesc" />
          <NewsItem title="myTitle" description="myDesc" />
          <NewsItem title="myTitle" description="myDesc" />
          <NewsItem title="myTitle" description="myDesc" />
          <NewsItem title="myTitle" description="myDesc" />
          <NewsItem title="myTitle" description="myDesc" />
          
        </div>
      </div>
    );
  }
}

export default News;
