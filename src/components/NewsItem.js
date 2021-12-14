
import React from "react";
import "../style/NewsItem.css";

function NewsItem(props) {
  
    let { title, description, imageUrl, newsUrl, author, date, source } = props; //*This is destructuring
    return (
      <div>
        <div className="card" style={{ width: "18rem" , borderRadius:"10px",boxShadow:'0 2px 20px rgba(0, 0, 0, 0.2)',overflow:'hidden',margin:'10px',}}>
         
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
            <span className="tag tag-purple">{source}</span>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {!description
                ? "Click on Read more to read the complete news article"
                : description}
              ...
            </p>
            
            <div className="user">
              <div className="user-info">
                <p><b>By {!author ? "Unknown" : author}</b></p>
                <small>Date : {new Date(date).toGMTString()}{" "}</small>
              </div>
            </div>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
              style={{ marginTop: "10px" }}
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;
