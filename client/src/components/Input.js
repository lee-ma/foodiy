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

const TextInput = ({ name, label, ...rest }) => (
  <Field
    name={name}
    render={({ field, form }) => {
      const error = form.touched[name] && form.errors[name];
      return (
        <div>
          <StyledLabel htmlFor={name}>{label}</StyledLabel>
          <StyledInput className="form-control" {...field} {...rest} />
          {form.errors[name] &&
            form.touched[name] && (
              <Text small italic error>{form.errors[name]}</Text>
            )}
        </div>
      );
    }}
  />
);

export default TextInput