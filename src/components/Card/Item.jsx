import {useState} from 'react';
import './Item.css';

const Item = ({ producto }) => {
 
  const [expandido, setExpandido] = useState(false);

  if (!producto) {
    return <div className="product-card">Cargando producto...</div>;
  }

  
  const limiteCaracteres = 100;
  const descripcionOriginal = producto?.description || '';
  const esLargo = descripcionOriginal.length > limiteCaracteres;

  
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

export default Item;
