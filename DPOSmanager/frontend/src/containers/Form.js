import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { addProduct } from "../actions/products";

export class Form extends Component {
  state = {
    name: "",
    email: "",
    message: "",
  };

  static PropTypes = {
    addProduct: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  onSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    const { name, email, message } = this.state;
    const product = { name, email, message };
    this.props.addProduct(product);
  };

  render() {
    const { name, email, message } = this.state;
    return (
      <Fragment>
        <h1>Add Product</h1>
        <div>
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
              <label>Email</label>
              <input
                className="form-control"
                type="text"
                name="email"
                onChange={this.onChange}
                value={email}
              ></input>
            </div>

            <div className="form-group">
              <label>Message</label>
              <input
                className="form-control"
                type="text"
                name="message"
                onChange={this.onChange}
                value={message}
              ></input>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default connect(null, { addProduct })(Form);
