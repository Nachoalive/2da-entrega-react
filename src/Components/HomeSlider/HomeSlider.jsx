import React from "react";
import "./HomeSlider.css";
import complemento from "../../assets/complemento.png";
import creatina from "../../assets/Creatina.png";
import envio from "../../assets/envio.jpg";

function HomeSlider() {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src= {complemento}
            className="d-block w-100 slider-image"
            alt="Oferta 1"
          />
          <div className="carousel-caption d-none d-md-block">
            
            <p></p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={creatina}
            className="d-block w-100 slider-image"
            alt="Oferta 2"
          />
          <div className="carousel-caption d-none d-md-block">
            
            <p>Creatinas Destaca.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={envio}
            className="d-block w-100 slider-image"
            alt="Oferta 3"
          />
          <div className="carousel-caption d-none d-md-block">
            
            <p>Envios en 24 Hrs</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Siguiente</span>
      </button>
    </div>
  );
}

export default HomeSlider;