import React, { Component } from "react";
import LangaugeContext from "../context/LanguageContext";
export default class LanguageSelector extends Component {
  static contextType = LangaugeContext;

  render() {
    return (
      <div className="">
        Select a language:
        <i
          className="flag us"
          onClick={() => this.context.onLanguageChange("english")}
        />
        <i
          className="flag nl"
          onClick={() => this.context.onLanguageChange("dutch")}
        />
      </div>
    );
  }
}
