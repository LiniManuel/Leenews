import React, { Component } from "react";
import NewSingle from "./NewSingle";
import Dropdown from "react-bootstrap/Dropdown";
import IT from "../images/italy_flags_flag_17018.png";
import USA from "../images/united_states_flags_flag_17080.png";
import UK from "../images/united_kingdom_flags_flag_17079.png";
import ESP from "../images/spain_flags_flag_17068.png";
import CAN from "../images/canada_flags_flag_16983.png";
import GER from "../images/germany_flags_flag_17001.png";
import FRA from "../images/france_flags_flag_16999.png";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      categoria: "sports",
    };
  }

  componentDidMount(props) {
    console.log(this.props.lingua);
    const url =
      "https://newsapi.org/v2/top-headlines?country=" +
      this.props.lingua +
      "&category=" +
      this.state.categoria +
      "&apiKey=118fe7e93690417897d8cd2e5bf4874e";

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          news: data.articles,
        });
      })
      .catch((error) => console.log(error));
  }

  handleChange = (e) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        country: e.target.name,
      };
    });
  };

  renderItem() {
    return this.state.news.map((item) => (
      <NewSingle key={item.url} item={item} />
    ));
  }
  render() {
    return <div className="container"> {this.renderItem()} </div>;
  }
}

export default News;
