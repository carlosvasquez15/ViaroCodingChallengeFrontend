import React, { useEffect, useState } from 'react'
import BackMenu from '../../menu/BackMenu'
import { GradoType } from '../../models/GradoType';
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { Button, Card, CardContent, Container, Grid, Stack, TextField } from '@mui/material';
import { crearAsignatura, crearGrado, eliminarAsignatura, eliminarGrado, getAlumnos, getAsignaturas, getGrados, getProfesores, modificarAsignatura, modificarGrado } from '../../services/apiService';
import Grid2 from '@mui/material/Unstable_Grid2';
import { Add, Search } from '@mui/icons-material';
import TablaDatos from '../base/TablaDatos';
import ModalABC from '../base/ModalABC';
import FormAsignacion from './FormAsignacion';
import { AsignaturaType } from '../../models/AsignaturaType';
import { AlumnoType } from '../../models/Alumno.type';

const Asignacion = () => {
  const [modalAbierto, setModalAbierto] = useState(false);
  const [modificando, setModificando] = useState(false);
  const [asignaturaList, setAsignaturaList] = useState<AsignaturaType[]>([]);
  const [alumnosList, setAlumnosList] = useState<AlumnoType[]>([]);
  const [gradoList, setGradosList] = useState<GradoType[]>([]);
  const [textoBusqueda, setTextoBusqueda] = useState("");
  const defaultValuesAsignatura = { id: 0, alumnoId: '', gradoId: '', seccion: '' };
  const [asignatura, setAsignatura] = useState<AsignaturaType>(defaultValuesAsignatura);

  const columnasDataTable: GridColDef[] = [
    { field: 'id', headerName: 'ID Grado', width: 175 },
    { field: 'alumnoId', headerName: 'Alumno', width: 200 },
    { field: 'gradoId', headerName: 'Grado', width: 250 },
    { field: 'seccion', headerName: 'Seccion', width: 200 },
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

  const handleSubmit = (values: AsignaturaType) => {
    //alert(JSON.stringify(values));
    if (modificando) {
      modificarAsignatura(values)
        .then((asignaturaModificada) => {
          const listaActualizada = asignaturaList.map(item =>
            item.id === asignaturaModificada.id ? asignaturaModificada : item);
          setAsignaturaList(listaActualizada);
        })
        .catch((error) => {
          console.log("Ocurrio un error: ", error);
        });
    } else {
      crearAsignatura(values)
        .then((asignaturaCreada) => {
          setAsignaturaList((asignaturaList) => ([...asignaturaList, asignaturaCreada]));
        })
        .catch((error) => {
          console.log("Ocurrio un error: ", error);
        })
    }
    handleClose();
  }

  const handleSelect = (event: React.MouseEvent, cellValues: GridRenderCellParams) => {
    const asignaturaSeleccionada: AsignaturaType = { ...cellValues.row };
    //alert(JSON.stringify(asignaturaSeleccionada));
    setAsignatura(asignaturaSeleccionada);
    setModificando(true);
    handleOpen();
  }

  const handleDelete = (event: React.MouseEvent, cellValues: GridRenderCellParams) => {
    const asignaturaSeleccionada: AsignaturaType = { ...cellValues.row };
    eliminarAsignatura(asignaturaSeleccionada)
      .then(() => {
        setAsignaturaList(asignaturaList.filter(item => item.id !== asignaturaSeleccionada.id));
      }).catch((error) => {
        console.log("Ocurrio un error: ", error);
      });
  }

  const resetValues = () => {
    setAsignatura(defaultValuesAsignatura);
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

    getAlumnos()
    .then((datos) => {setAlumnosList(datos);})
    .catch((error) => console.log('Hubo un error: ', error));

    getAsignaturas()
    .then((datos) => {setAsignaturaList(datos);  console.log(datos)})
    .catch((error) => console.log('Hubo un error: ', error));
  }, []);

  return (
    <>
      <Container sx={{ py: 1 }} maxWidth="lg">
        <Card sx={{ p: 2 }} >
          <CardContent>
            <BackMenu titulo='Asignaturas' />
            <Grid minHeight={300} mt={2}>
              <Stack alignItems="center" direction="row" sx={{ pt: 2, pb: 2 }}>
                <Grid2 container spacing={3} md={12}>
                  <Grid2 xs={12} md={6} >
                    <TextField label="Ingrese nombre" value={textoBusqueda} onChange={(event) => (setTextoBusqueda(event.target.value))} color='info' size='small' fullWidth />
                  </Grid2>
                  <Grid2 xs={12} md={3} >
                    <Button size="medium" color='info' variant='contained' startIcon={<Search />}>Buscar</Button>
                  </Grid2>
                </Grid2>
              </Stack>

              <Stack direction={"row-reverse"}>
                <Button variant='contained' size='medium' color='info' endIcon={<Add />} onClick={handleNuevoGrado} >Registrar Nueva Asignatura</Button>
              </Stack>
              <Grid2 sx={{ mt: 2 }} >
                <TablaDatos columnas={columnasDataTable} filas={asignaturaList} />
                <ModalABC open={modalAbierto} entidad={asignatura}  title='Asignación' onClose={handleClose} onSubmit={handleSubmit} modificando={modificando}>
                  <FormAsignacion modificando={modificando} alumnoList={alumnosList} gradoList={gradoList} />
                </ModalABC>
              </Grid2>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </>

  )
}

export default Asignacion;