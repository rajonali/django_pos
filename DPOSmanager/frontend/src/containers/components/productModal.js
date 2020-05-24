import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addCart, getCart } from "../../actions/cart";
import { getProducts } from "../../actions/products";
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";

class ProductModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      quantity: 0,
      cart: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  static propTypes = {};

  state = {
    show: false,
    id: "",
  };

  componentDidMount() {
    this.props.getProducts();
    this.props.getCart();
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  onChange = (event) => this.setState({ value: event.target.value });

  handleSubmit(event) {
    event.preventDefault();
    //this.setState({ value: event.target.value });
    console.log(this.state.value);
    var newObj = {
      id: this.props.product.id,
      quantity: this.state.value,
      price: this.props.product.price,
      total: this.props.product.price * this.state.value,
      category: this.props.product.category,
    };
    console.log(newObj);
    this.props.addCart(newObj);
    this.hideModal();
  }

  /*  onChange = (e) => this.setState({ quantity: e.target.value }); */

  addToCart = (id, price, quantity) => {
    var total = quantity * price;
    var product2 = { quantity, price, total };
    console.log(product2);
  };

  render() {
    const { myq } = this.state;
    return (
      <Fragment>
        <Modal
          show={this.state.show}
          handleClose={this.hideModal}
          style={{ display: "flex", width: "100%" }}
        >
          <div class="card" style={{ display: "flex", width: "100%" }}>
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
                  Add to Cart
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
              <p>ID: {this.props.product.id}</p>
              <p>Name: {this.props.product.name}</p>
              <p>Description: {this.props.product.description}</p>
              <p>Quantity: {this.props.product.quantity}</p>
              <p>Price: {this.props.product.price}</p>

              <form onSubmit={this.handleSubmit}>
                <button> - </button>{" "}
                <input
                  onChange={this.onChange}
                  type="number"
                  ref={(el) => (this.element = el)}
                  value={this.state.value}
                />{" "}
                <button> + </button>
                <input type="submit" value="Submit" />
              </form>
            </div>
          </div>
        </Modal>
        <div onClick={this.showModal}>
          <center>{this.props.product.name}</center>
          <center>${this.props.product.price}</center>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart.cart,
});

export default connect(mapStateToProps, { addCart, getCart, getProducts })(
  ProductModal
);
