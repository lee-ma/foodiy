import React from 'react'
import styled from 'styled-components'
import types from 'prop-types'
import { fontWeights, fonts, fontSizes, colors, lineHeights, fontStyles } from '../theme'

const Text = (props) => {
  const { children, element = 'span' } = props
  const StyledText = styled(element)`
    &&{
      font-family: ${
  props => props.serif ? fonts.serif :
    props.logo ? fonts.logo : fonts.sansSerif
};
      font-weight: ${
  props => props.bold ? fontWeights.bold :
    props.semiBold ? fontWeights.semiBold :
      props.light ? fontWeights.light : fontWeights.default
};
      font-size: ${
  props => props.tiny ? fontSizes.tiny :
    props.small ? fontSizes.small :
      props.medium ? fontSizes.medium :
        props.big ? fontSizes.big :
          props.huge ? fontSizes.huge : fontSizes.default
};
      text-align: ${
  props => props.center ? 'center' :
    props.right ? 'right' : 'left'
};
      color: ${
  props => props.green ? colors.green :
    props.error ? colors.error :
      props.grey ? colors.grey :
        props.greyDark ? colors.greyDark : colors.black
};
      line-height: ${
  props => props.tight ? lineHeights.tight :
    props.loose ? lineHeights.loose : lineHeights.default
};
      font-style: ${
  props => props.italic ? fontStyles.italic : 'normal'
};
      display: ${'block'};
    }`
  return <StyledText {...props}>{children}</StyledText>
}

Text.propTypes = {
  serif: types.bool,
  sansSerif: types.bool,
  logo: types.bool,
  bold: types.bool,
  semiBold: types.bool,
  light: types.bool,
  green: types.bool,
  grey: types.bool,
  black: types.bool,
  tiny: types.bool,
  small: types.bool,
  big: types.bool,
  huge: types.bool,
  center: types.bool,
  right: types.bool
}

export default Text
