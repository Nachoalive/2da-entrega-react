import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 SupremeFit - Todos los derechos reservados</p>

        <div className="footer-links">
          <a href="/about">Sobre nosotros</a>
          <a href="/privacy">Política de privacidad</a>
          <a href="/contact">Contáctanos</a>
        </div>

        <div className="footer-social">
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <i className="bi bi-facebook"></i> Facebook
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <i className="bi bi-instagram"></i> Instagram
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
            <i className="bi bi-twitter"></i> Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
