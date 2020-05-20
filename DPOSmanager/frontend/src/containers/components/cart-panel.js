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
      <div class="card" style={{ display: "flex" }}>
        <div
          style={{ display: "flex", flexDirection: "column" }}
          class="card-body"
        >
          {this.props.cart.map((cart_item) => (
            <div
              style={{
                display: "flex",
                paddingTop: 20,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <p>
                Item #{cart_item.id} => {cart_item.quantity} items @ $
                {cart_item.price}
              </p>
              <pre> </pre>
              <button onClick={this.props.deleteCart.bind(this, cart_item.id)}>
                remove
              </button>
            </div>
          ))}
          <br />
          <p>SUBTOTAL: $ {this.totalCart(this.props.cart)}</p>
          <p>TAX: $ {0.1 * this.totalCart(this.props.cart)}</p>
          <p>TOTAL: $ {1.1 * this.totalCart(this.props.cart)}</p>

          <TenderModal
            products={JSON.stringify(this.props.cart)}
            total={1.1 * this.totalCart(this.props.cart)}
            tax={0.1 * this.totalCart(this.props.cart)}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart.cart,
});

export default connect(mapStateToProps, { getCart, deleteCart })(CartPanel);
