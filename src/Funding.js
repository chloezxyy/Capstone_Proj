import React, { Component } from "react";
// import { url } from "inspector";
import FundingCard from "./components/Card";
import Navbar from "./Navbar";

class Funding extends Component {
  render() {
    var programs = ["a", "b", "c", "d", "e", "f", "g"].map(a => {
      return (
        <div className="col-4">
          <FundingCard title={a} />
          {/* */}
        </div>
      );
    });
    return (
      <div className="p-3">
        <Navbar></Navbar>
        <h1>Our programs:</h1>
        <div className="row">{programs}</div>
      </div>
    );
  }
}

export default Funding;
