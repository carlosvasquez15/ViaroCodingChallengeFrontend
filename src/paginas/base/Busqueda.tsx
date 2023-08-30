import { Search } from '@mui/icons-material';
import { Box, Button, Card, Stack, TextField, Typography } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import React from 'react';


interface BusquedaProps {
    textoBusqueda?: string;
}

const Busqueda: React.FC<BusquedaProps> = ({textoBusqueda = 'Buscar por cualquier campo'}) => {
  return (
    <>
       
        <Stack
          alignItems="center"
          direction="row"
          sx={{ pt: 2, pb:2 }}
        >
          <Grid2
            container
            spacing={3}
            md={12}
          >
            <Grid2
              xs={12}
              md={6}
            >
                <TextField label={textoBusqueda} color='info' size='small' fullWidth/>
            </Grid2>
            <Grid2
              xs={12}
              md={3}
            >
                <Button size="medium" color='info' variant='contained' startIcon={<Search />}>Buscar</Button>    
                </Grid2>
                
                </Grid2>
        </Stack>
      
    </>

  )
}

export default Busqueda