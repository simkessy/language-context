import React, { Component, createContext } from "react";
// This is an element you can return
const Context = createContext("english");
export default Context;

export class LanguageStore extends Component {
  state = { language: "english" };

  onLanguageChange = language => {
    this.setState({ language });
  };

  render() {
    return (
      /* You can set this as the main store and provide functions to update the state  */
      <Context.Provider
        value={{ ...this.state, onLanguageChange: this.onLanguageChange }}
      >
        {/* Then render children like normal */}
        {this.props.children}
      </Context.Provider>
    );
  }
}
