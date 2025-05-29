import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaFacebookF, FaClock } from "react-icons/fa";

const Contacto = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Contáctanos</h1>

      <div style={styles.alertBox}>
        <strong>Importante:</strong> Los horarios pueden variar en días festivos. Te recomendamos confirmar disponibilidad con antelación.
      </div>

      <section style={styles.section}>
        <h2 style={styles.subtitle}><FaClock /> Horarios de atención</h2>
        <ul style={styles.scheduleList}>
          <li><strong>Lunes a Viernes:</strong> 10:00 am - 14:00 pm / 16:00 pm - 20:00 pm</li>
          <li><strong>Sábados:</strong> 10:00 am - 14:00 pm</li>
        </ul>
      </section>

      <section style={{ ...styles.section, ...styles.locationSection }}>
        <div style={styles.infoLeft}>
          <h3 style={styles.locationTitle}>CRYOLD</h3>
          <p>Dra. Lorena Lara Alvarado</p>
          <p>Blvd. Durango 1231, esq. con Aldama</p>
          <p>Barrio de Tierra Blanca, CP 34139</p>
          <p>Tel. (618) 833 98 63</p>
        </div>
        <div style={styles.mapRight}>
          <iframe
            title="Mapa CRYOLD"
            src="https://www.google.com/maps/embed?..." 
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: 12 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <section style={{ ...styles.section, ...styles.locationSection }}>
        <div style={styles.mapLeft}>
          <iframe
            title="Mapa AMCCI"
            src="https://www.google.com/maps/embed?..."
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: 12 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div style={styles.infoRight}>
          <h3 style={styles.locationTitle}>AMCCI</h3>
          <p>Dr. José Carlos Cháidez Reyes</p>
          <p>Pereyra 404 Ote. Consultorio 510</p>
          <p>Zona Centro, Durango, Dgo.</p>
          <p>Tel. (818) 827 27 72</p>
        </div>
      </section>

     

      {/* Formulario de contacto */}
      <motion.section
        style={styles.section}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 style={styles.subtitle}>Escríbenos un mensaje</h2>
        <p style={{ marginBottom: 20, fontSize: "1rem", color: "#555" }}>
          Completa el siguiente formulario y nos pondremos en contacto contigo lo antes posible.
        </p>

        <form
          style={styles.form}
          action="mailto:ireneleon0730@gmail.com"
          method="POST"
          encType="text/plain"
        >
          <input type="text" name="Nombre" placeholder="Tu nombre" required style={styles.input} />
          <input type="email" name="Correo" placeholder="Correo electrónico" required style={styles.input} />
          <input type="tel" name="Teléfono" placeholder="Número de teléfono" style={styles.input} />
          <textarea name="Mensaje" placeholder="Escribe tu mensaje" required style={{ ...styles.input, minHeight: 120 }}></textarea>
          <button type="submit" style={styles.submitButton}>Enviar mensaje</button>
        </form>
      </motion.section>
    <motion.section
        style={styles.section}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 style={styles.subtitle}>Contáctanos directamente</h2>
        <div style={styles.contactButtons}>
          <a href="https://wa.me/6188339863" target="_blank" rel="noopener noreferrer" style={styles.buttonWhats}>
            <FaWhatsapp size={24} />
            <span style={{ marginLeft: 8 }}>WhatsApp</span>
          </a>
          <a href="https://www.facebook.com/CRYOLD" target="_blank" rel="noopener noreferrer" style={styles.buttonFace}>
            <FaFacebookF size={24} />
            <span style={{ marginLeft: 8 }}>Facebook</span>
          </a>
        </div>
      </motion.section>
  </div>  
  );
};

const styles = {
  container: {
    backgroundColor: "#fff",
    padding: "60px 20px 100px",
    color: "#222",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    maxWidth: 900,
    margin: "0 auto",
    textAlign: "center",
  },
  title: {
    fontSize: "2.8rem",
    fontWeight: "500",
    color: "#003366",
    marginBottom: "25px",
    textAlign: "center",
  },
  alertBox: {
    backgroundColor: "#fffbe6",
    color: "#8a6d3b",
    padding: "15px 20px",
    borderRadius: 10,
    marginBottom: 30,
    fontSize: "1rem",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
    textAlign: "left",
  },
  subtitle: {
    fontSize: "1.8rem",
    fontWeight: "600",
    marginBottom: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    borderBottom: "2px solid #444",
    paddingBottom: 6,
  },
  section: {
    marginBottom: 40,
  },
  scheduleList: {
    fontSize: "1rem",
    lineHeight: 1.6,
    paddingLeft: 0,
    listStyle: "none",
  },
  locationSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 20,
    flexWrap: "wrap",
    textAlign: "left",
  },
  infoLeft: {
    flex: "1 1 45%",
  },
  mapRight: {
    flex: "1 1 50%",
  },
  mapLeft: {
    flex: "1 1 50%",
  },
  infoRight: {
    flex: "1 1 45%",
  },
  locationTitle: {
    fontSize: "1.6rem",
    fontWeight: "700",
    marginBottom: 8,
    color: "#003366",
  },
  contactButtons: {
    display: "flex",
    gap: 20,
    justifyContent: "center",
    flexWrap: "wrap",
  },
  buttonWhats: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#25D366",
    color: "#fff",
    padding: "12px 25px",
    borderRadius: 10,
    fontWeight: "600",
    fontSize: "1.1rem",
    textDecoration: "none",
    boxShadow: "0 4px 10px rgba(37,211,102,0.6)",
  },
  buttonFace: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#1877F2",
    color: "#fff",
    padding: "12px 25px",
    borderRadius: 10,
    fontWeight: "600",
    fontSize: "1.1rem",
    textDecoration: "none",
    boxShadow: "0 4px 10px rgba(24,119,242,0.6)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 15,
    maxWidth: 600,
    margin: "0 auto",
    textAlign: "left",
  },
  input: {
    padding: "12px 15px",
    fontSize: "1rem",
    borderRadius: 10,
    border: "1px solid #ccc",
    width: "100%",
  },
  submitButton: {
    padding: "12px 25px",
    fontSize: "1.1rem",
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#003366",
    border: "none",
    borderRadius: 10,
    cursor: "pointer",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
  },
};

export default Contacto;
