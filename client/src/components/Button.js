import React from 'react'
import styled from 'styled-components'
import { colors, fonts, fontSizes, fontWeights } from 'theme'

const PrimaryButton = styled('button')`
  display: flex;
  justify-content: center;
  vertical-align: middle;
  align-items: center;
  background-color: ${colors.green};
  margin: 0.5em 0;
  color: ${colors.white};
  padding: .5em 1.5em;
  border-radius: 2px;
  font-family: ${fonts.sansSerif};
  font-size: ${fontSizes.default};
  font-weight: ${fontWeights.default};
  border: none;
  cursor: pointer;
  transition: 0.1s;
  &:hover {
    transition: 0.3s;
    background-color: ${colors.greenDark};
  }
`

const SecondaryButton = styled('button')`
  background-color: ${colors.grey};
  margin: 0.5em 0;
  display: flex;
  justify-content: center;
  vertical-align: middle;
  align-items: center;
  color: ${colors.white};
  padding: 0.5em 1.5em;
  border-radius: 2px;
  font-family: ${fonts.sansSerif};
  border: none;
  cursor: pointer;
  &:hover {
    transition: 0.3s;
    background-color: ${colors.greyDark};
  }
`

const SearchButton = styled('button')`
  background-color: ${colors.green};
  margin-left: -3.25em;
  margin-top: 0.25em;
  cursor: pointer;
  transform: scale(0.9);
  &:hover {
    transition: 0.3s;
    background-color: ${colors.greenDark};
  }
`

const Button = ({
  children,
  searchbar,
  secondary,
  ...otherProps
}) => {
  if(searchbar) {
    return <SearchButton {...otherProps} className="btn">{children}</SearchButton>
  }
  else if (secondary) {
    return <SecondaryButton {...otherProps}>{children}</SecondaryButton>
  }
  else {
    return <PrimaryButton {...otherProps}>{children}</PrimaryButton>
  }
}

export default Button
