import React, { Component } from "react"
import messiImg from "./messi.png"

const profile = {
  imageUrl: messiImg,
  Fullname: "Lionel Messi",
  Bio: "Argentinan, 36 years old, playing in Inter Miami",
  Profession: "Soccer playerntinian",
}

export default class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = { timer: 0 }
  }

  componentDidMount() {
    console.log("component did mount")
    setInterval(() => {
      this.setState((prevState) => ({ timer: prevState.timer + 1 }))
    }, 1000)
  }
  componentDidUpdate() {
    console.log("component did Update")
  }


  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            width: "300px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img style={{ width: "300px" }} src={messiImg} alt="Messi" />
          <p>
            <b>Fullname :</b> {profile.Fullname}
          </p>
          <p>
            <b>Bio :</b> {profile.Bio}
          </p>
          <p>
            <b> Profession : </b> {profile.Profession}
          </p>
          <p>
            <b>Timer :</b> {this.state.timer} sec
          </p>
        </div>
      </div>
    )
  }
}
