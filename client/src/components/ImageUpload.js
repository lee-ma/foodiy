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

const acceptDropzoneStyle = {
  borderColor: "green"
}

const rejectDropzoneStyle = {
  borderColor: "red"
}

class ImageUpload extends Component {

  render() {
    let { values, setFieldValue } = this.props
    return (
      <Dropzone
        style={dropzoneStyle}
        acceptStyle={acceptDropzoneStyle}
        rejectStyle={rejectDropzoneStyle}
        accept="image/*"
        onDrop={(acceptedFiles) => {
        // do nothing if no files
        if (acceptedFiles.length === 0) { return; }
        // on drop we add to the existing files
        setFieldValue("images", values.images.concat(acceptedFiles));
      }}>
        {({ isDragActive, isDragReject, acceptedFiles, rejectedFiles }) => {
          if (isDragReject) {
            return "Invalid file type.";
          }

          if (isDragActive) {
            return "Let go to add your image!";
          }

          if (values.images.length === 0) {
            return <p>Try dragging a file here, or click to upload images.</p>
          }

          return values.images.map((file, i) => (
            <Thumbnail
              remove={() => {
                if (values.images.length === 1) {
                  setFieldValue("images", [])
                }
                else {
                  values.images.splice(i, 1)
                  setFieldValue("images", values.images)
                }
              }}
              key={i}
              file={file} />));
        }}
      </Dropzone>
    )
  }
}

export default ImageUpload
