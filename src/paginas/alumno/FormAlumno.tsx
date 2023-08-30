import { Button, FormControl, MenuItem, Select, TextField } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { useFormik } from 'formik'
import React from 'react';
import { AlumnoType } from '../../models/Alumno.type';
import { DatePicker } from '@mui/x-date-pickers';
import { FormatLineSpacing } from '@mui/icons-material';
import dayjs from 'dayjs';

interface FormAlumnoProps {
    alumno: AlumnoType;
    modificando: boolean;
    handleSubmit: any;
}

const FormAlumno: React.FC<FormAlumnoProps> = ({alumno, modificando, handleSubmit}) => {
const formik = useFormik({
    initialValues: alumno,
    //validationSchema: [],
    onSubmit: handleSubmit
});
  return (
    <>
     <form onSubmit={formik.handleSubmit}>
        <Grid2  sx={{p:2, minWidth: 400}}>
            <Grid2 sx={{m:1, md: 12}}>
                {modificando && <TextField
                    color='info'
                    fullWidth
                    id="id"
                    name='id'
                    label='ID'
                    value={formik.values.id}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.id && Boolean(formik.errors.id)}
                    helperText={formik.touched.id && formik.errors.id}
                    >
                </TextField>}
            </Grid2>
            <Grid2 sx={{m:1, md: 12}}>
                <TextField
                    color='info'
                    fullWidth
                    id="nombre"
                    name='nombre'
                    label='Nombres'
                    required
                    value={formik.values.nombre}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.nombre && Boolean(formik.errors.nombre)}
                    helperText={formik.touched.nombre && formik.errors.nombre}
                    >
                </TextField>
            </Grid2>
            <Grid2 sx={{m:1}}>
                <TextField
                    fullWidth
                    required
                    color='info'
                    id="appellido"
                    name='apellido'
                    label='Apellidos'
                    value={formik.values.apellido}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.apellido && Boolean(formik.errors.apellido)}
                    helperText={formik.touched.apellido && formik.errors.apellido}
                    >
                </TextField>
            </Grid2>
            <Grid2 sx={{m:1}}>
                <TextField
                    fullWidth
                    color='info'
                    id="genero"
                    name="genero"
                    label="Genero"
                    required
                    select
                    value={formik.values.genero}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.genero && Boolean(formik.errors.genero)}
                
                    >
                    <MenuItem value="masculino" >Masculino</MenuItem>
                    <MenuItem value="femenino">Femenino</MenuItem>
                </TextField>
            </Grid2>
            <Grid2 sx={{m:1}}>
                <DatePicker 
                    
                    label='Fecha de Nacimiento'
                    value={formik.values.fechaNacimiento}
                    onChange={(value) => formik.setFieldValue('fechaNacimiento', dayjs(value).format('MM/DD/YYYY'))}
                    slotProps={{textField: {fullWidth: true, color: 'info', required: true}}}
                    disableFuture
                   />
            </Grid2>
            
       
        </Grid2>
        <Button type='submit'>{modificando ? 'Guardad cambios' : 'Agregar'}</Button>
        </form>
    </>
   

    
  )
}

export default FormAlumno;