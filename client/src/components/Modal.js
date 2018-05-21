import React, { Component } from 'react'
import styled from 'styled-components'
import { Text } from './index'

const StyledModal = styled('div') `
    position: absolute;
    left: 50%;
    top: 30%;
    margin-top: -200px;
    margin-left: -200px;
    width: 400px;
    z-index: 1000;
    background-color: #feffff;
    display: inline-block;
    border-radius: 0.25em;
    padding: 1em;
`

const Overlay = styled('div')`
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
                    <StyledModal>
                        <div className="container-fluid">
                            <div className="row" style={{ marginBottom: '1em', display: 'flex', justifyContent: 'space-between' }}>
                                <Text big>{title}</Text>
                                <button onClick={hide}>close modal</button>
                            </div>
                            {children}
                        </div>
                    </StyledModal>
                </Overlay>
            )
        }
        else {
            return null
        }
    }
}

export default Modal
