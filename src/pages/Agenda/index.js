import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { Button } from '@material-ui/core';
import InputLabel from '@mui/material/InputLabel';

const Schedule = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography sx={{ textAlign: 'center', fontSize: 30, fontFamily: 'Arial' }}>Agendar</Typography>
        <Box sx={{ marginTop: 10 }}>
          <Stack component="form" noValidate spacing={3}>
          <TextField fullWidth label="Nombre de la tarea:" id="fullWidth" />
            <TextField
              id="date"
              label="Fecha de inicio:"
              type="date"
              sx={{ width: 550}}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="date"
              label="Finalizar:"
              type="date"
              sx={{ width: 550}}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Seleccionar</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Seleccionar"
          onChange={handleChange}
        >
          <MenuItem value={10}>Siempre</MenuItem>
          <MenuItem value={20}>Nunca</MenuItem>
        </Select>
      </FormControl>
          </Stack>
          <Box sx={{marginTop:8, display:'flex', justifyContent:'space-between'}}>
          <Button variant="contained" >Cancelar</Button>
          <Button variant="contained">Guardar</Button>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Schedule;