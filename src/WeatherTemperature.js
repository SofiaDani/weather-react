import React, { useState } from "react";
import "./WeatherTemperature.css";
export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        {" "}
        <span id="temp"> </span>{" "}
        <span id="degrees">
          {" "}
          {Math.round(props.celsius)}°C |{" "}
          <a id="fahrenheit" href="/" onClick={convertToFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        {" "}
        <span id="temp"> </span>{" "}
        <span id="degrees">
          {" "}
          {Math.round(fahrenheit)}{" "}
          <a id="celsius" href="/" onClick={convertToCelsius}>
            °C{" "}
          </a>
          | °F
        </span>
      </div>
    );
  }
}
