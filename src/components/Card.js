import React, { Component } from "react";
import { Card, Button, ListGroup, Modal, Form } from "react-bootstrap";
import { withRouter } from "react-router-dom";

class FundingCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      invest_amount: 0,
      invested: 0
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleInvest = this.handleInvest.bind(this);
  }

  handleClose = () => {
    this.setState(prevState => ({ ...prevState, show: false }));
  };

  handleOpen = () => {
    this.setState(prevState => ({ ...prevState, show: true }));
  };

  handleInvest = ref => {
    console.log(ref);
    // this.setState(prevState => ({ ...prevState }));
  };

  render() {
    const handleSubmit = event => {
      event.preventDefault();
      const data = event.target;
      console.log(data[0]);
      fetch("http://localhost:3001/api/submit", {
        method: "POST",
        body: event
      });
    };
    return (
      <div className="mb-3">
        <Card>
          <Card.Img variant="top" src={this.props.img} />
          <Card.Body>
            <Card.Title>
              <b>{this.props.title}</b>
            </Card.Title>
            <small>
              {this.props.loc}, {this.props.country}
            </small>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <div className="text-center">
                  <b>
                    <small>
                      <b>Collected</b>
                    </small>
                  </b>
                  <p>SGD {this.props.collected}</p>
                </div>
              </ListGroup.Item>
              <ListGroup.Item>
                <div className="row">
                  <div className="col-6">
                    <b>
                      <small>
                        <b>Yields (p.a)</b>
                      </small>
                    </b>
                    <p>{this.props.yield}%</p>
                  </div>
                  <div className="col-6">
                    <b>
                      <small>
                        <b>Status</b>
                      </small>
                    </b>
                    <p>{this.props.status}</p>
                  </div>
                </div>
              </ListGroup.Item>
              <ListGroup.Item></ListGroup.Item>
              <Button variant="primary" onClick={this.handleOpen}>
                Invest
              </Button>
            </ListGroup>
          </Card.Body>
        </Card>
        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          animation={false}
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>
                  Amount Invested: SGD {this.state.invested}
                </Form.Label>
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Investment Amount</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter amount (in SGD)"
                  onChange={this.handleAmount}
                />
                {/* <Form.Text className="text-muted">
                  You will be investing SGD {this.state.invest_amount * 10}.
                </Form.Text> */}
              </Form.Group>

              {/* <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group> */}
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleInvest}>
              Invest
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

// export default FundingCard;
export default withRouter(FundingCard);
