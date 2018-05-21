import React, { Component } from 'react'
import styled from 'styled-components'
import { Text } from './index'

const StyledModal = styled('div') `
    position: absolute;
    left: 50%;
    top: 50%;
    margin-top: -200px;
    margin-left: -200px;
    width: 400px;
    z-index: 1000;
    background-color: #feffff;
    display: inline-block;
    border-radius: 0.25em;
    padding: 1em;
`

class Modal extends Component {
    render() {
        const { title, show, hide, children } = this.props
        if (show) {
            return (
                <div 
                    style={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        zIndex: 9000
                    }}
                >
                    <StyledModal>
                        <div className="container-fluid">
                            <div className="row" style={{ marginBottom: '1em' }}>
                                <Text big>{title}</Text>
                            </div>
                            {children}
                        </div>
                    </StyledModal>
                </div>
            )
        }
        else {
            return null
        }
    }
}

export default Modal