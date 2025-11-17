import { Component } from 'react';

class ImageComponent extends Component {
  render() {
    return <img src={this.props.immagine} alt={this.props.immagine} />;
  }
}

export default ImageComponent;
