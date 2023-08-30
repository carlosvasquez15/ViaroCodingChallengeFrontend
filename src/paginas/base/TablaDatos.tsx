import { DataGrid, GridColDef,GridToolbar } from '@mui/x-data-grid';
import React from 'react';

interface TablaDatosProps{
    columnas: GridColDef[];
    filas: any[];
    handleSelect?: () => void;
    handleDelete?: () => void;
}

const TablaDatos: React.FC<TablaDatosProps> = ({columnas, filas, handleDelete, handleSelect}) => {
  return (
    <>
        <DataGrid 
         rows={filas}
         columns={columnas}
         autoHeight
         initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[10, 20, 50]}
          onRowClick={handleSelect}
          slots={{ toolbar: GridToolbar }} 
          slotProps={{
            toolbar: {
              showQuickFilter: true,
            },
          }}/>
    </>
    

  )
}

export default TablaDatos;