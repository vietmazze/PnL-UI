import React from "react";
import "./App.css";
import Home from "./components/pages/Home";
import Navbar from "./components/Navbar";
import PnL from "./components/PnL";
import Planner from "./components/pages/Planner";
import Pomodoro from "./components/plannerComponents/plannerPomo"
import {TimeProvider} from "./components/plannerComponents/pomodoro/TimerProvider"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <TimeProvider><Route path="/pomo" exact component={Pomodoro} /></TimeProvider>
          
          <Route path="/pnl" exact component={PnL} />
          <TimeProvider><Route path="/planner" exact component={Planner} /></TimeProvider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
