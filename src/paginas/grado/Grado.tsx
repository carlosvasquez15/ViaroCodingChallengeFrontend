import React, { useEffect, useState } from 'react'
import BackMenu from '../../menu/BackMenu'
import { GradoType } from '../../models/GradoType';
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { Button, Card, CardContent, Container, Grid, Stack, TextField } from '@mui/material';
import { crearGrado, eliminarGrado, getGrados, getProfesores, modificarGrado } from '../../services/apiService';
import Grid2 from '@mui/material/Unstable_Grid2';
import { Add, Search } from '@mui/icons-material';
import TablaDatos from '../base/TablaDatos';
import ModalABC from '../base/ModalABC';
import FormGrado from './FormGrado';
import { ProfesorType } from '../../models/ProfesorType';

const Grado = () => {
  const [modalAbierto, setModalAbierto] = useState(false);
  const [modificando, setModificando] = useState(false);
  const [gradosList, setGradosList] = useState<GradoType[]>([]);
  const [profesoresList, setProfesoresList] = useState<ProfesorType[]>([]);
  const [textoBusqueda, setTextoBusqueda] = useState("");
  const defaultValuesGrado = { id: '', nombre: '', profesorId: '' };
  const [grado, setGrado] = useState<GradoType>(defaultValuesGrado);

  const columnasDataTable: GridColDef[] = [
    { field: 'id', headerName: 'ID Grado', width: 175 },
    { field: 'nombre', headerName: 'Nombre', width: 200 },
    { field: 'profesorId', headerName: 'Profesor', width: 250 },
    {
      field: '', headerName: 'Acciones', width: 250,
      renderCell: (cellValues: GridRenderCellParams) => {
        return (
          <>
            <Button color='success' sx={{ m: 2 }} variant='contained' onClick={(event) => { handleSelect(event, cellValues) }}>Ver</Button>
            <Button color='error' variant='contained' onClick={(event) => { handleDelete(event, cellValues) }}>Eliminar</Button>
          </>
        )
      }
    },
  ];

  const handleOpen = () => {
    setModalAbierto(true);
  }

  const handleClose = () => {
    setModalAbierto(false);
    resetValues();
  }

  const handleSubmit = (values: GradoType) => {
    alert(JSON.stringify(values));
    if (modificando) {
      modificarGrado(values)
        .then((gradoModificado) => {
          const listaActualizada = gradosList.map(item =>
            item.id === gradoModificado.id ? gradoModificado : item);
          setGradosList(listaActualizada);
        })
        .catch((error) => {
          console.log("Ocurrio un error: ", error);
        });
    } else {
      crearGrado(values)
        .then((gradoCreado) => {
          setGradosList((gradosList) => ([...gradosList, gradoCreado]));
        })
        .catch((error) => {
          console.log("Ocurrio un error: ", error);
        })
    }
    handleClose();
  }

  const handleSelect = (event: React.MouseEvent, cellValues: GridRenderCellParams) => {
    const gradoSeleccionado: GradoType = { ...cellValues.row };
    alert(JSON.stringify(gradoSeleccionado));
    setGrado(gradoSeleccionado);
    setModificando(true);
    handleOpen();
  }

  const handleDelete = (event: React.MouseEvent, cellValues: GridRenderCellParams) => {
    const gradoSeleccionado: GradoType = { ...cellValues.row };
    eliminarGrado(gradoSeleccionado)
      .then(() => {
        setGradosList(gradosList.filter(item => item.id !== gradoSeleccionado.id));
      }).catch((error) => {
        console.log("Ocurrio un error: ", error);
      });
  }

  const resetValues = () => {
    setGrado(defaultValuesGrado);
  }

  const handleNuevoGrado = () => {
    setModificando(false);
    resetValues();
    handleOpen();
  }

  useEffect(() => {
    getGrados()
      .then((datos) => {setGradosList(datos);  console.log(datos)})
      .catch((error) => console.log('Hubo un error: ', error));

    getProfesores()
    .then((datos) => {setProfesoresList(datos);})
    .catch((error) => console.log('Hubo un error: ', error));
  }, []);

  return (
    <>
      <Container sx={{ py: 1 }} maxWidth="lg">
        <Card sx={{ p: 2 }} >
          <CardContent>
            <BackMenu titulo='Grados' />
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
                <Button variant='contained' size='medium' color='info' endIcon={<Add />} onClick={handleNuevoGrado} >Registrar nuevo Grado</Button>
              </Stack>
              <Grid2 sx={{ mt: 2 }} >
                <TablaDatos columnas={columnasDataTable} filas={gradosList} />
                <ModalABC open={modalAbierto} entidad={grado}  title='Grado' onClose={handleClose} onSubmit={handleSubmit} modificando={modificando}>
                  <FormGrado modificando={modificando} profesoresList={profesoresList}/>
                </ModalABC>
              </Grid2>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </>

  )
}

export default Grado;