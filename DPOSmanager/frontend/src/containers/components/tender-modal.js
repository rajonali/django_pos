import React, { Component, Fragment } from "react";
import { Modal } from "react-bootstrap";
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
          <label>TOTAL: </label>
          <p>{this.props.total}</p>
          <label>Cash: {this.state.cash}</label>
          <input
            onChange={this.myChangeHandlerCash}
            value={this.state.cash}
            type="number"
          ></input>
          <br />
          <label>Credit:</label>
          <input
            onChange={this.myChangeHandlerCredit}
            value={this.state.credit}
            type="number"
          ></input>
          <label>Change:</label>
          <div>{this.state.cash + this.state.credit - this.props.total}</div>
          <button onClick={this.finalizeTransaction}>FINALIZE SALE</button>
        </Modal>
        <button onClick={this.showModal}>Tender</button>
      </Fragment>
    );
  }
}

export default connect(null, { addTransaction })(TenderModal);
