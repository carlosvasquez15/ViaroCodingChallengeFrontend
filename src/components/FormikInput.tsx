import { TextField, TextFieldProps } from '@mui/material';
import { FieldInputProps, useField } from 'formik';
import React from 'react';



const FormikInput:React.FC<FieldInputProps<string>&TextFieldProps> = (props) => {
   const [field, meta] = useField(props.name); 
  return (
    <>
    <TextField
        {...field}
        {...props}
        fullWidth
        name={field.name}
        onBlur={field.onBlur}
        onChange={field.onChange}
        value={field.value}
        helperText={meta.touched && meta.error}
        error={meta.touched && Boolean(meta.error)}
        />
    </>
    
  )
}

export default FormikInput