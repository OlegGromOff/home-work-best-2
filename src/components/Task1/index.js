import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUnlock } from "@fortawesome/free-solid-svg-icons";
import './task1.css'

export default class Task1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Logged: false,
    };
  }
  changeFunc = () => {
    this.setState({ Logged: !this.state.Logged })
  }

  render() {
    // const { isLogged } = this.state;
    return (
      <div className="app-wrapper">
        <h1>{this.state.Logged ? "You are logged in" : "You are not logged in"}</h1>
        <button className="btn" onClick={this.changeFunc}>
          {this.state.Logged ? (
            <>
              logout <FontAwesomeIcon icon={faLock} />
            </>
          ) : (
              <>
                login <FontAwesomeIcon icon={faUnlock} />
              </>
            )}
        </button>
      </div>
    );
  }
}