import React from 'react'
import styled from 'styled-components'
import { colors } from 'theme'

const StyledActiveDot = styled('div')`
  background: ${colors.green};
  display: inline-block;
  padding: 7px;
  margin-right: 7.5px;
  cursor: pointer;
  border-radius: 50%;
`

const StyledDot = styled('div')`
  background: ${colors.white};
  display: inline-block;
  padding: 7px;
  margin-right: 7.5px;
  cursor: pointer;
  border-radius: 50%;
`

const Dot = ({ id, active, dotClick }) => {
  if(active) {
    return <StyledActiveDot onClick={() => dotClick(id)} />
  }

  return <StyledDot onClick={() => dotClick(id)}/>

}

export default Dot