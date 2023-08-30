import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import React from 'react';
import FormikInput from '../../components/FormikInput';
import { ProfesorType } from '../../models/ProfesorType';
import { MenuItem } from '@mui/material';
import { GradoType } from '../../models/GradoType';
import { useFormikContext } from 'formik';

interface FormGradoProps {
    modificando: boolean;
    profesoresList: ProfesorType[];
}

const FormAlumno: React.FC<FormGradoProps> = ({modificando, profesoresList}) => {
    const formik = useFormikContext<GradoType>();
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
                label="Grado"
                />
            </Grid2>
            <Grid2 sx={{mb:2}}>
            <FormikInput 
                required
                name="profesorId"
                label="Profesor"
                select
                onChange={(event: any) => {
                    formik.setFieldValue('profesor', event.target.value);
                }}
                placeholder='Seleccione un profesor...'
                >
                    {profesoresList.map((profesor) => (
                         <MenuItem key={profesor.id} value={profesor.id} >{profesor.nombre} {profesor.apellido}</MenuItem>
                    ))}
                </FormikInput>
            </Grid2>
        </Grid2>
    </>
  )
}

export default FormAlumno;