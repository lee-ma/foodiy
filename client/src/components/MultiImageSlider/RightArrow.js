import React from "react"
import styled from "styled-components"

const StyledRightArrow = styled("div")`
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
  right: 1em;
  z-index: 999;
  color: #fff;

  img {
    transform: translate(2px, 0);

    &:focus {
      outline: 0;
    }
  }
`

const RightArrow = (props) => {
  if(!props.visible) return null
  return (
    <StyledRightArrow className="right-arrow" onClick={props.goToNextSlide}>
      <i className="fa fa-chevron-right fa-3x" aria-hidden="true"></i>
    </StyledRightArrow>
  )
}

export default RightArrow