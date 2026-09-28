import './Layout.css';
import { Outlet } from 'react-router-dom';
import Nav from '../Nav/Nav.jsx';
import Footer from '../Footer/Footer.jsx';


const Layout = ()=>{
    return (

    <div className="app-container"> 
        <Nav />
        <main>
            <Outlet />
        </main>
        <Footer />
    
  </div>
    )
};

export default Layout;