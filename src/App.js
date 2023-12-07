import "./App.css"
import Profile from "./Components/profile"
import Button from "react-bootstrap/Button"

import React, { Component } from "react"

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { show: false}
  }
  toggle = () => {
    this.setState({show : !this.state.show})
  }
  render() {
    console.log (this.state.show)
    return (
      <div className="App">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "30px",
          }}
        >
          <Button variant="outline-primary" onClick={this.toggle}>
            {this.state.show ? "Hide" : "Show"}
          </Button>
        </div>

        {this.state.show ? <Profile /> : null}
      </div>
    )
  }
}
