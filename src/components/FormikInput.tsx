import { TextField, TextFieldProps } from '@mui/material';
import { FieldHookConfig, useField } from 'formik';
import React from 'react';



const FormikInput:React.FC<FieldHookConfig<string>&TextFieldProps> = (props) => {
   const [field, meta] = useField(props.name); 
   const valorInicial = field.value || '';
   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      field.onChange(event);
      if (props.onChange) {
        props.onChange(event);
      }
    };

  return (
    <>
    <TextField
        {...field}
        {...props}
        color='info'
        fullWidth
        name={field.name}
        onBlur={field.onBlur}
        onChange={handleInputChange}
        value={valorInicial}
        helperText={meta.touched && meta.error}
        error={meta.touched && Boolean(meta.error)}
        />
    </>
    
  )
}

export default FormikInput;