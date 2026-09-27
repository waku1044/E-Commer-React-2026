import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">🛍️ TalentoStore</Link>
            </div>
            <ul className="navbar-links">
                <li><Link to="/">Bienvenida</Link></li>
                <li><Link to="/productos">Productos</Link></li>
                <li><Link to="/carrito">Carrito</Link></li>
                <li><Link to="/perfil">Perfil</Link></li>
            </ul>
        </nav>
    );
};

export default Nav;
