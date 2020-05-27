import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <div>
        <h1>LOGIN</h1>
        <form method="post">
          <label>User</label>
          <input></input>
          <label>Pass</label>
          <input></input>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}
