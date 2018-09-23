import React from 'react'
import styled from 'styled-components'

const StyledSlide = styled('div')`
    display: inline-block;
    height: 100%;
    width: 101%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 60%;
`

const Slide = ({ image }) => {
  return <StyledSlide className="slide" style={{ backgroundImage: `url(${image})` }}></StyledSlide>
}

export default Slide