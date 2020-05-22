import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { getProducts } from "../actions/products";
import { deleteProduct } from "../actions/products";
import Form from "./components/create-product-form";
import CurrentInventoryCard from "./components/current-inventory-card";

export class Products extends Component {
  static propTypes = {
    products: PropTypes.array.isRequired,
    getProducts: PropTypes.func.isRequired,
    deleteProduct: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getProducts();
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
          <Form />
        </div>
        <CurrentInventoryCard products />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products.products,
});

export default connect(mapStateToProps, { getProducts, deleteProduct })(
  Products
);
