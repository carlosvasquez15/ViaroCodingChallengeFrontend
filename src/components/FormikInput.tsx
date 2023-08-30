import { TextField, TextFieldProps } from '@mui/material';
import { FieldHookConfig, useField } from 'formik';
import React from 'react';



const FormikInput:React.FC<FieldHookConfig<string>&TextFieldProps> = (props) => {
   const [field, meta] = useField(props.name); 
   const valorInicial = field.value || '';
  return (
    <>
    <TextField
        {...field}
        {...props}
        color='info'
        fullWidth
        name={field.name}
        onBlur={field.onBlur}
        onChange={field.onChange}
        value={valorInicial}
        helperText={meta.touched && meta.error}
        error={meta.touched && Boolean(meta.error)}
        />
    </>
    
  )
}

export default FormikInput;