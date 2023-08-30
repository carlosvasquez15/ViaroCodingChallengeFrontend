import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link, Route, Router, Routes } from 'react-router-dom';
import Alumno from '../paginas/alumno/Alumno';
import Asignacion from '../paginas/asignacion/Asignacion';
import Grado from '../paginas/grado/Grado';
import Profesor from '../paginas/profesor/Profesor';
import { ArrowForward } from '@mui/icons-material';

interface Opcion{
    id: number;
    nombre: string;
    urlImagen?: string;
    descripcion: string;
    urlOpcion: string;
}

const Opciones = () => {
   const opcionList:Opcion[] = [
    {
        id: 1,
        nombre: 'Alumno',
        urlImagen: 'src/assets/imagenes/alumno.jpg',
        descripcion: 'Mantenimiento de Alumno',
        urlOpcion: '/alumno'
    },
    {
        id: 2,
        nombre: 'Profesor',
        urlImagen: 'src/assets/imagenes/profesor.jpg',
        descripcion: 'Mantenimiento de Profesor',
        urlOpcion: '/profesor'
    },
    {
        id: 3,
        nombre: 'Grado',
        urlImagen: 'src/assets/imagenes/grado.jpg',
        descripcion: 'Mantenimiento de Grado',
        urlOpcion: '/grado'
    },
    {
        id: 4,
        nombre: 'Asignacion Alumno-Grado',
        urlImagen: 'src/assets/imagenes/asignatura.jpg',
        descripcion: 'Mantenimiento de asignaciones de alumnos.',
        urlOpcion: '/asignacion'
    }
   ];
  return (
   <>
    {opcionList.map((opcion: Opcion) => (
            <Grid item key={opcion.id} xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  sx={{
                    height: '270px',
                    width: '100%',
                    
                  }}
                  sizes="(max-width: 600px) 480px, 800px" 
                  loading='lazy'
                  image={opcion.urlImagen}
                  
                />
                <CardContent sx={{ flexGrow: 1, m:1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {opcion.nombre}
                  </Typography>
                  <Typography>
                    {opcion.descripcion}
                  </Typography>
                </CardContent>
                <CardActions sx={{alignContent: 'center', m:2}}>
                  <center>
                    <Button component={Link} to={opcion.urlOpcion} size="medium" color='success' variant='contained' endIcon={<ArrowForward/>}>Ir al mantenimiento</Button>
                  </center>
                  
                </CardActions>
              </Card>
            </Grid>
          ))}
   </>

  )
}

export default Opciones;