import React, { Component } from "react";
// import { url } from "inspector";
import FundingCard from "./components/Card";

class Funding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      programs: []
    };
  }
  componentDidMount() {
    fetch("http://localhost:3001/api/all_programs", {
      method: "get",
      mode: "cors"
    })
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        this.setState({ programs: data });
      });
  }
  render() {
    var programs = this.state.programs.map((data, i) => {
      return (
        <div className="col-md-4 col-sm-6" key={i}>
          <FundingCard
            img={data.img}
            title={data.name}
            collected={data.collected}
            loc={data.location}
            country={data.country}
            yield={data.yield}
            status={data.status}
          />
          {/* */}
        </div>
      );
    });
    return (
      <div className="p-3">
        <h1>Our programs:</h1>
        <div className="row">{programs}</div>
      </div>
    );
  }
}

export default Funding;
