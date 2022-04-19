import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedHours from "./FormattedHours";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="offset-1 col-9">
          <h1>
            <FormattedDate date={props.data.date} />
          </h1>
        </div>
        <div className="col-2">
          <h3>
            <FormattedHours date={props.data.date} />
          </h3>
        </div>
      </div>
      <h2> {props.data.city}</h2>
      <h4>
        <div>{props.data.description}</div>
        <div className="text-capitalize">Humidity: {props.data.humidity} %</div>
        <div>Wind Speed: {Math.round(props.data.wind)} km/h</div>
      </h4>
      <br />
      <div className="all">
        <div className="col">
          <div className="card-body">
            <img id="icon" src="" alt="" className="w-100" />
            <h5 className="card-title">Now</h5>
            <div>
              <img src={props.data.iconUrl} alt="Weather Description" />
            </div>
            <p className="card-text" id="color-temp">
              <WeatherTemperature celsius={props.data.temperature} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
