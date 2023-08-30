import { Container, Grid } from '@mui/material'
import React from 'react';


interface BaseCrudProps {
    titulo: string;
    handleAdd: () => void;
}

const BaseCrud = () => {
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          
        </Grid>
       
      </Container>
  )
}

export default BaseCrud