import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import React from 'react';
import FormikInput from '../../components/FormikInput';
import { MenuItem } from '@mui/material';

interface FormProfesorProps {
    modificando: boolean;
}

const FormProfesor: React.FC<FormProfesorProps> = ({modificando}) => {
    return (
    <>
        <Grid2  sx={{p:2, minWidth: 400}}>
            <Grid2 sx={{mb:2, md: 12}}>
                {modificando &&
                <FormikInput 
                    name="id"
                    label="ID"
                    disabled
                    readOnly />
                } 
            </Grid2>
            <Grid2 sx={{mb:2, md: 12}}>
                <FormikInput 
                required
                name="nombre"
                label="Nombre"
                />
            </Grid2>
            <Grid2 sx={{mb:2}}>
            <FormikInput 
                required
                name="apellido"
                label="Apellido"
                />
            </Grid2>
            <Grid2 sx={{mb:2}}>
            <FormikInput 
                required
                name='genero'
                label="Genero"
                select
                placeholder='Seleccione un genero...'
                >
                    <MenuItem value="masculino" >Masculino</MenuItem>
                    <MenuItem value="femenino">Femenino</MenuItem>
                </FormikInput>
            </Grid2>
        </Grid2>
    </>
  )
}

export default FormProfesor;