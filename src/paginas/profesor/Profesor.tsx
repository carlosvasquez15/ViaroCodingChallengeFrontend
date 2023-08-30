import React, { useEffect, useState } from 'react'
import BackMenu from '../../menu/BackMenu'
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { Button, Card, CardContent, Container, Grid, Stack, TextField } from '@mui/material';
import { crearProfesor, eliminarProfesor, getProfesores, modificarProfesor } from '../../services/apiService';
import Grid2 from '@mui/material/Unstable_Grid2';
import { Add, Search } from '@mui/icons-material';
import TablaDatos from '../base/TablaDatos';
import ModalABC from '../base/ModalABC';
import { ProfesorType } from '../../models/ProfesorType';
import FormProfesor from './FormProfesor';

const Profesor = () => {
  const [modalAbierto, setModalAbierto] = useState(false);
  const [modificando, setModificando] = useState(false);
  const [profesoresList, setProfesoresList] = useState<ProfesorType[]>([]);
  const [textoBusqueda, setTextoBusqueda] = useState("");
  const defaultValuesProfesor = {id: 0, nombre: '', apellido: '', genero: ''};
  const [profesor, setProfesor] = useState<ProfesorType>(defaultValuesProfesor);

  const columnasDataTable: GridColDef[] = [
    { field: 'id', headerName: 'ID Alumno', width: 150 },
    { field: 'nombre', headerName: 'Nombres', width: 200 },
    { field: 'apellido', headerName: 'Apellidos', width: 200 },
    { field: 'genero', headerName: 'Genero', width: 150 },
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

  const handleSubmit = (values: ProfesorType) => {
    if(modificando){
      modificarProfesor(values)
      .then((profesorModificado) =>{
        const listaActualizada = profesoresList.map(item =>
          item.id === profesorModificado.id ? profesorModificado : item);
          setProfesoresList(listaActualizada);
      })
      .catch((error) =>{
        console.log("Ocurrio un error: ", error);
      });
      //alert(JSON.stringify(alumno));
    }else{
      crearProfesor(values)
      .then((profesorCreado) => {
        setProfesoresList((profesoresList) => ([...profesoresList,profesorCreado]));
      })
      .catch((error) =>{
        console.log("Ocurrio un error: ", error);
      })
      //alert(JSON.stringify(values));
    }
    handleClose();
  }

  const handleSelect = (event: React.MouseEvent, cellValues: GridRenderCellParams) =>{
    const profesorSeleccionado: ProfesorType = {...cellValues.row};
    alert(JSON.stringify(profesorSeleccionado));
    setProfesor(profesorSeleccionado);
    setModificando(true);
    handleOpen();
  }

  const handleDelete = (event: React.MouseEvent, cellValues: GridRenderCellParams) =>{
    const profesorSeleccionado: ProfesorType = {...cellValues.row};
    eliminarProfesor(profesorSeleccionado)
    .then(() => {
      setProfesoresList(profesoresList.filter(item => item.id !== profesorSeleccionado.id));

    }).catch((error) =>{
      console.log("Ocurrio un error: ", error);
    });
  }
  const resetValues=()=>{
    setProfesor(defaultValuesProfesor);
  }

  const handleNuevoProfesor = () =>{
    setModificando(false);
    resetValues();
    handleOpen();
  }

  useEffect(() => {
    getProfesores()
    .then((datos) => setProfesoresList(datos))
    .catch((error) => console.log('Hubo un error: ', error));
  }, []);
  
  return (
    <>
      <Container sx={{ py: 1 }} maxWidth="lg">
        <Card sx={{ p: 2 }} >
          <CardContent>
            <BackMenu titulo='Profesores' />
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
                <Button variant='contained' size='medium' color='info' endIcon={<Add />} onClick={handleNuevoProfesor} >Registrar nuevo Profesor</Button>
              </Stack>
              <Grid2 sx={{ mt: 2 }} >
                <TablaDatos columnas={columnasDataTable} filas={profesoresList} />
                <ModalABC open={modalAbierto} entidad={profesor}  title='Profesor' onClose={handleClose} onSubmit={handleSubmit} modificando={modificando}>
                  <FormProfesor modificando={modificando} />
                </ModalABC>
              </Grid2>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </>
  )
}

export default Profesor;