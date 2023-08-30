import Button from '@mui/material/Button';
import React from 'react'
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';

const BackMenu = ({ titulo = 'Mantenimiento' }: { titulo: string }) => {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Typography variant="h4" color="inherit"  >
                    {titulo}
                </Typography>
                <Button component={Link} to="/" size="medium" color='info' variant='outlined' startIcon={<ArrowBackIcon />}>Regresar al menu principal</Button>
            </Box>
            <Divider orientation="horizontal" flexItem sx={{mt:2}} />

        </>
    )
}

export default BackMenu;