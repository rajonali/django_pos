import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getProducts } from "../actions/products";
import ProductModal from "./components/productModal";
import CartPanel from "./components/cart-panel";

export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }
  static propTypes = {
    products: PropTypes.array.isRequired,
    getProducts: PropTypes.func.isRequired,
  };

  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 20) });
  }

  componentDidMount() {
    this.props.getProducts();
  }

  onClick() {
    return;
  }

  render() {
    let FilteredProducts = this.props.products.filter((product) => {
      return product.name.indexOf(this.state.search) !== -1;
    });

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <CartPanel />
        <div class="card">
          <div class="card-body">
            <input
              type="text"
              class="form-control bg-light border-0 small"
              aria-label="Search"
              placeholder="Search product"
              aria-describedby="basic-addon2"
              value={this.state.search}
              onChange={this.updateSearch.bind(this)}
            />

            <br />
            <div>
              {FilteredProducts.map((product) => (
                <div style={{ outline: "0.5px solid black", padding: 10 }}>
                  <ProductModal
                    product={product}
                    onClick={this.onClick(product.id)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products.products,
});

export default connect(mapStateToProps, { getProducts })(Dashboard);
