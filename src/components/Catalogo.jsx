import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Catalogo = (props) => {
  const [showVideo, setShowVideo] = useState(true);
  const [ocultar, setOcultar] = useState(true);

  useEffect(() => {
    const videoShown = sessionStorage.getItem("videoShown");
    if (videoShown === "true") {
      setShowVideo(false);
    } else {
      const timer = setTimeout(() => {
        setShowVideo(false);
        sessionStorage.setItem("videoShown", "true");
      }, 3700);

      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOcultar(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section className="portada-principal">
        {showVideo ? (
          <video
            className={`video ${ocultar ? "" : "oculto"}`}
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "#A5A8AB",
            }}
            onEnded={() => setShowVideo(false)}
            autoPlay
            muted
            loop
          >
            <source
              src="https://res.cloudinary.com/dtzqfg4nr/video/upload/v1681275790/vecteezy_the-footage-animation-of-countdown-timer-from-5-seconds_666_spmadg_online-video-cutter.com_1_rtbfj0.mp4"
              type="video/mp4"
            />
            Tu navegador no soporta la etiqueta de video.
          </video>
        ) : (
          <div className="portada-principal__content">
            <h1 className="portada-principal__title">
              Bienvenidos a nuestra tienda
            </h1>
            <img
              style={{ width: "100%" }}
              src="https://res.cloudinary.com/dtzqfg4nr/image/upload/v1681276296/192d5154a8a00d0da4670a554fe7eb43_a59hs9.png"
              alt=""
            />

            <p className="portada-principal__subtitle">
              Encuentra las últimas tendencias en deporte para ti
            </p>
            <Link to="/productos">
              <button className="portada-principal__button">
                Ver catálogo
              </button>
            </Link>
          </div>
        )}
      </section>
    </>
  );
};

export default Catalogo;
