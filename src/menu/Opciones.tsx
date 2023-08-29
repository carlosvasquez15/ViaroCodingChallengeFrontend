import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

interface Opcion{
    nombre: string;
    urlImagen?: string;
    descripcion: string;
    urlOpcion: string;
}

const Opciones = () => {
   const opcionList:Opcion[] = [
    {
        nombre: 'Alumno',
        urlImagen: 'https://unsplash.com/es/fotos/BPHIbMvjhzA',
        descripcion: 'Mantenimiento de Alumno',
        urlOpcion: '/alumno'
    },
    {
        nombre: 'Profesor',
        urlImagen: 'https://unsplash.com/es/fotos/TVSRWmnW8Us',
        descripcion: 'Mantenimiento de Profesor',
        urlOpcion: '/profesor'
    },
    {
        nombre: 'Grado',
        urlImagen: 'https://unsplash.com/es/fotos/LMQ5W6trE1M',
        descripcion: 'Mantenimiento de Grado',
        urlOpcion: '/grado'
    },
    {
        nombre: 'Asignacion Alumno-Grado',
        urlImagen: 'https://unsplash.com/es/fotos/GugumQBumPY',
        descripcion: 'Mantenimiento de asignaciones de alumnos.',
        urlOpcion: '/asignacion'
    }
   ];
   

   const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
   <>
    {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="div"
                  sx={{
                    pt: '56.25%',
                    width: '100%',
                  }}
                  image="https://source.unsplash.com/random?wallpapers"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Heading
                  </Typography>
                  <Typography>
                    This is a media card. You can use this section to describe the content.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">View</Button>
                  <Button size="small">Edit</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
   </>

  )
}

export default Opciones;