import React, { Component, Fragment } from "react";
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";
import { addTransaction } from "../../actions/transactions";
import { deleteCart } from "../../actions/cart";
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
    //console.log(this.props.productsv2[0].id);
    //console.log(this.props.productsv2.length);
    console.log(this.props.productsv2);
    for (var i = 0; i < this.props.productsv2.length; i++) {
      this.props.deleteCart(this.props.productsv2[i].id);
    }
    this.hideModal();
  };

  render() {
    const { cash, credit } = this.state;
    return (
      <Fragment>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <div class="card">
            <div
              class="card-header"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                padding: "10px",
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    display: "flex",
                    alignSelf: "center",
                    justifyContent: "center",
                  }}
                >
                  Finalize Transaction
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <span onClick={this.hideModal.bind(this)}>X</span>
              </div>
            </div>

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
              <div>
                {(
                  parseFloat(this.state.cash) - parseFloat(this.props.total)
                ).toFixed(2)}
              </div>
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

export default connect(null, { addTransaction, deleteCart })(TenderModal);
