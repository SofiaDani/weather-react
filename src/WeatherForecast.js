import axios from "axios";
import React from "react";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {}

  let apiKey = "ab71c92f5b2dc5177b732d5b87167782";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="col-2" id="forecast">
      <div class="container-row-cols-md-3">
        <h5 class="card-title">THU</h5>
        <img
          src="http://openweathermap.org/img/wn/10d@2x.png"
          alt="forecastIcon"
        />
        <div class="card-text">
          {" "}
          <span className="max-temperature"> 14ºC </span>
          <span className="min-temperature"> 4ºC </span>
        </div>
      </div>
    </div>
  );
}
