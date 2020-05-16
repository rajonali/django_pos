import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getTransactions } from "../../actions/transactions";
import { deleteTransaction } from "../../actions/transactions";

export class TransactionsCard extends Component {
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
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Transaction Log</h6>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table
                class="table table-bordered"
                id="dataTable"
                width="100%"
                cellspacing="0"
              >
                <thead>
                  <tr>
                    <th>Products</th>
                    <th>Total</th>
                    <th>Tax</th>
                    <th>Employee</th>
                    <th>Created At</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>Products</th>
                    <th>Total</th>
                    <th>Tax</th>
                    <th>Employee</th>
                    <th>Created At</th>
                  </tr>
                </tfoot>
                <tbody>
                  {this.props.transactions.map((transaction) => (
                    <tr key={transaction.id}>
                      <td>{transaction.product_array}</td>
                      <td>{transaction.total}</td>
                      <td>{transaction.tax}</td>
                      <td>{transaction.employee}</td>
                      <td>{transaction.created_at}</td>
                      <td>
                        <button
                          onClick={this.props.deleteTransaction.bind(
                            this,
                            transaction.id
                          )}
                          className="btn btn-warning btn-sm"
                        >
                          MODIFY
                        </button>
                        <button
                          onClick={this.props.deleteTransaction.bind(
                            this,
                            transaction.id
                          )}
                          className="btn btn-danger btn-sm"
                          style={{
                            marginLeft: 20,
                          }}
                        >
                          DELETE
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  transactions: state.transactions.transactions,
});

export default connect(mapStateToProps, {
  getTransactions,
  deleteTransaction,
})(TransactionsCard);
