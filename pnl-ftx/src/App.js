import React from "react";
import { Counter } from "./features/counter/Counter";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
