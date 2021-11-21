import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography, IconButton } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';


const addWork = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
                <Typography variant="body2" color="text.secondary" align="center" sx={{ marginTop: 30 }}>
                    <IconButton sx={{ width: 50, height: 50 }}>
                        <AddOutlinedIcon />
                    </IconButton>
                    <br />
                    Agregar Tarea
                </Typography>
            </Container>
        </React.Fragment>
    );
};

export default addWork;