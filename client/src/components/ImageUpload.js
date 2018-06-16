import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import { Thumbnail, Text } from './index'
import {colors} from '../theme'

const dropzoneStyle = {
  width: "100%",
  cursor: "pointer",
  padding: "25px 20px 20px 20px",
  marginTop: "10px",
  height: "auto",
  border:`2px #b6b6b6 dashed`,
  borderRadius: 5,
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}

const acceptDropzoneStyle = {
  borderColor: colors.green
}

const rejectDropzoneStyle = {
  borderColor: "red"
}

const activeDropzoneStyle = {
  borderColor: colors.grey
}

class ImageUpload extends Component {

  render() {
    let { values, setFieldValue } = this.props
    return (
      <Dropzone
        style={dropzoneStyle}
        acceptStyle={acceptDropzoneStyle}
        rejectStyle={rejectDropzoneStyle}
        activeStyle={activeDropzoneStyle}
        preventDropOnDocument={true}
        accept="image/*"
        onDrop={(acceptedFiles) => {
        // do nothing if no files
        if (acceptedFiles.length === 0) { return; }
        // on drop we add to the existing files
        setFieldValue("images", values.images.concat(acceptedFiles));
      }}>
        {({ isDragActive, isDragReject, acceptedFiles, rejectedFiles }) => {
          if (isDragReject) {
            return (
              <p style={{color: colors.error, textAlign: "center", margin: "0"}}>That's not an image!
                <br style={{lineHeight: "2em"}}/>
                <i style={{fontSize: "50px"}} className="fas fa-cloud-upload-alt"></i>
              </p>
            )
          }

          if (isDragActive) {
            return (
              <p style={{color: colors.green, textAlign: "center", margin: "0"}}>Let go to add your image!
                <br style={{lineHeight: "2em"}}/>
                <i style={{fontSize: "50px"}} className="fas fa-cloud-upload-alt"></i>
              </p>
            )
          }

          if (values.images.length === 0) {
            return (
              <Text grey center>Try dragging a file here, or click to upload images.
                <br style={{lineHeight: "2em"}}/>
                <i style={{fontSize: "50px"}} className="fas fa-cloud-upload-alt"></i>
              </Text>
            )
          }

          return values.images.map((file, i) => (
            <Thumbnail
              remove={() => {
                values.images.splice(i, 1)
                setFieldValue("images", values.images)
              }}
              key={i}
              file={file} />));
        }}
      </Dropzone>
    )
  }
}

export default ImageUpload
