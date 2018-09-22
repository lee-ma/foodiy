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
  width: ${props => props.searchbar ? '200px' : props.textarea ? '500px' : '100%' } !important;
  height: ${props => props.textarea ? '5em' : 'auto'} !important;

  &&:focus {
  border-color: ${({ theme }) => theme.colors.grey} !important;
  width: ${props => props.searchbar ? '300px' : props.textarea ? '500px' : '100%'} !important;
  transition: ${props => props.searchbar ? 'width 0.5s' : ''}
  };
  height: ${props => props.searchbar ? '2.6em' : 'auto'}
`

const TextInput = ({ name, label, placeholder, ...rest }) => (
  <Field
    name={name}
    render={({ field, form }) => {
      const error = form.touched[name] && form.errors[name]
      return (
        <div>
          <StyledLabel htmlFor={name}>{label}</StyledLabel>
          <StyledInput className="form-control" placeholder={placeholder} {...field}
            {...rest}
          />
          {form.errors[name] &&
            form.touched[name] && (
              <Text small italic error>{form.errors[name]}</Text>
            )}
        </div>
      )
    }}
  />
)

export default TextInput
