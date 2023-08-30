import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import React from 'react';
import FormikInput from '../../components/FormikInput';
import { ProfesorType } from '../../models/ProfesorType';
import { MenuItem } from '@mui/material';
import { GradoType } from '../../models/GradoType';
import { useFormikContext } from 'formik';
import { AlumnoType } from '../../models/Alumno.type';

interface FormAsignacionProps {
    modificando: boolean;
    alumnoList: AlumnoType[];
    gradoList: GradoType[];
}

const FormAsignacion: React.FC<FormAsignacionProps> = ({modificando, gradoList, alumnoList}) => {
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
            <Grid2 sx={{mb:2}}>
            <FormikInput 
                required
                name="alumnoId"
                label="Alumno"
                select
                placeholder='Seleccione un alumno...'
                >
                    {alumnoList.map((alumno) => (
                         <MenuItem key={alumno.id} value={alumno.id} >{alumno.nombre} {alumno.apellido}</MenuItem>
                    ))}
                </FormikInput>
            </Grid2>
            <Grid2 sx={{mb:2}}>
            <FormikInput 
                required
                name="gradoId"
                label="Grado"
                select
                placeholder='Seleccione un grado...'
                >
                    {gradoList.map((grado) => (
                         <MenuItem key={grado.id} value={grado.id}> {grado.nombre}</MenuItem>
                    ))}
                </FormikInput>
            </Grid2>
            <Grid2 sx={{mb:2, md: 12}}>
                <FormikInput 
                required
                name="seccion"
                label="Sección"
                />
            </Grid2>
        </Grid2>
    </>
  )
}

export default FormAsignacion;