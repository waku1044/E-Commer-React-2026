import { Link } from 'react-router-dom';
import './inicio.css';
import Carrusel from '../../components/carrusel/Carrusel.jsx';


const Inicio = ()=>{

const marcas = ['Nike', 'Adidas', 'Apple', 'Samsung', 'Sony', 'Puma', 'LG', 'Asus'];

    return(
        <>
        <div className="inicio-container">
      
          <section className="hero-section">
            <div className="hero-content">
              <h1 >Todo tu estilo. Todo lo que buscas.</h1>
              <p>Bienvenido a TalentoStore. Descubre productos seleccionados para potenciar tu día a día con envíos a todo el país.</p>
              <Link to="/productos" className="btn-hero">
                Ver Catálogo 🛒
              </Link>
            </div>
          </section>

     
          <section className="about-section">
            <h2>¿Qué es TalentoStore?</h2>
              <p>En TalentoStore creemos que cada persona tiene un potencial único. Por eso, no somos una tienda común; seleccionamos cuidadosamente productos que te inspiran, te conectan y te ayudan a alcanzar tus metas diarias. Desde las herramientas tecnológicas que facilitan tu trabajo, hasta el estilo que define tu personalidad.</p>
          </section>

     
          <div className="marcas-slider">
            <div className="marcas-track">
              {/* Primer grupo de marcas */}
              {marcas.map((marca, index) => (
              <div className="marca-item" key={`orig-${index}`}>{marca}</div>
              ))}
              {/* Segundo grupo (Duplicado idéntico para crear el efecto infinito) */}
              {marcas.map((marca, index) => (
              <div className="marca-item" key={`dup-${index}`}>{marca}</div>
              ))}
            </div>
          </div>

          <div className="banner-bienvenida">
            <div className="banner-bienvenida-card">
              <h4>Descubre el potencial de TalentoStore 🚀</h4> 
              <p>No vendemos solo productos, te traemos las herramientas y el estilo que necesitas para hacer brillar tu talento. Explora nuestras categorías y encuentra exactamente lo que estás buscando para dar el siguiente paso.</p>
              <p>👇 Empieza a explorar.</p>
            </div>
          </div>

              <Carrusel />
        </div>
            
        </>
    )
};

export default Inicio;