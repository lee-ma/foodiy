import React from 'react';
import styled from 'styled-components';
import {colors} from '../theme';

const PrimaryButton = styled('button')`
  background-color: ${colors.green};

`

const SecondaryButton = styled('button')`
  background-color: #b6b6b6;
`

const SearchButton = styled('button')`
  background-color: ${colors.green};
  margin-left: -3.25em;
  margin-top: 0.25em;
  transform: scale(0.9);
`

const Button = ({children, searchbar, secondary}) => {
  if(searchbar) {
    return <SearchButton className="btn">{children}</SearchButton>
  }
  else if (secondary) {
    return <SecondaryButton>{children}</SecondaryButton>
  }
  else {
    return <PrimaryButton>{children}</PrimaryButton>
  }
}

export default Button;
