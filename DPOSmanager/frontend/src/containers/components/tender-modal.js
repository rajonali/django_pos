import React, { Component, Fragment } from "react";
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";
import { addTransaction } from "../../actions/transactions";
import { connect } from "react-redux";

class TenderModal extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false, cash: 0, credit: 0 };
    this.myChangeHandlerCash = this.myChangeHandlerCash.bind(this);
    this.myChangeHandlerCredit = this.myChangeHandlerCredit.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  myChangeHandlerCredit = (event) => {
    this.setState({ credit: event.target.value });
  };

  myChangeHandlerCash = (event) => {
    this.setState({ cash: event.target.value });
  };

  finalizeTransaction = (transaction) => {
    const { products, total, tax } = this.props;
    const trans = {
      products,
      total,
      tax,
    };

    this.props.addTransaction(trans);
    this.hideModal();
  };

  render() {
    const { cash, credit } = this.state;
    return (
      <Fragment>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <div class="card">
            <div class="card-body">
              <h5>
                <strong>TOTAL: </strong>
              </h5>
              <center>
                <h1>${this.props.total.toFixed(2)}</h1>
              </center>
              <InputGroup className="sm-3">
                <InputGroup.Prepend>
                  <InputGroup.Text>$</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  onChange={this.myChangeHandlerCash}
                  value={this.state.cash}
                  aria-label="Amount (to the nearest dollar)"
                />
                <InputGroup.Append>
                  <InputGroup.Text>.00</InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>

              <br />

              <br />
              <label>
                <strong>Change:</strong>
              </label>
              <div>{(this.state.cash - this.props.total).toFixed(2)}</div>
              <br />
              <Button
                variant="success"
                style={{ width: "100%" }}
                onClick={this.finalizeTransaction}
              >
                FINALIZE SALE
              </Button>
            </div>
          </div>
        </Modal>
        <Button
          style={{ flex: "display", width: "100%" }}
          onClick={this.showModal}
        >
          <strong>Tender</strong>
        </Button>
      </Fragment>
    );
  }
}

export default connect(null, { addTransaction })(TenderModal);
