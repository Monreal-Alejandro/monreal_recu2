import React from "react";

// Subcomponente para cada persona del personal
const PersonalCard = ({ name, role, image }) => (
  <div style={styles.card}>
    <img src={image} alt={name} style={styles.cardImage} />
    <div style={styles.cardContent}>
      <h4 style={styles.cardName}>{name}</h4>
      <p style={styles.cardRole}>{role}</p>
    </div>
  </div>
);

const Informacion = () => {
  const sections = [
    {
      title: "Nuestra Misión",
      content:
        "Proporcionar servicios de calidad para la Rehabilitación de pacientes con enfermedades y secuelas del aparato locomotor así como de lesiones deportivas, con la aplicación de los más avanzados conocimientos científicos y tecnología de vanguardia para obtener los mejores resultados, con un alto sentido humanista y abarcando integralmente los aspectos, físico y ocupacional de cada paciente.",
      image: "/img/fondo2.avif",
    },
    {
      title: "Nuestra Visión",
      content:
        "Ser el grupo de Ortopedia y Rehabilitación de mayor prestigio en la Ciudad de Durango en atención de calidad y calidez a la comunidad. Ser autosustentable y rentable a capacidades alcanzables por la población.",
      image: "/img/fondo3.avif",
    },
    {
      title: "Seguridad",
      content:
        "En todos los procesos de tratamiento evitamos cualquier daño al paciente o a los trabajadores, que puedan derivarse de algún procedimiento médico.",
      image: "/img/fondo4.avif",
    },
    {
      title: "Aseguradoras",
      list: [
        "INBURSA",
        "AXA",
        "Banorte Generalli",
        "Mediacces",
        "Qualitas",
        "Mapfre / Tepeyac",
        "Metlife",
        "Monterrey NY Life",
        "ANA Seguros",
        "GNP",
        "ALLIANZ",
      ],
      image: "/img/aseguradora.jpg",
    },
    {
      title: "Nuestro Personal",
      image: "/img/equipo.avif",
      content:
        "Conoce a los profesionales que conforman nuestro equipo médico y administrativo, comprometidos con tu bienestar.",
    },
    {
      title: "Doctores",
      isPersonalSection: true,
      people: [
        {
          name: "Dr. José Carlos Cháidez Reyes",
          role: "Especialista en Cirugía Articular y Artroscopia",
          image: "/img/dr_jose.avif",
        },
        {
          name: "Dra. Lorena Lara Alvarado",
          role: "Rehabilitación y Terapia Física",
          image: "/img/dra_lorena.avif",
        },
      ],
    },
    {
      title: "Fisioterapeutas",
      isPersonalSection: true,
      people: [
        {
          name: "Marco Hernández",
          role: "Terapista Físico",
          image: "/img/marco.avif",
        },
        {
          name: "Gabriela Torres",
          role: "Apoyo Terapéutico",
          image: "/img/gabriela.avif",
        },
        {
          name: "Michel Aguirre",
          role: "Auxiliar Médico",
          image: "/img/michel.avif",
        },
           {
          name: "Rocío Estrada",
          role: "Administración",
          image: "/img/rocio.avif",
        },
        {
          name: "Diana López",
          role: "Coordinadora de Rehabilitación",
          image: "/img/diana.avif",
        },
        {
          name: "Salvador Pérez",
          role: "Atención al Cliente",
          image: "/img/salvador.avif",
        },
      ],
    },
    {
      title: "Recepcionistas",
      isPersonalSection: true,
      people: [
        {
          name: "Jessica López",
          role: "Recepción y Citas",
          image: "/img/yessica.avif",
        },
        {
          name: "Fernanda Ríos",
          role: "Recepción y Citas",
          image: "/img/fernanada.avif",
        },
     
      ],
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.mainTitle}>Centro de Ortopedia y Rehabilitación</h1>

      {sections.map((section, index) => (
        <div
          key={index}
          style={{
            ...styles.sectionContainer,
            flexDirection: index % 2 === 0 ? "row" : "row-reverse",
            flexWrap: "wrap",
          }}
        >
          {section.image && (
            <img
              src={section.image}
              alt={section.title}
              style={styles.sectionImage}
            />
          )}

          <div
            style={
              section.isPersonalSection
                ? styles.personalSectionContent
                : styles.sectionContent
            }
          >
            <h2 style={styles.sectionTitle}>{section.title}</h2>

            {section.content && (
              <p style={styles.paragraph}>{section.content}</p>
            )}

            {section.list && (
              <ul style={styles.minimalList}>
                {section.list.map((item, idx) => (
                  <li key={idx} style={styles.minimalListItem}>
                    {item}
                  </li>
                ))}
              </ul>
            )}

            {section.people && (
              <div style={styles.cardsContainer}>
                {section.people.map((person, idx) => (
                  <PersonalCard
                    key={idx}
                    name={person.name}
                    role={person.role}
                    image={person.image}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      ))}

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
    padding: "5px 0 0 0",
    margin: "0",
    overflowY: "auto",
    minHeight: "100vh",
    fontFamily: "'Segoe UI', 'Helvetica Neue', sans-serif",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
  },
  mainTitle: {
    fontSize: "2.5rem",
    color: "#002244",
    fontWeight: "600",
    margin: "40px 0",
  },
  sectionContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    padding: "30px 20px",
  },
  sectionImage: {
    maxWidth: "400px",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    margin: "10px",
    flexShrink: 0,
  },
  sectionContent: {
    maxWidth: "600px",
    textAlign: "left",
    padding: "20px",
  },
  personalSectionContent: {
    maxWidth: "1000px",
    textAlign: "left",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  sectionTitle: {
    fontSize: "1.8rem",
    color: "#003366",
    marginBottom: "15px",
  },
  paragraph: {
    fontSize: "1rem",
    color: "#333",
    lineHeight: "1.6",
  },
  minimalList: {
    paddingLeft: "20px",
    color: "#444",
    fontSize: "1rem",
    lineHeight: "1.8",
  },
  minimalListItem: {
    marginBottom: "8px",
  },
  cardsContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    marginTop: "20px",
    justifyContent: "center",
  },
  card: {
    display: "flex",
    width: "320px",
    backgroundColor: "#f9f9f9",
    borderRadius: "12px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    overflow: "hidden",
    transition: "transform 0.3s ease",
  },
  cardImage: {
    width: "100px",
    height: "100px",
    objectFit: "cover",
    borderRadius: "0",
  },
  cardContent: {
    padding: "10px",
    textAlign: "left",
  },
  cardName: {
    fontSize: "1.1rem",
    fontWeight: "600",
    marginBottom: "5px",
  },
  cardRole: {
    fontSize: "0.95rem",
    color: "#555",
  },
  footer: {
    marginTop: "auto",
    backgroundColor: "#002244",
    color: "#fff",
    padding: "40px 20px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    gap: "30px",
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

export default Informacion;
