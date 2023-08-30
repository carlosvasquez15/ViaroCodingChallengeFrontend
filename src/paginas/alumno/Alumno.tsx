import React, { useState } from 'react';
import BackMenu from '../../menu/BackMenu'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { Box, Button, Card, CardContent, TextField, Typography } from '@mui/material';
import { Add, Search } from '@mui/icons-material';
import TablaDatos from '../base/TablaDatos';
import { GridColDef } from '@mui/x-data-grid';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import Busqueda from '../base/Busqueda';
import ModalABC from '../base/ModalABC';
import { AlumnoType } from '../../models/Alumno.type';
import FormAlumno from './FormAlumno';

const Alumno = () => {
  const [modalAbierto, setModalAbierto] = useState(false);
  const [modificando, setModificando] = useState(false);
  const [alumnosList, setAlumnosList] = useState<AlumnoType[]>([]);
  const [textoBusqueda, setTextoBusqueda] = useState("");
  const defaultValuesAlumno = {id: 0, nombre: '', apellido: '', genero: '', fechaNacimiento:""};
  const [alumno, setAlumno] = useState<AlumnoType>(defaultValuesAlumno);

  const columnasDataTable: GridColDef[] = [
    { field: 'id', headerName: 'ID Alumno', width: 100 },
    { field: 'nombre', headerName: 'Nombres', width: 150 },
    { field: 'apellido', headerName: 'Apellidos', width: 150 },
    { field: 'genero', headerName: 'Genero', width: 150 },
    { field: 'fechaNacimiento', headerName: 'Fecha Nacimiento', width: 150 },
    { field: '', headerName: 'Acciones', width: 100 },
  ];


  const handleOpen =() =>{
    setModalAbierto(true);
  }

  const handleClose = () => {
    setModalAbierto(false);
  }

  const handleSubmit = (values: any) => {
    alert(JSON.stringify(values));
  }

  const resetValues=()=>{
    setAlumno(defaultValuesAlumno);
  }

  const handleNuevoAlumno = () =>{
    setModificando(false);
    resetValues();
    handleOpen();
  }

  return (
    <>
      <Container sx={{ py: 1 }} maxWidth="lg">
        <Card sx={{ p: 2 }} >
          <CardContent>
            <BackMenu titulo='Alumnos' />
            <Grid spacing={4} minHeight={300} mt={2}>
              <Stack alignItems="center" direction="row" sx={{ pt: 2, pb: 2 }}>
                <Grid2 container spacing={3} md={12}>
                  <Grid2 xs={12} md={6} >
                    <TextField label="Ingrese cualquier valor" value={textoBusqueda} onChange={(event) => (setTextoBusqueda(event.target.value))} color='info' size='small' fullWidth />
                  </Grid2>
                  <Grid2 xs={12} md={3} >
                    <Button size="medium" color='info' variant='contained' startIcon={<Search />}>Buscar</Button>
                  </Grid2>

                </Grid2>
              </Stack>

              <Stack direction={"row-reverse"}>
                <Button variant='contained' size='medium' color='info' endIcon={<Add />} onClick={handleNuevoAlumno} >Registrar nuevo Alumno</Button>
              </Stack>
              <Grid2 sx={{ mt: 2 }} >
                <TablaDatos columnas={columnasDataTable} filas={alumnosList} />
                <ModalABC open={modalAbierto}  title='Alumno' onClose={handleClose} modificando={modificando}>
                  <FormAlumno alumno={alumno} modificando={modificando} handleSubmit={handleSubmit}/>
                </ModalABC>
              </Grid2>
            </Grid>
          </CardContent>
        </Card>

      </Container>

    </>

  )
}

export default Alumno;