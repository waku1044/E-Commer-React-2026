import { Link } from 'react-router-dom';
import './Footer.css'



const Footer = ()=>{
    return (
       
    <footer className="main-footer">
        
       
        <div className="footer-top">
            
           
            <div className="footer-column">
                <h3>Contacto y Sedes</h3>
                <p><strong>Sede Central:</strong> Av. Rivadavia 1238, CABA</p>
                <p><strong>Sucursal Norte:</strong> AV. Rocca 456, Campana</p>
                <p><strong>Teléfono:</strong> +123 456 7890</p>
                <p><strong>Email:</strong> contacto@empresa.com</p>
            </div>

            
            <div className="footer-column terminos">
                <h3>Enlaces Legales</h3>
                <ul>
                    <li><Link to="/PolíticasdePrivacidad">Políticas de Privacidad</Link></li>
                    <li><Link to="/Terminos y Condiciones">Términos y Condiciones</Link></li>
                    <li><Link to="/PoliticadeCookies">Política de Cookies</Link></li>
                    <li><Link to="/SoporteTecnico">Soporte Técnico</Link></li>
                </ul>
            </div>

            
            <div className="footer-column">
                <h3>Boletín Informativo</h3>
                <p>Suscríbete para recibir las últimas novedades y ofertas.</p>
                <form className="newsletter-form">
                    <input type="email" placeholder="Tu correo electrónico" required/>
                    <button type="submit">Suscribirse</button>
                </form>
            </div>

        </div>

        
        <div className="footer-team">
            <h3>Nuestro Equipo Directivo</h3>
            <div className="team-grid">
                
               
                <div className="team-card">
                    <div className="card-avatar">👤</div>
                    <h4>Ana Martínez</h4>
                    <p className="role">Directora Ejecutiva</p>
                    <p className="contact-info">ana@empresa.com</p>
                </div>

               
                <div className="team-card">
                    <div className="card-avatar">👤</div>
                    <h4>Walter Gimenez</h4>
                    <p className="role">Director de Tecnología</p>
                    <p className="contact-info">walter@empresa.com</p>
                </div>

               
                <div className="team-card">
                    <div className="card-avatar">👤</div>
                    <h4>Sofía Rodríguez</h4>
                    <p className="role">Gerente de Marketing</p>
                    <p className="contact-info">sofia@empresa.com</p>
                </div>

            </div>
        </div>

        
        <div className="footer-bottom" >
            <p>&copy; 2026 Empresa S.A. Todos los derechos reservados. </p>
        </div>

    </footer>
    );
};

export default Footer;