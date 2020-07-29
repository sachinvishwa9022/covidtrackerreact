import React, { Component } from "react";
import "./App.css";
import styles from "./App.module.css";
import coronaImage from "./images/logo.png";

import { Cards, Chart, CountryPicker } from "./components";
import { fetchData } from "./api";
class App extends Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }
  countryChangeHandler = async (country) => {
    console.log(country);
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };
  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img src={coronaImage} className={styles.image} alt="Covid-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.countryChangeHandler} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
