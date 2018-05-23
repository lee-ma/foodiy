import React, { Component } from 'react'
import styled from 'styled-components'
import { Field } from 'formik'
import { Text } from './index'
import { fonts } from '../theme'

const inputFeedback = styled('div') `
  color: #999;
`

const StyledLabel = styled('label') `
  display: block;
  font-family: ${fonts.sansSerif};
  margin-bottom: 0;
  margin-top: 0.25em;
`

const StyledInput = styled('input') `
  font-family: ${fonts.sansSerif};
`

const InputFeedback = ({ error }) => {
  return (
    error ? (
      <inputFeedback>{error}</inputFeedback>
    ) : null
  )

}


const Label = ({
  error,
  className,
  children,
  ...props
}) => {
  return (
    <StyledLabel {...props}>
      {children}
    </StyledLabel>
  );
};

const TextInput = ({
  type,
  id,
  label,
  error,
  value,
  onChange,
  className,
  ...props
}) => {
  return (
    <div>
      <Label htmlFor={id} error={error}>
        {label}
      </Label>
      <StyledInput
        className="form-control"
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        {...props}
      />
      <InputFeedback error={error} />
    </div>
  );
};

export default TextInput