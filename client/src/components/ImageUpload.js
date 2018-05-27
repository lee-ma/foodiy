import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import { Thumbnail } from './index'

const dropzoneStyle = {
  width: "100%",
  cursor: "pointer",
  padding: "10px 20px 20px 20px",
  marginTop: "10px",
  height: "auto",
  borderWidth: 2,
  borderColor: "rgb(102, 102, 102)",
  borderStyle: "dashed",
  borderRadius: 5,
}

class ImageUpload extends Component {
  render() {
    let { values, setFieldValue } = this.props
    return (
      <Dropzone style={dropzoneStyle} accept="image/*" onDrop={(acceptedFiles) => {
        // do nothing if no files
        if (acceptedFiles.length === 0) { return; }
        // on drop we add to the existing files
        setFieldValue("images", values.images.concat(acceptedFiles));
      }}>
        {({ isDragActive, isDragReject, acceptedFiles, rejectedFiles }) => {
          if (isDragActive) {
            return "This file is authorized";
          }

          if (isDragReject) {
            return "This file is not authorized";
          }

          if (values.images.length === 0) {
            return <p>Try dragging a file here, or click to upload images.</p>
          }

          return values.images.map((file, i) => (<Thumbnail key={i} file={file} />));
        }}
      </Dropzone>
    )
  }
}

export default ImageUpload
