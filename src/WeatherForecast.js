import React from "react";

import "./WeatherForecast.css";

export default function WeatherForecast() {
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
