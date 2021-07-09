import React, { Component } from "react";
import NewSingle from "../news/NewSingle";

class Science extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      categoria: "science"
    };
  }

  componentDidMount(props) {
    const url =
      "https://newsapi.org/v2/top-headlines?country="+this.props.lingua+"&category="+this.state.categoria+"&apiKey=118fe7e93690417897d8cd2e5bf4874e";

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState(() => {
         return {
             news: data.articles
         }
        });
      })
      .catch((error) => console.log(error));
  }

  renderItem() {
    return this.state.news.map((item) => (
      <NewSingle key={item.url} item={item} />
    ));
  }
  render() {
    return <div className="container"> {this.renderItem()} </div>;
  }
}

export default Science;
