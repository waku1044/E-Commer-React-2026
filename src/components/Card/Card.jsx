import React, { useState } from 'react';
import './Card.css';

const Card = ({ producto }) => {
  // Estado para controlar si la descripción está expandida o colapsada
  const [expandido, setExpandido] = useState(false);

  // Mensaje de carga en español si el producto no está listo
  if (!producto) {
    return <div className="product-card">Cargando producto...</div>;
  }

  // Configuración del límite de texto (100 caracteres)
  const limiteCaracteres = 100;
  const descripcionOriginal = producto?.description || '';
  const esLargo = descripcionOriginal.length > limiteCaracteres;

  // Recorta el texto si es largo y no está expandido
  const descripcionAMostrar = expandido 
    ? descripcionOriginal 
    : (esLargo ? `${descripcionOriginal.substring(0, limiteCaracteres)}...` : descripcionOriginal);

  return (
    <article className="product-card">
      <div className="product-image-container">
        <img src={producto?.image} alt={producto?.title} className="product-image" />
      </div>
      
      <section className="product-info">
        <h2 className="product-title">{producto?.title}</h2>
        
        {/* Evento de clic para expandir o contraer */}
        <p 
          className={`product-description ${esLargo ? 'interactivo' : ''}`} 
          onClick={() => esLargo && setExpandido(!expandido)}
          style={{ cursor: esLargo ? 'pointer' : 'default' }}
        >
          {descripcionAMostrar}
          {esLargo && (
            <span className="ver-mas-btn" style={{ color: '#007bff', fontWeight: 'bold', marginLeft: '5px' }}>
              {expandido ? 'Ver menos' : 'Ver más'}
            </span>
          )}
        </p>
        
        <span className="product-price">${producto?.price}</span>
        <button className="product-button">Añadir al carrito</button>
      </section>
    </article>
  );
};

export default Card;
