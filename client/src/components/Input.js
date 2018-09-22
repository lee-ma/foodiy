import React from 'react'
import styled from 'styled-components'
import { Field } from 'formik'
import { Text } from 'components'

const StyledLabel = styled('label') `
  display: block;
  font-family: ${({ theme }) => theme.fonts.sansSerif};
  margin-bottom: 0;
  margin-top: 0.25em;
`

const StyledInput = styled('input') `
  font-family: ${({ theme }) => theme.fonts.sansSerif};
  transition: 1s;
  width: ${props => props.searchbar ? '200px' : '100%' } !important;
  height: ${props => props.textarea ? '5em' : 'auto'} !important;

  &&:focus {
  border-color: ${({ theme }) => theme.colors.grey} !important;
  width: ${props => props.searchbar ? '300px' : '100%'} !important;
  transition: ${props => props.searchbar ? 'width 0.5s' : ''}
  };
  height: ${props => props.searchbar ? '2.6em' : 'auto'}
`

const StyledTextArea = styled('textarea') `
  font-family: ${({ theme }) => theme.fonts.sansSerif};
  width: 100%;
  height: 100px;
  @media(max-width: 767px) {
    height: 50px;
  }
  border: 1px ${({ theme }) => theme.colors.greyLight} solid;
  border-radius: 5px;
  padding: 0.5em;

  &&:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.grey} !important;
  };
`

const TextInput = ({ name, label, placeholder, textarea, ...rest }) => (
  <Field
    name={name}
    render={({ field, form }) => {
      const error = form.touched[name] && form.errors[name]
      return (
        <div className="w100">
          <StyledLabel htmlFor={name}>{label}</StyledLabel>
          {textarea
            ? <StyledTextArea type="text" {...field} {...rest}
              placeholder={placeholder}
            />
            : <StyledInput className="form-control" placeholder={placeholder} {...field}
              {...rest}
            />}
          {form.errors[name] &&
            form.touched[name] && (
              <Text small italic error>{form.errors[name]}</Text>
            )}
        </div>
      )
    }}
  />
)

TextInput.defaultProps = {
  textarea: false
}

export default TextInput
