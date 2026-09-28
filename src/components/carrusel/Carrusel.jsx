import { useRef } from 'react';
import { Link } from 'react-router-dom';
import './carrusel.css'; 

function CategoriasCarrusel() {
  const carruselRef = useRef(null);

  
  const categorias = [
    { id: 1, nombre: 'Tecnología', img: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=820&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', link: '/productos?cat=tech' },
    { id: 2, nombre: 'Moda & Estilo', img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=420&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', link: '/productos?cat=moda' },
    { id: 3, nombre: 'Hogar & Oficina', img: 'https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', link: '/productos?cat=hogar' },
    { id: 4, nombre: 'Accesorios', img: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', link: '/productos?cat=accesorios' },
    { id: 5, nombre: 'Herramientas', img: 'https://images.unsplash.com/photo-1645651964715-d200ce0939cc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', link: '/productos?cat=herramientas' },
  ];

  
  const scroll = (direction) => {
    if (carruselRef.current) {
      const scrollAmount = 300; 
      carruselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="categorias-section">
      <div className="categorias-header">
        <h2>Explora nuestras categorías</h2>
        <div className="carrusel-botones">
          <button onClick={() => scroll('left')} className="btn-flecha" aria-label="Anterior">◀</button>
          <button onClick={() => scroll('right')} className="btn-flecha" aria-label="Siguiente">▶</button>
        </div>
      </div>

      
      <div className="categorias-carrusel" ref={carruselRef}>
        {categorias.map((cat) => (
          <Link to={cat.link} className="categoria-card" key={cat.id}>
            <div className="categoria-img-container">
              <img src={cat.img} alt={cat.nombre} />
            </div>
            <div className="categoria-info">
              <h3>{cat.nombre}</h3>
              <span>Ver más →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CategoriasCarrusel;
