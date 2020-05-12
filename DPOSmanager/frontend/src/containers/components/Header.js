import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Jiffy-POS v.2
        </a>
        <div>
          <a href="/dashboard">DASHBOARD | </a>
          <a href="/products">PRODUCTS | </a>
          <a href="/transactions">TRANSACTIONS | </a>
          <a href="/metrics">METRICS | </a>
          <a href="/settings">SETTINGS </a>
        </div>
      </nav>
    );
  }
}
