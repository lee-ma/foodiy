import React from "react"
import styled from "styled-components"
import Dot from "./Dot"

const DotsContainer = styled("div")`
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  z-index: 9999;
  padding: 5px 0;
`

const Dots = ({ index, images, dotClick, visible }) => {
  if(!visible) return null

  const dotsGroup = images.map((image, i) => {
    let active = (i === index) ? true : false
    return (
      <Dot
        key={i}
        id={i}
        active={active}
        dotClick={dotClick}
      />
    )
  })

  return (
    <DotsContainer>
      { dotsGroup }
    </DotsContainer>
  )
}

export default Dots