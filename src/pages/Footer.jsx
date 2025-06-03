import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerSection}>
        <h3 style={styles.footerTitle}>Redes Sociales</h3>
        <div style={styles.socialIcons}>
          <a href="https://wa.me/tuNumero" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
            <img src="https://img.icons8.com/color/48/000000/whatsapp--v1.png" alt="WhatsApp" style={styles.icon} />
          </a>
          <a href="https://facebook.com/tuPagina" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
            <img src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="Facebook" style={styles.icon} />
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
  );
};

const styles = {
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

export default Footer;
