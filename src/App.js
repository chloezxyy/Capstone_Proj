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
import WorkflowPage from "./WorkflowPage";
import Navbar from "./Navbar";
import P1 from "./WorkflowPages/P1";
import P2 from "./WorkflowPages/P2";
import P3 from "./WorkflowPages/P3";
import P4 from "./WorkflowPages/P4";
import P5 from "./WorkflowPages/P5";

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
          <Route path="/workflow" component={WorkflowPage} exact />
          <Route path="/workflow/1" component={P1} exact />
          <Route path="/workflow/2" component={P2} exact />
          <Route path="/workflow/3" component={P3} exact />
          <Route path="/workflow/4" component={P4} exact />
          <Route path="/workflow/5" component={P5} exact />
          <Route path="/navbar" component={Navbar} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
