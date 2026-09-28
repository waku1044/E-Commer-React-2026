import {  Routes, Route } from "react-router-dom";
import Layout from './components/layout/Layout.jsx';
import Productos from './pages/Productos.jsx'; 
import Inicio from './pages/inicio/Inicio.jsx';

function App() {

  return (
    
   
      <Routes>
        <Route element={<Layout />}>

          <Route path='/' element={< Inicio />} />
          <Route path='/productos' element={<Productos />}/>
          <Route path='/producto/:id' element={<h1>Producto con ID</h1>}/>
          <Route path='/carrito' element={<h1>El carrito</h1>}/>
          <Route path='/perfil' element={<h1>Perfil</h1>}/>
        </Route>

      </Routes>
    
  )

};

export default App;
