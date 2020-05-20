import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { addProduct } from "../../actions/products";

export class Form extends Component {
  state = {
    image: "",
    category: "food",
    name: "",
    price: "",
    sku: "",
    description: "",
    unit_price: "",
  };

  static PropTypes = {
    addProduct: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  onSubmit = (e) => {
    e.preventDefault();
    console.log("submit");

    const {
      image,
      category,
      name,
      quantity,
      price,
      sku,
      description,
      unit_price,
    } = this.state;
    const product = {
      image,
      category,
      name,
      quantity,
      price,
      sku,
      description,
      unit_price,
    };
    this.props.addProduct(product);
  };

  handleChange = (e) => {
    this.setState({ category: e.target.value });
  };

  render() {
    const {
      image,
      category,
      name,
      quantity,
      price,
      sku,
      description,
      unit_price,
    } = this.state;
    return (
      <Fragment>
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Create Product</h6>
          </div>
          <div class="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  onChange={this.onChange}
                  value={name}
                ></input>
              </div>

              <div className="form-group">
                <label>Quantity</label>
                <input
                  className="form-control"
                  type="number"
                  name="quantity"
                  onChange={this.onChange}
                  value={quantity}
                ></input>
              </div>

              <div className="form-group">
                <label>Price</label>
                <input
                  className="form-control"
                  type="number"
                  name="price"
                  onChange={this.onChange}
                  value={price}
                ></input>
              </div>

              <div className="form-group">
                <label>Description</label>
                <input
                  className="form-control"
                  type="text"
                  name="description"
                  onChange={this.onChange}
                  value={description}
                ></input>
              </div>

              <div className="form-group">
                <label>Category</label>
                <br />

                <select
                  value={this.state.selectValue}
                  onChange={this.handleChange}
                >
                  <option name="category" value="food">
                    Food
                  </option>
                  <option name="category" value="drink">
                    Drink
                  </option>
                  <option name="category" value="alcohol">
                    Alcohol
                  </option>
                  <option name="category" value="tobacco">
                    Tobacco
                  </option>
                  <option name="category" value="phone_card">
                    Phone Card
                  </option>
                </select>
              </div>

              <div className="form-group">
                <label>SKU</label>
                <input
                  className="form-control"
                  type="text"
                  name="sku"
                  onChange={this.onChange}
                  value={sku}
                ></input>
              </div>

              <div className="form-group">
                <label>Unit Price</label>
                <input
                  className="form-control"
                  type="text"
                  name="unit_price"
                  onChange={this.onChange}
                  value={unit_price}
                ></input>
              </div>

              <div className="form-group">
                <label>Image</label>
                <input
                  className="form-control"
                  type="text"
                  name="image"
                  onChange={this.onChange}
                  value={image}
                ></input>
              </div>

              <div className="form-group">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default connect(null, { addProduct })(Form);
