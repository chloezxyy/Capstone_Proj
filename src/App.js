import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Homepage from "./Homepage";
import Funding from "./Funding";
import FundCard from "./components/Card";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>

    //   </header>
    // </div>
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/invest" component={Funding} />
          <Route path="/card" component={FundCard} exact />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
