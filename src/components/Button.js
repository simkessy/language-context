import React, { Component } from "react";
import LanguageContext from "../context/LanguageContext";
import ColorContext from "../context/ColorContext";

export default class Button extends Component {
  // Has to be called contextType, won't work otherwise
  //   By defining static contextType = someContext,
  // You can access the value through this.context
  //   static contextType = LanguageContext;

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        {/* {text} */}
        <LanguageContext.Consumer>
          {value => (value.language === "english" ? "Submit" : "Voorlegeen")}
        </LanguageContext.Consumer>
      </button>
    );
  }

  render() {
    // const text = this.context === "english" ? "Submit" : "Voorleggen";
    return <ColorContext.Consumer>{this.renderButton}</ColorContext.Consumer>;
  }
}
