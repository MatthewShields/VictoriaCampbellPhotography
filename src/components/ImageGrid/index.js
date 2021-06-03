import React from "react";

class ImageGrid extends React.Component {
  render() {
    return (
      <div className="content-section">
        {this.props.images.map(image => (
          <div className="gallery-block">
            image
          </div>
        ))}
      </div>
    );
  }
}

export default ImageGrid;
