import React, { useState } from "react";
import ReactDOM from "react-dom";
import Link from "./Link";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

import "./App.css";
import "./Link.css";

export default function App() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState();

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png",
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleCityChange(event) {}

  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="container" id="weatherMain">
          <div className="weatherApp">
            <form className="colAuto" onSubmit={handleSubmit}>
              <div className="row">
                <div className="offset-1 col-9">
                  <input
                    id="input-text"
                    type="text"
                    className="form-label form-control"
                    placeholder="Enter city"
                    autoComplete="off"
                    autoFocus="on"
                    onChange={handleCityChange}
                  />
                </div>
                <div className="col-2">
                  <button
                    type="submit"
                    className="btn btn-warning"
                    id="search-button"
                  >
                    SEARCH
                  </button>
                </div>
              </div>
            </form>
            <WeatherInfo data={weatherData} />
          </div>
        </div>
        <Link />
      </div>
    );
  } else {
    const apiKey = "ab71c92f5b2dc5177b732d5b87167782";
    let city = "London";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
