import React from 'react';

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }

  setSpans = () => {
    const { clientHeight } = this.imageRef.current;
    const spans = Math.ceil(clientHeight / 10 + 1);
    this.setState({ spans });
  };

  componentDidMount() {
    const { current } = this.imageRef;
    current.addEventListener('load', this.setSpans);
  }

  render() {
    const { urls, description } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} src={urls.regular} alt={description}></img>
      </div>
    );
  }
}

export default ImageCard;
