import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { Modal } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addCart, getCart } from "../../actions/cart";
import { getProducts } from "../../actions/products";

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
        <Modal show={this.state.show} handleClose={this.hideModal}>
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
        </Modal>
        <button type="button" onClick={this.showModal}>
          {this.props.product.name}
        </button>
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
