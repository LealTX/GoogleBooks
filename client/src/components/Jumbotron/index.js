import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 200, clear: "both", paddingTop: 90, textAlign: "center" }}
      className="jumbotron"
    >
    <h1>Google Book Search</h1>
      {children}
    </div>
  );
}

export default Jumbotron;
