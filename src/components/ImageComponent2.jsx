import { Component } from 'react';

class ImageComponent2 extends Component {
  render() {
    return <img src={this.props.imgUrl} alt={this.props.alt} />;
  }
}

export default ImageComponent2;
