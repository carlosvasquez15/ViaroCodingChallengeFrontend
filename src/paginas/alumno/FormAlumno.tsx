import { Button, FormControl, MenuItem, Select, TextField } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { Field, Form, Formik, FormikProps, useFormik, useFormikContext } from 'formik'
import React from 'react';
import { AlumnoType } from '../../models/Alumno.type';
import { DatePicker } from '@mui/x-date-pickers';
import { FormatLineSpacing } from '@mui/icons-material';
import dayjs from 'dayjs';
import FormikInput from '../../components/FormikInput';

interface FormAlumnoProps {
    modificando: boolean;
}

const FormAlumno: React.FC<FormAlumnoProps> = ({modificando}) => {
    const formik = useFormikContext<AlumnoType>();
    return (
    <>
        <Grid2  sx={{p:2, minWidth: 400}}>
            <Grid2 sx={{m:1, md: 12}}>
                {modificando &&
                <FormikInput 
                    name="id"
                    label="ID"
                    disabled
                    readOnly />
                } 
            </Grid2>
            <Grid2 sx={{m:1, md: 12}}>
                <FormikInput 
                required
                name="nombre"
                label="Nombres"
                />
            </Grid2>
            <Grid2 sx={{m:1}}>
            <FormikInput 
                required
                name="apellido"
                label="Apellidos"
                />
                
            </Grid2>
            <Grid2 sx={{m:1}}>
            <FormikInput 
                required
                name='genero'
                label="Genero"
                select
                >
                    <MenuItem value="masculino" >Masculino</MenuItem>
                    <MenuItem value="femenino">Femenino</MenuItem>
                </FormikInput>
            </Grid2>
            <Grid2 sx={{m:1}}>
            
            <DatePicker 
                    format='DD/MM/YYYY'
                    label='Fecha de Nacimiento'
                    value={dayjs(formik.values.fechaNacimiento)}
                    onChange={(value) => formik.setFieldValue('fechaNacimiento', dayjs(value).format('MM/DD/YYYY'))}
                    slotProps={{textField: {fullWidth: true, color: 'info', required: true}}}
                    disableFuture
                   />
            </Grid2>
            
       
        </Grid2>
       
        {/*</Form>
        )}
            </Formik>*/}   
    </>
   

    
  )
}

export default FormAlumno;