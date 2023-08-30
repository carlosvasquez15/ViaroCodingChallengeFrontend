import { AppBar, Box, Button, Card, CardActions, CardContent, CardMedia, Container, CssBaseline, Grid, Stack, Toolbar, Typography } from '@mui/material';
import { FC, ReactNode } from 'react';
import CameraIcon from '@mui/icons-material/PhotoCamera';


interface LayoutProps {
    children: ReactNode;
}

const MenuLayout: FC<LayoutProps> = (props) => {
  const {children} = props; 
 

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '50vh', backgroundColor: '#F4F4F6' }}>
      <AppBar position="fixed">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Viaro Networks - Coding Challenge
          </Typography>
          <Typography variant="h6" color="inherit" noWrap sx={{ marginLeft: 'auto' }}>
            Carlos Vasquez
          </Typography>
        </Toolbar>
      </AppBar>

      <Box sx={{ flexGrow: 1 }}>
        <Container component="main" maxWidth="lg" sx={{mt:12}}>
          <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
           Mantenimiento de Escuela
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Bienvenido al portal de la Escuela, aquí podrás administrar los profesores, alumnos, grados y asignaturas de estudiantes. Puedes seleccionar la opción que necesites.
          </Typography>
        </Container>
      </Box>

      <Container component="main" sx={{ py: 8, }} maxWidth="lg">
        <Grid container spacing={4}>
          {children}  
        </Grid>
       
      </Container>

      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
      </Box>
    </Box>
  );
}

export default MenuLayout;
