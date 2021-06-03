import React from "react";

import { format_content } from "../helpers.js";

class TextBlock extends React.Component {
  render() {
    return (
      <div className="content-section">
        <h2>{this.props.title}</h2>
        {format_content(this.props.text)}
      </div>
    );
  }
}

export default TextBlock;
