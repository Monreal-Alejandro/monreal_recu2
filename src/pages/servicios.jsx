import React from "react";
import { motion } from "framer-motion";

const servicios = [
  {
    title: "Diagnóstico y Tratamiento Integral",
    text: "Atención médica especializada en lesiones deportivas, degenerativas y traumáticas del sistema músculo esquelético, con tecnología de vanguardia.",
    image: "/img/servicios1.avif",
  },
  {
    title: "Rehabilitación Física Avanzada",
    text: "Calidad, calidez y atención humana basada en educación médica continua y capacitación constante del equipo de fisioterapia.",
    image: "/img/servicios2.avif",
  },
  {
    title: "Tratamientos Especializados",
    list: [
      "Kinesio Taping",
      "Fluido Terapia",
      "Ultrasonido Terapéutico",
      "Láser Terapia",
      "Electroterapia",
      "Ejercicio Terapéutico",
      "Mecanoterapia",
      "Masaje Terapéutico",
    ],
    image: "/img/servicio5.jpg",
  },
  {
    title: "Microelectrólisis Percutánea (MEP)",
    list: [
      "MEP Sport: Para lesiones deportivas resistentes.",
      "MEP Beauty: Para líneas de expresión y estrías.",
    ],
    image: "/img/servicio4.png",
  },
  {
    title: "Ortopedia y Traumatología",
    list: [
      "Diagnóstico y tratamiento de lesiones deportivas",
      "Enfermedades articulares degenerativas",
      "Artroscopia",
      "Reconstrucción articular (cadera y rodilla)",
      "Lesiones músculo-esqueléticas",
      "Fracturas de extremidades",
    ],
    image: "/img/servicio7.jpg",
  },
];

const debesSaber = [
  {
    title: "¿Qué es el Cartílago Articular?",
    text: "Los extremos de los huesos que forman las articulaciones están recubiertos de un tejido blanco aperlado brillante llamado cartílago articular, su finalidad es disminuir la fricción para permitir la adecuada movilidad de la articulación.",
    image: "/img/cartilago.jpg",
  },
  {
    title: "¿Qué tanta incapacidad puedo tolerar?",
    text: "El dolor es la clave, si este es incapacitante a la mayoría de las actividades de la vida diaria y no cede a analgésicos antiinflamatorios, no debe esperar, es tiempo de visitar a su médico Ortopedista o Rehabilitador.",
    image: "/img/db2.webp",
  },
  {
    title: "¿Qué es la Osteoartrosis? (Desgaste Articular)",
    text: "Es la lesión del cartílago articular de cualquier articulación provocada por el tiempo, el trabajo, actividades físicas, secuelas traumáticas o alteraciones anatómicas.",
    image: "/img/db3.avif",
  },
  {
    title: "¿Qué es la Osteoporosis?",
    text: "Enfermedad silenciosa que debilita los huesos y los hace susceptibles a fracturas, caracterizada por baja densidad ósea y deterioro de la microarquitectura ósea.",
    image: "/img/db4.jpg",
  },
  {
    title: "¿Qué es la lesión del Ligamento Cruzado Anterior (LCA)?",
    text: "Ligamento que controla el movimiento de la rodilla; se lesiona comúnmente en actividades deportivas por movimientos bruscos o impactos.",
    image: "/img/db5.jpg",
  },
  {
    title: "¿Cuándo debo visitar al Médico Rehabilitador u Ortopedista?",
    text: "Ante cualquier lesión con dolor o limitación funcional, no esperar; puede ser una lesión más grave que afecte su calidad de vida.",
    image: "/img/db6.jpg",
  },
];

const videos = [
  "https://www.youtube.com/embed/CrW1wmgzb_I",
  "https://www.youtube.com/embed/VSl6SvH8aMg",
  "https://www.youtube.com/embed/qwayzyaN-YQ",
  "https://www.youtube.com/embed/lYzpvg4lu4Q",
];

const Servicios = () => {
  return (
    <div style={styles.pageWrapper}>
      <section style={styles.container}>
        <h1 style={styles.title}>Servicios que ofrece CRYOLD</h1>
        <div style={styles.grid}>
          {servicios.map((servicio, i) => (
            <motion.div
              key={i}
              style={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(0,0,0,0.15)" }}
            >
              <div style={{ ...styles.image, backgroundImage: `url(${servicio.image})` }} />
              <h3 style={styles.cardTitle}>{servicio.title}</h3>
              {servicio.text && <p style={styles.cardText}>{servicio.text}</p>}
              {servicio.list && (
                <ul style={styles.list}>
                  {servicio.list.map((item, idx) => (
                    <li key={idx} style={styles.listItem}>• {item}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>

        <h2 style={{ ...styles.title, marginTop: 60 }}>Debes Saber</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
          {debesSaber.map((info, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 20,
                alignItems: "center",
                background: "#fff",
                borderRadius: 16,
                padding: 20,
                boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                flexWrap: "wrap",
              }}
            >
              <div style={{ flex: 1, minWidth: 260 }}>
                <h3 style={styles.cardTitle}>{info.title}</h3>
                <p style={styles.cardText}>{info.text}</p>
              </div>
              <div
                style={{
                  width: 260,
                  height: 160,
                  borderRadius: 12,
                  backgroundImage: `url(${info.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </motion.div>
          ))}
        </div>

        <h2 style={{ ...styles.title, marginTop: 60 }}>Videos informativos</h2>
        <div style={{ ...styles.grid, gridTemplateColumns: "1fr 1fr" }}>
          {videos.map((url, i) => (
            <div key={i} style={{ aspectRatio: "16/9", width: "100%" }}>
              <iframe
                width="100%"
                height="100%"
                src={url}
                title={`Video ${i + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </section>

      <footer style={styles.footer}>
        <div style={styles.footerSection}>
          <h3 style={styles.footerTitle}>Redes Sociales</h3>
          <div style={styles.socialIcons}>
            <a href="https://wa.me/5216181814809" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" style={styles.socialLink}>
              <img src="https://img.icons8.com/color/48/000000/whatsapp--v1.png" alt="WhatsApp" style={styles.icon} />
            </a>
            <a href="https://www.facebook.com/Cryold" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={styles.socialLink}>
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
    </div>
  );
};

const styles = {
  pageWrapper: {
    overflowX: "hidden",
  },
  container: {
    maxWidth: 900,
    margin: "50px auto",
    padding: "0 20px",
    fontFamily: "'Raleway', sans-serif",
  },
  title: {
    fontSize: "2.8rem",
    fontWeight: "500",
    color: "#003366",
    marginBottom: "25px",
    textAlign: "center",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 24,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    overflow: "hidden",
    padding: 20,
    cursor: "default",
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 12,
    backgroundSize: "cover",
    backgroundPosition: "center",
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: "1.3rem",
    fontWeight: "600",
    marginBottom: 10,
    color: "#34495e",
  },
  cardText: {
    fontSize: "0.95rem",
    color: "#606f7b",
    marginBottom: 10,
    lineHeight: 1.4,
  },
  list: {
    listStyle: "none",
    paddingLeft: 0,
    margin: 0,
    color: "#4a5568",
    fontSize: "0.9rem",
  },
  listItem: {
    marginBottom: 5,
  },
 footer: {
  marginTop: "auto",
  backgroundColor: "#002244",
  color: "#fff",
  padding: "40px 0",  
  width: "100%",    
  boxSizing: "border-box",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
  gap: "0px",
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

export default Servicios;
