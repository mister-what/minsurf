import React, { Component } from "react";
import logo from "./logo.svg";
import ThreeContainer from "./SceneSubject.js";
import math from "mathjs";

function vertices(bound, inner) {
  var vert = [bound, inner];
  return vert;
}
function boundary() {
  var anz = 4;
  var bound = math.ones(anz, 3);
  for (var i = 1; i <= anz; i++) {
    bound.set([i - 1, 0], math.cos(math.pi * 2 * i / anz));
    bound.set([i - 1, 1], math.sin(math.pi * 2 * i / anz));
    bound.set([i - 1, 2], 0);
  }
  return bound;
}
function mesh() {
  var anz = 4;
  var innerPoints = math.ones(anz, 3);
  for (var k = 1; k <= anz; k++) {
    innerPoints.set([k - 1, 0], 0.5 * math.cos(math.pi * 2 * k / anz));
    innerPoints.set([k - 1, 1], 0.5 * math.sin(math.pi * 2 * k / anz));
    innerPoints.set([k - 1, 2], math.pow(-1, k));
  }
  return innerPoints;
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ThreeContainer />
        <p className="App-intro">
          {JSON.stringify(boundary())}.
          {JSON.stringify(mesh())}
          {JSON.stringify(vertices(boundary(), mesh()))}
        </p>
      </div>
    );
  }
}

export default App;
