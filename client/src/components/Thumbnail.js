import React, { Component } from 'react'

class Thumbnail extends Component {
  state = {
    loading: false,
    thumb: undefined,
  };

  componentWillReceiveProps(nextProps) {
    if (!nextProps.file) { return; }

    this.setState({ loading: true }, () => {
      let reader = new FileReader();

      reader.onloadend = () => {
        this.setState({ loading: false, thumb: reader.result });
      };

      reader.readAsDataURL(nextProps.file);
    });
  }

  render() {
    const { file, remove } = this.props;
    const { loading, thumb } = this.state;

    if (!file) { return null; }

    if (loading) { return <p>loading...</p>; }

    return (
      <div>
        <span onClick={(e) => {
          e.stopPropagation()
          remove()
          this.forceUpdate()
        }}>
          <i className="far fa-times-circle"></i>
        </span>
        <img src={thumb}
        alt={file.name}
        className="img-thumbnail mt-2"
        height={200}
        width={200} />
      </div>

    );
  }
}

export default Thumbnail
