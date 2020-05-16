import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getProducts } from "../../actions/products";
import { deleteProduct } from "../../actions/products";

export class CurrentInventoryCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }
  static propTypes = {
    products: PropTypes.array.isRequired,
    getProducts: PropTypes.func.isRequired,
    deleteProduct: PropTypes.func.isRequired,
  };

  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 20) });
  }

  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    let FilteredProducts = this.props.products.filter((product) => {
      return product.name.indexOf(this.state.search) !== -1;
    });

    return (
      <Fragment>
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Current Inventory</h6>
          </div>
          <div class="card-body">
            <input
              type="text"
              value={this.state.search}
              onChange={this.updateSearch.bind(this)}
            />

            <div class="table-responsive">
              <table
                class="table table-bordered"
                id="dataTable"
                width="100%"
                cellspacing="0"
              >
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Category</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>SKU</th>
                    <th>Description</th>
                    <th>Unit Price</th>
                    <th>Created At</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>Image</th>
                    <th>Category</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>SKU</th>
                    <th>Description</th>
                    <th>Unit Price</th>
                    <th>Created At</th>
                  </tr>
                </tfoot>
                <tbody>
                  {FilteredProducts.map((product) => (
                    <tr key={product.id}>
                      <td>{product.image}</td>
                      <td>{product.category}</td>
                      <td>{product.name}</td>
                      <td>{product.quantity}</td>
                      <td>{product.price}</td>
                      <td>{product.sku}</td>
                      <td>{product.description}</td>
                      <td>{product.unit_price}</td>
                      <td>{product.created_at}</td>
                      <td>
                        <button
                          onClick={this.props.deleteProduct.bind(
                            this,
                            product.id
                          )}
                          className="btn btn-warning btn-sm"
                        >
                          MODIFY
                        </button>
                        <button
                          onClick={this.props.deleteProduct.bind(
                            this,
                            product.id
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
  products: state.products.products,
});

export default connect(mapStateToProps, { getProducts, deleteProduct })(
  CurrentInventoryCard
);
