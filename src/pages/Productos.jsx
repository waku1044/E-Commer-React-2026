import Item from '../components/Card/Item.jsx';
import {useState, useEffect } from 'react';


const Productos = ()=>{

  const [productos, setProductos] = useState([]);


  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProductos(data))
      .catch(error => console.error("Error cargando productos:", error))
  }, [])

    return (

        <main className="productos-container"> {/* Usamos <main> por semántica */}
          {productos.map(producto => (
            <Item 
            key={producto.id} 
            producto={producto} 
            />
          ))}
        </main>
    )
};

export default Productos;