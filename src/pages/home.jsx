import React, { useEffect, useState, useRef } from "react";
import logo from "/img/logo.png";
import fondo1 from "/img/fondo1.avif";

// Componente para animar el conteo de números
const AnimatedNumber = ({ value, duration = 2000, prefix = "", suffix = "" }) => {
  const [count, setCount] = useState(0);
  const startTimestamp = useRef(null);

  useEffect(() => {
    const step = (timestamp) => {
      if (!startTimestamp.current) startTimestamp.current = timestamp;
      const progress = timestamp - startTimestamp.current;
      const progressRatio = Math.min(progress / duration, 1);
      setCount(Math.floor(progressRatio * value));

      if (progress < duration) {
        requestAnimationFrame(step);
      } else {
        setCount(value); // valor final exacto
      }
    };
    requestAnimationFrame(step);

    return () => {
      startTimestamp.current = null;
    };
  }, [value, duration]);

  return (
    <span>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const Home = () => {
  return (
    <div style={styles.container}>
      <img src={logo} alt="Cryold Logo" style={styles.logo} />
      <h1 style={styles.title}>Bienvenido a Cryold</h1>
      <p style={styles.subtitle}>
        Centro de Rehabilitación Ortopedia y Lesiones Deportivas
      </p>

      {/* SECCIÓN DE BENEFICIOS */}
      <div style={styles.featuresSection}>
        <h2 style={styles.featuresTitle}>¿Por qué elegir Cryold?</h2>
        <div style={styles.featuresGrid}>
          <div style={styles.featureBox}>
            <img
              src="https://img.icons8.com/ios-filled/50/4a90e2/physical-therapy.png"
              alt="Terapia"
            />
            <p>Tratamientos personalizados</p>
          </div>
          <div style={styles.featureBox}>
            <img
              src="https://img.icons8.com/ios-filled/50/4a90e2/doctor-male.png"
              alt="Especialistas"
            />
            <p>Especialistas certificados</p>
          </div>
          <div style={styles.featureBox}>
            <img
              src="https://img.icons8.com/ios-filled/50/4a90e2/clock.png"
              alt="Rápido"
            />
            <p>Atención rápida y eficiente</p>
          </div>
          <div style={styles.featureBox}>
            <img
              src="https://img.icons8.com/ios-filled/50/4a90e2/like.png"
              alt="Resultados"
            />
            <p>Resultados comprobados</p>
          </div>
        </div>
      </div>

      {/* CONTADORES CON ANIMACIÓN */}
      <div style={styles.statsContainer}>
        <div>
          <h3 style={styles.statsNumber}>
            <AnimatedNumber value={1500} prefix="+" />
          </h3>
          <p>Pacientes Atendidos</p>
        </div>
        <div>
          <h3 style={styles.statsNumber}>
            <AnimatedNumber value={10} />
          </h3>
          <p>Años de experiencia</p>
        </div>
        <div>
          <h3 style={styles.statsNumber}>
            <AnimatedNumber value={5} />
          </h3>
          <p>Especialistas</p>
        </div>
      </div>

      {/* HERO MOTIVACIONAL */}
      <div style={styles.hero}>
        <h2 style={{ fontSize: "2rem", marginBottom: "10px" }}>
          ¡Recupera tu bienestar hoy!
        </h2>
        <p style={{ fontSize: "1.1rem" }}>
          Atención profesional en ortopedia y rehabilitación física
        </p>
        <a
          href="https://calendly.com/cryold/consulta"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.heroButton}
        >
          Agenda tu cita
        </a>
      </div>

      {/* TESTIMONIOS */}
      <div style={styles.testimonials}>
        <h2 style={{ color: "#003366", marginBottom: "30px" }}>
          Testimonios de nuestros pacientes
        </h2>
        <div style={styles.testimonialGrid}>
          <div style={styles.testimonialCard}>
            <p>"Recuperé movilidad en mi rodilla mucho antes de lo esperado. ¡Gracias Cryold!"</p>
            <strong>— Laura R.</strong>
          </div>
          <div style={styles.testimonialCard}>
            <p>"La atención fue muy humana, se nota la experiencia del equipo."</p>
            <strong>— Jorge M.</strong>
          </div>
        </div>
      </div>

      {/* BLOG / NOTICIAS */}
      <div style={styles.blogSection}>
        <h2 style={{ color: "#003366", marginBottom: "30px" }}>Últimas Noticias</h2>
        <div style={styles.blogGrid}>
          <div style={styles.blogCard}>
            <h4>¿Por qué es importante la rehabilitación temprana?</h4>
            <p>Conoce los beneficios de iniciar tratamiento lo antes posible.</p>
          </div>
          <div style={styles.blogCard}>
            <h4>Nueva tecnología en ortopedia</h4>
            <p>Te compartimos nuestros avances más recientes.</p>
          </div>
        </div>
      </div>

      <button style={styles.button} onClick={() => window.location.href = "/informacion"}>
        Conoce más
      </button>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <div style={styles.footerSection}>
          <h3 style={styles.footerTitle}>Redes Sociales</h3>
          <div style={styles.socialIcons}>
            <a
              href="https://wa.me/5216181814809"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              style={styles.socialLink}
            >
              <img
                src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
                alt="WhatsApp"
                style={styles.icon}
              />
            </a>
            <a
              href="https://www.facebook.com/Cryold"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              style={styles.socialLink}
            >
              <img
                src="https://img.icons8.com/color/48/000000/facebook-new.png"
                alt="Facebook"
                style={styles.icon}
              />
            </a>
          </div>
        </div>

        <div style={styles.footerSection}>
          <h3 style={styles.footerTitle}>Contacto Cryold</h3>
          <p>Dra. Lorena Lara Alvarado</p>
          <p>Blvd. Durango 1231, esq. con Aldama</p>
          <p>Barrio de Tierra Blanca, CP 34139</p>
          <p>Tel. (618) 833 98 63</p>
        </div>

        <div style={styles.footerSection}>
          <h3 style={styles.footerTitle}>AMCCI</h3>
          <p>Para servicios de ortopedia avanzada, contáctanos.</p>
          <p>Dr. José Carlos Cháidez Reyes</p>
          <p>Pereyra 404 Ote. Consultorio 510</p>
          <p>Zona Centro, Durango, Dgo</p>
          <p>Tel. (818) 827 27 72</p>
        </div>

        <div style={styles.footerBottom}>
          <p>© {new Date().getFullYear()} Creado por MediQare</p>
        </div>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    width: "100vw",
    padding: "5px 0",
    overflowY: "auto",
    minHeight: "100vh",
    fontFamily: "'Segoe UI', 'Helvetica Neue', sans-serif",
    textAlign: "center",
    margin: "0",
  },
  logo: {
    width: "100px",
    marginBottom: "20px",
  },
  title: {
    fontSize: "2.5rem",
    color: "#002244",
    fontWeight: "600",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "1.1rem",
    color: "#555",
    marginBottom: "40px",
    maxWidth: "600px",
    margin: "0 auto",
  },
  hero: {
    marginTop: "60px",
    marginBottom: "40px",
    padding: "40px 30px",
    backgroundColor: "#002244",
    borderRadius: "10px",
    color: "#ffffff",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  },
  heroButton: {
    display: "inline-block",
    marginTop: "20px",
    backgroundColor: "#ffffff",
    color: "#002244",
    border: "2px solid #ffffff",
    padding: "10px 24px",
    fontWeight: "600",
    fontSize: "1rem",
    borderRadius: "6px",
    cursor: "pointer",
    textDecoration: "none",
  },
  featuresSection: {
    backgroundImage: `linear-gradient(rgba(0, 34, 68, 0.65), rgba(255,255,255,0.85)), url(${fondo1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "50px",
    borderRadius: "10px",
    boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
    marginBottom: "60px",
    marginTop: "60px",
  },
  featuresTitle: {
    fontSize: "1.6rem",
    color: "#ffffff",
    marginBottom: "25px",
  },
  featuresGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    gap: "24px",
  },
  featureBox: {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
    fontSize: "0.95rem",
    color: "#002244",
  },
  statsContainer: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    marginTop: "40px",
    padding: "20px 0",
    backgroundColor: "#d9e5f1",
    borderRadius: "10px",
  },
  statsNumber: {
    color: "#002244",
    fontSize: "2rem",
    fontWeight: "700",
  },
  testimonials: {
    marginTop: "60px",
    padding: "40px 20px",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  testimonialGrid: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "24px",
  },
  testimonialCard: {
    backgroundColor: "#eef3f7",
    padding: "20px",
    borderRadius: "10px",
    maxWidth: "300px",
    fontSize: "0.95rem",
    color: "#002244",
    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
  },
  blogSection: {
    marginTop: "60px",
    padding: "40px 20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
  },
  blogGrid: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  blogCard: {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    maxWidth: "280px",
    textAlign: "left",
  },
  button: {
    marginTop: "40px",
    backgroundColor: "#002244",
    color: "#ffffff",
    padding: "12px 28px",
    fontSize: "16px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "background 0.3s ease",
  },

  footer: {
    marginTop: "60px",
    backgroundColor: "#002244",
    color: "#fff",
    padding: "40px 20px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    gap: "30px",
    borderRadius: "10px 10px 0 0",
    fontSize: "0.9rem",
  },
  footerSection: {
    minWidth: "200px",
    maxWidth: "280px",
    textAlign: "center",
  },
  footerTitle: {
    fontSize: "1.2rem",
    marginBottom: "15px",
    fontWeight: "700",
    borderBottom: "2px solid #d1a980",
    paddingBottom: "5px",
  },
  socialIcons: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
  },
  socialLink: {
    display: "inline-block",
    transition: "transform 0.3s ease",
  },
  icon: {
    width: "32px",
    height: "32px",
  },
  footerBottom: {
    width: "100%",
    marginTop: "30px",
    borderTop: "1px solid #444",
    paddingTop: "20px",
    textAlign: "center",
    fontSize: "0.8rem",
    color: "#bbb",
  },
};

export default Home;
