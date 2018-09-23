import React, { Component } from "react"
import styled from "styled-components"
import { Text } from "components"
import { colors } from "theme"

const StyledModal = styled("div") `
    margin-top: 100px;
    background-color: #feffff;
    display: inline-block;
    border-radius: 0.25em;
    padding: 1em 2em;
`

const Overlay = styled("div") `
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0,0,0,0.5);
    z-index: 9000;
`

class Modal extends Component {
  render() {
    const { title, show, hide, children } = this.props
    if (show) {
      return (
        <Overlay>
          <div className="row">
            <StyledModal className="col-10 offset-1 col-sm-6 offset-sm-3 col-lg-4 offset-lg-4 slideinfromtop">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Text big>{title}</Text>
                <span onClick={hide} className="pointer">
                  <i className="fas fa-times" />
                </span>
              </div>
              <div className="row">
                <div className="col-3">
                  <hr style={{ borderColor: colors.green, width: "100%", float: "left", margin: "10px 0 35px 0", borderWidth: "2px", display: "block" }} />
                </div>
              </div>
              <div>
                {children}
              </div>
            </StyledModal>
          </div>
        </Overlay>
      )
    }
    else {
      return null
    }
  }
}

export default Modal
