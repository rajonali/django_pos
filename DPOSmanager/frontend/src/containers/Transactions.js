import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { Button } from "react-bootstrap";

import { getTransactions } from "../actions/transactions";
import { deleteTransaction } from "../actions/transactions";

import Form from "./components/create-product-form";
import CurrentInventoryCard from "./components/current-inventory-card";
import TransactionsCard from "./components/transactions-card";

export class Transactions extends Component {
  static propTypes = {
    transactions: PropTypes.array.isRequired,
    getTransactions: PropTypes.func.isRequired,
    deleteTransaction: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getTransactions();
  }

  render() {
    return (
      <Fragment>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            paddingBottom: 20,
          }}
        >
          <Button className="btn-primary">Generate Report</Button>
        </div>
        <TransactionsCard transactions />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  transactions: state.transactions.transactions,
});

export default connect(mapStateToProps, { getTransactions, deleteTransaction })(
  Transactions
);
