import React, { Component } from "react";
import Img from "gatsby-image";

const imgStyles = {
  width: '100%',
  height: '400px'
}

class StoreItem extends Component {
  render() {
    const { data } = this.props;
    console.log(data);
    console.log(this.props.image);
    return (
      <div>

        <Img style={imgStyles} fluid={this.props.image.fluid} />
        {this.props.item.node.product_name[0].text}
      </div>
    );
  }
}

export default StoreItem;