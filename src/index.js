import React from "react";
import ReactDOM from "react-dom";
import Image from "./Image";
import Link from "./Link";

import "./App.css";
import "./Link.css";

function App() {
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
              <h1>Tuesday, 15 March 2022</h1>
            </div>
            <div className="col-2">
              <h3>19:41</h3>
            </div>
          </div>
          <h2>Porto</h2>
          <h4>
            <div>Few Clouds</div>
            <div>Humidity: 19%</div>
            <div>Wind Speed: 2Km/h</div>
          </h4>
          <br />
          <div className="all">
            <div className="col">
              <div className="card-body">
                <img id="icon" src="" alt="" className="w-100" />
                <h5 className="card-title">Now</h5>
                <Image />
                <p className="card-text" id="color-temp">
                  <span id="temp"> </span> <span>°C</span>
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
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
