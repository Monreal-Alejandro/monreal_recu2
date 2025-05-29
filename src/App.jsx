import React from "react";
import { Link, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home";
import Informacion from "./pages/informacion";
import Servicios from "./pages/servicios";
import Contacto from "./pages/contacto";
import logo from "/img/logo.png"; // Asegúrate que la ruta sea correcta
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  const location = useLocation();

  const menuItems = [
    { to: "/", label: "Inicio" },
    { to: "/informacion", label: "Información" },
    { to: "/servicios", label: "Servicios" },
    { to: "/contacto", label: "Contacto" },
  ];

  return (
    <div style={styles.container}>
      {/* NAV CON LOGO Y TEXTO */}
      <nav style={styles.nav}>
        <div style={styles.navContent}>
          <Link to="/" style={styles.logoContainer}>
            <img src={logo} alt="Logo" style={styles.logo} />
            <div style={styles.logoText}>
              <span style={styles.logoTitle}>Cryold</span>
              <span style={styles.logoSubtitle}>
                Centro de Rehabilitación<br />
                Ortopedia y Lesiones Deportivas
              </span>
            </div>
          </Link>
          <div style={styles.menu}>
            {menuItems.map(({ to, label }) => {
              const isActive = location.pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  style={{
                    ...styles.menuItem,
                    ...(isActive ? styles.menuItemActive : {}),
                  }}
                >
                  {label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* CONTENIDO */}
      <div style={styles.content}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/informacion" element={<Informacion />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>

      {/* REDES SOCIALES */}
      <div style={styles.floatingButtons}>
        <a
          href="https://www.facebook.com/tu_pagina"
          target="_blank"
          rel="noopener noreferrer"
          style={{ ...styles.bubble, bottom: 90 }}
        >
          <img
            src="https://img.icons8.com/fluency/48/facebook-new.png"
            alt="Facebook"
            style={{ width: 32, height: 32 }}
          />
        </a>
        <a
          href="https://wa.me/5211234567890"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.bubble}
        >
          <img
            src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
            alt="WhatsApp"
            style={{ width: 32, height: 32 }}
          />
        </a>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#fdfdfd",
  },
  nav: {
    width: "100%",
    padding: "10px 20px",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    backdropFilter: "blur(10px)",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    boxShadow: "0 1px 10px rgba(0,0,0,0.05)",
    display: "flex",
    justifyContent: "center",
  },
  navContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: "1200px",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
  },
  logo: {
    height: 45,
    marginRight: 10,
  },
  logoText: {
    display: "flex",
    flexDirection: "column",
    lineHeight: 1.2,
  },
  logoTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  logoSubtitle: {
    fontSize: 12,
    color: "#666",
  },
  menu: {
    display: "flex",
    gap: 25,
    alignItems: "center",
  },
  menuItem: {
    padding: "8px 16px",
    border: "2px solid transparent",
    borderRadius: "30px",
    textDecoration: "none",
    color: "#333",
    fontWeight: 500,
    fontSize: 16,
    transition: "all 0.3s ease",
  },
  menuItemActive: {
    border: "2px solid #0077ff",
    color: "#0077ff",
    backgroundColor: "#eaf4ff",
  },
  content: {
    padding: "40px 20px",
    flex: 1,
  },
  floatingButtons: {
    position: "fixed",
    right: 20,
    bottom: 20,
    zIndex: 1000,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: 10,
  },
  bubble: {
    backgroundColor: "#fff",
    borderRadius: "50%",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    width: 50,
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "transform 0.3s ease",
    textDecoration: "none",
  },
};

export default App;
