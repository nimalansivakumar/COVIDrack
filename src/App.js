import React from "react";
import "./App.css";
import "./api/Api";
import Navbar from "./components/Navbar";
import SearchCountry from "./components/SearchCountry";
import Cards from "./components/Cards";
import ChartAnime from "./components/Chart";
import { fetchData } from "./api/Api";
import TwitterLogo from "./images/twitter.png";
import GitHubLogo from "./images/logo.png";

class App extends React.Component {
  state = {
    data: {},
    country: "Global",
    mounted: false,
  };

  async componentDidMount() {
    var data = await fetchData(this.state.country);
    data = data.data;
    this.setState({ data, mounted: true });
  }

  handleCountryChange = async (country) => {
    const { data } = await fetchData(country);
    this.setState({ data, country });
  };

  render() {
    return (
      <div>
        <Navbar />
        <SearchCountry handleCountryChange={this.handleCountryChange} />
        <Cards
          data={this.state.mounted === true ? this.state : this.setState}
        />
        <ChartAnime data={this.state} />
        <footer>
          <div>
            <a href="https://twitter.com/Nimalan_">
              <img alt="Twitter" src={TwitterLogo}></img>
            </a>
            <a href="https://github.com/nimalansivakumar">
              <img alt="Github" src={GitHubLogo}></img>
            </a>
          </div>
          <p>Made by Nimalan with ❤️</p>
        </footer>
      </div>
    );
  }
}

export default App;
