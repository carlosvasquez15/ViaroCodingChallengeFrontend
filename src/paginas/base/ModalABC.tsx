import { Button, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import React from 'react';

interface ModalABCProps {
    modificando: boolean;
    open: boolean;
    onClose: () => void;
    //onSubmit: () => void;
    title: string;
    children: React.ReactNode;
}

const ModalABC:React.FC<ModalABCProps> = ({open, onClose, title, children, modificando}) => {
  return (
    <Dialog open={open} onClose={onClose}>
        <DialogTitle>
        {title}
        </DialogTitle>
      <DialogContent>
        {children}
      </DialogContent>
      <DialogActions>
            <Button onClick={onClose}> {modificando ? 'Cancelar' : 'Cerrar'} </Button>
            
      </DialogActions>
    </Dialog>
  );
}

export default ModalABC