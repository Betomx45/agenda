import {Route, Routes} from 'react-router-dom';
//componentes
import Login from './pages/Login';
import Setting from './pages/configuracion';
import Demo from './pages/calendario/Calendar';
import Home from './pages/Inicio';
import Schedule from './pages/Agenda';
import Register from './pages/Registro';

const Rutas = () => (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/configuracion" element={<Setting/>}/>
        <Route path="/calendario" element={<Demo/>}/>
        <Route path="/agendar" element={<Schedule/>}/>
        <Route path="/registro" element={<Register/>}/>

    </Routes>
);
export default Rutas;