import React, { Component } from "react";
import NewsItem from "./NewsItem";
import "../style/News.css";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
export class News extends Component {
  // articles = [     using this just to test the news api data
  //   {
  //     source: {
  //       id: "news24",
  //       name: "News24",
  //     },
  //     author: "Kamva Somdyala",
  //     title:
  //       "Omicron Covid-19 variant claims Proteas ODI series against Netherlands",
  //     description:
  //       "CSA in conjunction with the Koninklijke Nederlandse Cricket Bond (KNCB) have resolve to postpone the ODI series between the Proteas and the Netherlands following the detection of the Omicron Covid-19 variant.",
  //     url: "https://www.news24.com/sport/Cricket/Proteas/omicron-covid-19-variant-claims-proteas-odi-series-against-netherlands-20211127",
  //     urlToImage:
  //       "https://cdn.24.co.za/files/Cms/General/d/657/d116c60c0aa44d03b18d9d87f9f99374.jpg",
  //     publishedAt: "2021-11-27T14:01:52+00:00",
  //     content:
  //       "Cricket South Africa (CSA) in conjunction with the Koninklijke Nederlandse Cricket Bond (KNCB) have resolve to hold the ODI series between the Proteas and the Netherlands which began on Friday in abe… [+2307 chars]",
  //   },
  //   {
  //     source: {
  //       id: "espn-cric-info",
  //       name: "ESPN Cric Info",
  //     },
  //     author: null,
  //     title:
  //       "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
  //     description:
  //       "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
  //     url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
  //     urlToImage:
  //       "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
  //     publishedAt: "2020-04-27T11:41:47Z",
  //     content:
  //       "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
  //   },
  //   {
  //     source: {
  //       id: "espn-cric-info",
  //       name: "ESPN Cric Info",
  //     },
  //     author: null,
  //     title:
  //       "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
  //     description:
  //       "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
  //     url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
  //     urlToImage:
  //       "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
  //     publishedAt: "2020-03-30T15:26:05Z",
  //     content:
  //       "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
  //   },
  // ];

  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    // console.log("Hello bitch");
    this.state = {
      articles: [], //initially articles is an empty array and we will fill it with the data from the api
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} - News`;
  }

  //?this is a fucntion created because code is repeated in the componentDidMount() handlePrev and handlenext click methodmethod
  async updateNews() {
    this.props.setProgress(20);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`; //*pagesize means how many articles you want to show on each page => we will use pagesize to determine the no. of pages we need
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json(); //*this is a promise => it gets the data in json format
    // console.log(parsedData);
    this.setState({
      articles: parsedData.articles, //*this is a promise => it gets our articles in json format
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    // *this runs after the component is rendered (it is lifecycle method) =>
    // first constructor runs, then render() and then componentDidMount()
    // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=535db306bb5d49d99c0ccb9c42b7d31d&page=1&pageSize=${this.props.pageSize}`  //*pagesize means how many articles you want to show on each page => we will use pagesize to determine the no. of pages we need
    // this.setState({loading: true});
    // let data = await fetch(url);
    // let parsedData = await data.json(); //*this is a promise => it gets the data in json format
    // console.log(parsedData);
    // this.setState({
    //   articles: parsedData.articles,  //*this is a promise => it gets our articles in json format
    //   totalResults : parsedData.totalResults,
    //   loading: false,
    // })
    this.updateNews();
  }
  //*next and prev are deleted so no need for these functions
  // handlePrevClick = async() => {
  //   // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=535db306bb5d49d99c0ccb9c42b7d31d&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
  //   // this.setState({loading: true});
  //   // let data = await fetch(url);
  //   // let parsedData = await data.json();

  //   // this.setState({
  //   //   page: this.state.page - 1,
  //   //   articles: parsedData.articles,
  //   //   loading: false,
  //   // })
  //   this.setState({page: this.state.page - 1});
  //   this.updateNews();
  // }

  // handleNextClick = async() => {
  //   // if(!(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
  //   // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=535db306bb5d49d99c0ccb9c42b7d31d&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
  //   // this.setState({loading: true});
  //   // let data = await fetch(url);
  //   // let parsedData = await data.json();
  //   // // console.log(parsedData);
  //   // this.setState({
  //   //   page: this.state.page + 1,
  //   //   articles: parsedData.articles,
  //   //   loading: false,
  //   // })
  //   this.setState({page: this.state.page + 1});
  //   this.updateNews();
  // }
  // *Fetch function to fetch mode data on infinite scroll
  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`; //*pagesize means how many articles you want to show on each page => we will use pagesize to determine the no. of pages we need
    // this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json(); //*this is a promise => it gets the data in json format
    // console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles), //*this is a promise => it gets our articles in json format
      totalResults: parsedData.totalResults,
      // loading: false,
    });
  };

  render() {
    return (
      <div className="container my-3">
        <h4 className="text-center my-3">
          Top {this.capitalizeFirstLetter(this.props.category)} Headlines{" "}
        </h4>
        {this.state.loading && <Spinner />}  
        {/* the above line is for top loading , when page is loaded */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="news-wrapper">
            {/* {!this.state.loading && this.state.articles.map((element) => { */}

            {this.state.articles.map((element) => {
              return (
                <div className="nitems-wrap" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 44) : ""} //*here we used ternary operator because if the title is null then we will get an error so we are setting the title such that when it is null we'll return an empty string so we get no error
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
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
        {/* <div class="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-info" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-danger" onClick={this.handleNextClick}>Next &rarr;</button>
        </div> */}
        {/* //*we dont need this above div because we deleted next and prev */}
      </div>
    );
  }
}

export default News;
