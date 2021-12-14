import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import "../style/News.css";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
function News(props) {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  
  const updateNews = async () => {
    props.setProgress(20);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`; //*pagesize means how many articles you want to show on each page => we will use pagesize to determine the no. of pages we need

    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json(); //*this is a promise => it gets the data in json format
    // console.log(parsedData);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);

    props.setProgress(100);
  };

  useEffect(() => {
    updateNews();
    document.title = `${capitalizeFirstLetter(props.category)} - News`;
    //eslint-disable-next-line
  }, []);

 
  // *Fetch function to fetch mode data on infinite scroll
  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`; //*pagesize means how many articles you want to show on each page => we will use pagesize to determine the no. of pages we need
    
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json(); //*this is a promise => it gets the data in json format
    
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  return (
    <div className="container my-3">
      <h4 className="text-center my-3" style={{ paddingTop: "70px" }}>
        Top {capitalizeFirstLetter(props.category)} Headlines{" "}
      </h4>
      {loading && <Spinner />}
      {/* the above line is for top loading , when page is loaded */}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="news-wrapper">
        

          {articles.map((element) => {
            return (
              <div className="nitems-wrap" key={element.url}>
                <NewsItem
                  title={element.title ? element.title : ""} //*here we used ternary operator because if the title is null then we will get an error so we are setting the title such that when it is null we'll return an empty string so we get no error
                  description={element.description ? element.description : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>
      </InfiniteScroll>
      
      
    </div>
  );
}

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
