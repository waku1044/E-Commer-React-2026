import './Layout.css';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Productos from '../../pages/Productos'

const LayOut = ()=>{
    <div className="app-container"> {/* Contenedor principal */}
        <Nav />
        <Productos />


        <Footer />
    
  </div>
};

export default LayOut;