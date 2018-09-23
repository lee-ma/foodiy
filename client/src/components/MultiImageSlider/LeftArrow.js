import React from 'react'
import styled from 'styled-components'

const StyledLeftArrow = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform ease-in .2s;
  &:hover {
    transition: transform ease-in .2s;
    transform: scale(1.15)
  } 
  position: absolute;
  top: 45%;
  left: 1.5em;
  z-index: 999;
  color: #fff;

  img {
    transform: translate(-2px, 0);

    &:focus {
      outline: 0;
    }
  }

`

const LeftArrow = (props) => {
  if(!props.visible) return null
  return (
    <StyledLeftArrow className="left-arrow" onClick={props.goToPrevSlide}>
      <i className="fa fa-chevron-left fa-3x" aria-hidden="true"></i>
    </StyledLeftArrow>
  )
}
export default LeftArrow