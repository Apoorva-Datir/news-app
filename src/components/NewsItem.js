import React, { Component } from "react";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";

export class NewsItem extends Component {
  render() {
    let { title, description } = this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
          <img src="https://images.mktw.net/im-429485/social" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}
            </p>
            <a href="/newsItem" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
