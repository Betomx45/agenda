import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography, IconButton } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';


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