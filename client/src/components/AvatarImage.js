import React from 'react'
import styled from 'styled-components'
import { colors } from '../theme'

const AvatarCircle = styled('div')`
  width: ${props => props.size};
  height: ${props => props.size};
  border-radius: 100%;
  background-image: url(${props => props.image});
  background-position: center;
  background-repeat: none;
  background-size: cover;
`

const PlaceholderCircle = styled('div')`
  width: ${props => props.size};
  height: ${props => props.size};
  border-radius: 100%;
  background-color: ${colors.grey};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 100%;
`

const AvatarImage = ({ user, size }) => {
  const { avatarImage, firstName, lastName } = user
  if (avatarImage) {
    return (
      <AvatarCircle size={size} image={avatarImage}/>
    )
  }
  return (
    <PlaceholderCircle size={size}>{`${firstName[0]}${lastName[0]}`}</PlaceholderCircle>
  )
}

AvatarImage.defaultProps = {
  size: "30px"
}

export default  AvatarImage