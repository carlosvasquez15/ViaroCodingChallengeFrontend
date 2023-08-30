import { Button, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import { Form, Formik } from 'formik';
import React from 'react';
import { AlumnoType } from '../../models/Alumno.type';

interface ModalABCProps {
    entidad: AlumnoType;
    modificando: boolean;
    open: boolean;
    onClose: () => void;
    onSubmit: (values: any) => void;
    title: string;
    children: React.ReactNode;
}

const ModalABC: React.FC<ModalABCProps> = ({ open, onClose, entidad, onSubmit, title, children, modificando }) => {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>
                {title}
            </DialogTitle>

            <Formik
                initialValues={entidad}
                onSubmit={onSubmit}
                enableReinitialize={true}>
                <>
                    <Form>
                        <DialogContent>
                            {children}
                        </DialogContent>
                        <DialogActions>
                            <Button color='error' variant='text' onClick={onClose}> {modificando ? 'Cancelar' : 'Cerrar'} </Button>
                            <Button color='success' variant='contained' type='submit'>{modificando ? 'Guardad cambios' : 'Agregar'}</Button>
                        </DialogActions>
                    </Form>
                </>
            </Formik>
        </Dialog>
    );
}

export default ModalABC