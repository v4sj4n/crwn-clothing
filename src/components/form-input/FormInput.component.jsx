import React from 'react'
import {FormInputLabel, Group, Input} from "./FormInput.styles"

export const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />

     {label && (
         <FormInputLabel
         shrink={otherProps.value.length}>
        {label}
      </FormInputLabel>
     )}
    </Group>
  )
}
