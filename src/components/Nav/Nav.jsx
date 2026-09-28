import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  // Estado para abrir y cerrar el menú móvil
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" onClick={() => setIsOpen(false)}>🛍️ TalentoStore</Link>
      </div>

      {/* Botón Hamburguesa */}
      <button 
        className={`navbar-toggle ${isOpen ? 'open' : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {/* Enlaces de navegación */}
      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Bienvenida</Link></li>
        <li><Link to="/productos" onClick={() => setIsOpen(false)}>Productos</Link></li>
        <li><Link to="/carrito" onClick={() => setIsOpen(false)}>Carrito</Link></li>
        <li><Link to="/perfil" onClick={() => setIsOpen(false)}>Perfil</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;
