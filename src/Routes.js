import {Route, Routes} from 'react-router-dom';
//componentes
import Login from './pages/Login';
import Setting from './pages/configuracion';
import Demo from './pages/calendario/Calendar';
import addWork from './pages/Inicio';

const Rutas = () => (
    <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/configuracion" element={<Setting/>}/>
        <Route path="/calendario" element={<Demo/>}/>
    </Routes>
);
export default Rutas;