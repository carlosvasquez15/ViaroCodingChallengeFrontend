import { AppBar, Box, Button, Card, CardActions, CardContent, CardMedia, Container, CssBaseline, Grid, Stack, Toolbar, Typography } from '@mui/material';
import React, { FC, ReactNode } from 'react';
import CameraIcon from '@mui/icons-material/PhotoCamera';

interface LayoutProps {
    children: ReactNode;
}

const MenuLayout: FC<LayoutProps> = (props) => {
  const {children} = props; 
 

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="relative">
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
        <Container component="main" maxWidth="md" sx={{mt:5}}>
          <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
           Mantenimiento de Escuela
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don&apos;t simply skip over it entirely.
          </Typography>
          <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
            <Button variant="contained">Main call to action</Button>
            <Button variant="outlined">Secondary action</Button>
          </Stack>
        </Container>
      </Box>

      <Container sx={{ py: 8 }} maxWidth="md">
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
