import React, { Component } from "react";
import "../style/NewsItem.css";


export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props; //*This is destructuring
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
              opacity:'0.8'
            }}
          >
            <span className="badge rounded-pill bg-danger">{source} </span>
          </div>

          <img
            src={
              !imageUrl
                ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQsq1NacYKHKS-RudSBgbLZa_ndkD-lmmQfA&usqp=CAU"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {!description
                ? "Click on Read more to read the complete news article"
                : description}
              ...
            </p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}{" "}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
