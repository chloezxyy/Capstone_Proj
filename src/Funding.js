import React, { Component } from "react";
// import { url } from "inspector";
import FundCard from "./components/Card";

class Funding extends Component {
  render() {
    return (
      <div className="p-3">
        <h1>Our programs:</h1>
        <div className="row">
          <FundCard />
          {/* <div className="col-3 card" style={{ width: "18rem" }}>
            <img
              src="https://greencoast.org/wp-content/uploads/2019/02/Eco-Worthy-Review-and-Buying-Guide-1024x524.jpg"
              className="card-img-top"
            />
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Solar Panel 1</li>
                <li className="list-group-item">
                  <p>Collected</p>
                  <p>SGD 1000</p>
                </li>
                <li className="list-group-item">
                  <p>tenor</p>
                  <p>6 months</p>
                </li>
                <li className="list-group-item">
                  <p>Status</p>
                  <p>In progress</p>
                </li>
                <p>yields</p>

                <p>Closed</p>
              </ul>
            </div>
          </div>
          <div className="col-3 card">
            <img
              style={{ height: "200px" }}
              src="https://www.sciencealert.com/images/2019-06/processed/hmm-solar_600.jpg"
              // className="img-fluid border border-dark"
            />
            <p>Solar Panel 1</p>
            <p>Collected</p>
            <p>SGD 1000</p>
            <p>yields</p>
            <p>yields</p>
            <p>tenor</p>
            <p>6 months</p>
            <p>Status</p>
            <p>In progress</p>
            <p>Closed</p>
          </div> */}
        </div>
      </div>
    );
  }
}

export default Funding;
