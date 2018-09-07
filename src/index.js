import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="item">
          <img src="https://via.placeholder.com/100x100" />
        </div>
        <div className="item">
          <img src="https://via.placeholder.com/100x100" />
        </div>
        <div className="item">
          <img src="https://via.placeholder.com/100x100" />
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
