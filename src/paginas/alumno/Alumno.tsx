import React, { useEffect, useState } from 'react';
import BackMenu from '../../menu/BackMenu'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { Button, Card, CardContent, TextField } from '@mui/material';
import { Add, Search } from '@mui/icons-material';
import TablaDatos from '../base/TablaDatos';
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import ModalABC from '../base/ModalABC';
import { AlumnoType } from '../../models/Alumno.type';
import FormAlumno from './FormAlumno';
import { crearAlumno, eliminarAlumno, getAlumnos, modificarAlumno } from '../../services/apiService';

const Alumno = () => {
  const [modalAbierto, setModalAbierto] = useState(false);
  const [modificando, setModificando] = useState(false);
  const [alumnosList, setAlumnosList] = useState<AlumnoType[]>([]);
  const [textoBusqueda, setTextoBusqueda] = useState("");
  const defaultValuesAlumno = {id: 0, nombre: '', apellido: '', genero: '', fechaNacimiento:""};
  const [alumno, setAlumno] = useState<AlumnoType>(defaultValuesAlumno);

  const columnasDataTable: GridColDef[] = [
    { field: 'id', headerName: 'ID Alumno', width: 150 },
    { field: 'nombre', headerName: 'Nombres', width: 200 },
    { field: 'apellido', headerName: 'Apellidos', width: 200 },
    { field: 'genero', headerName: 'Genero', width: 150 },
    { field: 'fechaNacimiento', headerName: 'Fecha Nacimiento', width: 150 },
    { field: '', headerName: 'Acciones', width: 250, 
      renderCell: (cellValues: GridRenderCellParams) => { 
      return (
        <>
        <Button color='success' sx={{m:2}} variant='contained' onClick={(event) => { handleSelect(event, cellValues) }}>Ver</Button>
        <Button color='error' variant='contained' onClick={(event) => { handleDelete(event, cellValues) }}>Eliminar</Button>
        </>
      ) }  
  },
  ];

  const handleOpen =() =>{
    setModalAbierto(true);
  }

  const handleClose = () => {
    setModalAbierto(false);
    resetValues();
  }

  const handleSubmit = (values: AlumnoType) => {
    if(modificando){
      modificarAlumno(values)
      .then((alumnoModificado) =>{
        const listaActualizada = alumnosList.map(item =>
          item.id === alumnoModificado.id ? alumnoModificado : item);
          setAlumnosList(listaActualizada);
      })
      .catch((error) =>{
        console.log("Ocurrio un error: ", error);
      });
      //alert(JSON.stringify(alumno));
    }else{
      crearAlumno(values)
      .then((alumnoCreado) => {
        setAlumnosList((alumnosList) => ([...alumnosList,alumnoCreado]));
      })
      .catch((error) =>{
        console.log("Ocurrio un error: ", error);
      })
      //alert(JSON.stringify(values));
    }
    handleClose();
  }

  const handleSelect = (event: React.MouseEvent, cellValues: GridRenderCellParams) =>{
    const alumnoSeleccionado: AlumnoType = {...cellValues.row};
    alert(JSON.stringify(alumnoSeleccionado));
    setAlumno(alumnoSeleccionado);
    setModificando(true);
    handleOpen();
  }

  const handleDelete = (event: React.MouseEvent, cellValues: GridRenderCellParams) =>{
    const alumnoSeleccionado: AlumnoType = {...cellValues.row};
    eliminarAlumno(alumnoSeleccionado)
    .then(() => {
      setAlumnosList(alumnosList.filter(item => item.id !== alumnoSeleccionado.id));

    }).catch((error) =>{
      console.log("Ocurrio un error: ", error);
    });
    //alert(JSON.stringify(alumnosList.length));
  }
/*
  const handleConfirmDelete = () =>{
    
  }*/

  const resetValues=()=>{
    setAlumno(defaultValuesAlumno);
  }

  const handleNuevoAlumno = () =>{
    setModificando(false);
    resetValues();
    handleOpen();
  }

  useEffect(() => {
    getAlumnos()
    .then((datos) => setAlumnosList(datos))
    .catch((error) => console.log('Hubo un error: ', error));
  }, []);
  

  return (
    <>
      <Container sx={{ py: 1 }} maxWidth="lg">
        <Card sx={{ p: 2 }} >
          <CardContent>
            <BackMenu titulo='Alumnos' />
            <Grid minHeight={300} mt={2}>
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
                <ModalABC open={modalAbierto} entidad={alumno}  title='Alumno' onClose={handleClose} onSubmit={handleSubmit} modificando={modificando}>
                  <FormAlumno modificando={modificando} />
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