import React, { Component } from "react";
import { Card, Button, ListGroup, Modal } from "react-bootstrap";
import { withRouter } from "react-router-dom";

class FundingCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
  }

  handleClose = () => {
    this.setState({ show: false });
  };

  handleOpen = () => {
    this.setState({ show: true });
  };

  render() {
    return (
      <div className="mb-3">
        <Card>
          <Card.Img
            variant="top"
            src="http://static.asiawebdirect.com/m/bangkok/portals/vietnam/homepage/pagePropertiesImage/vietnam.jpg.jpg"
          />
          <Card.Body>
            <Card.Title>
              <b>{this.props.title}</b>
            </Card.Title>
            <small>Vietnam</small>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <div>
                  <b>
                    <small>
                      <b>Collected</b>
                    </small>
                  </b>
                  <p>SGD 300</p>
                </div>
              </ListGroup.Item>
              <ListGroup.Item>
                <div className="row">
                  <div className="col-6">
                    <b>
                      <small>
                        <b>Yield</b>
                      </small>
                    </b>
                    <p>12%</p>
                  </div>
                  <div className="col-6">
                    <b>
                      <small>
                        <b>Tenor</b>
                      </small>
                    </b>
                    <p>6 m</p>
                  </div>
                </div>
              </ListGroup.Item>
              <ListGroup.Item>
                <b>
                  <small>
                    <b>Status</b>
                  </small>
                </b>
                <p>In Progress</p>
              </ListGroup.Item>
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
          <Modal.Body></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

// export default FundingCard;
export default withRouter(FundingCard);
