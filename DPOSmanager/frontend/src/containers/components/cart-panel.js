import React, { Component } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";

import { getCart, deleteCart } from "../../actions/cart";

import TenderModal from "./tender-modal";
class CartPanel extends Component {
  static PropTypes = {};

  componentDidMount() {
    this.props.getCart();
  }

  state = { total: 0 };

  totalCart(object) {
    var total = 0;

    for (var key in object) {
      if (object.hasOwnProperty(key)) {
        total += object[key]["total"];
      }
    }

    return total;
  }

  render() {
    return (
      <div style={{ display: "flex", width: "35%" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div class="card">
            <table class="table">
              <thead class="card-header">
                <tr>
                  <th scope="col">Item #</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody class="card-body">
                {this.props.cart.map((cart) => (
                  <tr>
                    <td>{cart.id}</td>
                    <td>{cart.quantity}</td>
                    <td>${cart.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <br />
          <div class="card">
            <div class="card-body">
              <h4>
                <strong>
                  SUBTOTAL: $ {this.totalCart(this.props.cart).toFixed(2)}
                </strong>
              </h4>
              <h5>
                + TAX: $ {(0.1 * this.totalCart(this.props.cart)).toFixed(2)}
              </h5>
              <h5>
                = TOTAL: $ {(1.1 * this.totalCart(this.props.cart)).toFixed(2)}
              </h5>
              <TenderModal
                productsv2={this.props.cart}
                products={JSON.stringify(this.props.cart)}
                total={1.1 * this.totalCart(this.props.cart)}
                tax={0.1 * this.totalCart(this.props.cart)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart.cart,
});

export default connect(mapStateToProps, { getCart, deleteCart })(CartPanel);
