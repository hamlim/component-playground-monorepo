import React from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <div className="App">
      <p>Welcome to the component playground repo</p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
