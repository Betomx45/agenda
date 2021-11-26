import * as React from 'react';
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { DataGrid } from "@mui/x-data-grid";

const columns = [
    {
      field: 'fullName',
      headerName: 'Lista de tareas',
      sortable: false,
      width: 250,
      valueGetter: (params) =>
        `${params.getValue(params.id, 'name') || ''} ${
          params.getValue(params.id, 'lastname') || ''
        }`,
    },
      {
        field: 'company',
        headerName: 'Checkout',
        width: 220,
      },
      {
          field: "id", headerName: "Status", with: 150,
          renderCell: (data) => (
            <IconButton color="primary" aria-label="Eliminar" component="span">
          <DeleteIcon />
          </IconButton>
          )
      }
  ]; 


const Home = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <Typography sx={{textAlign: 'center', fontSize: 30, fontFamily: 'Arial' }}>Inicio</Typography>
                <Paper
        sx={{
            p: 3,
        }}
        >
            <Grid container spacing={3}>
                <Grid item xs={10}>
                  <h3 sx={{ m: 0,}}> Tareas registradas</h3>  
                </Grid>
                <Grid item xs={2}>
                </Grid>
                <Grid item xs={12}>
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                    />
                    </div>
                </Grid>
            </Grid>
        </Paper>

                <Typography variant="body2" color="text.secondary" align="center" sx={{ marginTop: 30 }}>
                    <IconButton sx={{ width: 50, height: 50, bgcolor:'#80d8ff' }}>
                        <AddOutlinedIcon />
                    </IconButton>
                    <br />
                    Agregar Tareas
                </Typography>
            </Container>
        </React.Fragment>
    );
};

export default Home;