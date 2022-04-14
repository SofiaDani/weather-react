import React, { useState } from "react";
import ReactDOM from "react-dom";
import Link from "./Link";
import axios from "axios";

import "./App.css";
import "./Link.css";

export default function App() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: "Tuesday, 15 March 2022",
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="container" id="weatherMain">
          <div className="weatherApp">
            <form className="colAuto">
              <div className="row">
                <div className="offset-1 col-9">
                  <input
                    id="input-text"
                    type="text"
                    className="form-label form-control"
                    placeholder="Enter city"
                    autoComplete="off"
                    autoFocus="on"
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
            <div className="row">
              <div className="offset-1 col-9">
                <h1>{weatherData.date}</h1>
              </div>
              <div className="col-2">
                <h3>19:41</h3>
              </div>
            </div>
            <h2>{weatherData.city}</h2>
            <h4>
              <div>{weatherData.description}</div>
              <div className="text-capitalize">
                Humidity: {weatherData.humidity} %
              </div>
              <div>Wind Speed: {weatherData.wind} km/h</div>
            </h4>
            <br />
            <div className="all">
              <div className="col">
                <div className="card-body">
                  <img id="icon" src="" alt="" className="w-100" />
                  <h5 className="card-title">Now</h5>
                  <div>
                    <img src={weatherData.iconUrl} alt="Weather Description" />
                  </div>
                  <p className="card-text" id="color-temp">
                    <span id="temp"> </span>{" "}
                    <span id="degrees">
                      {" "}
                      {Math.round(weatherData.temperature)}°C
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col" id="forecast"></div>
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
