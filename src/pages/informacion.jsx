import React from "react";

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
      image: "/img/fondo3.avif",
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
          }}
        >
          <img src={section.image} alt={section.title} style={styles.sectionImage} />
          <div style={styles.sectionContent}>
            <h2 style={styles.sectionTitle}>{section.title}</h2>
            {section.content && <p style={styles.paragraph}>{section.content}</p>}
            {section.list && (
              <ul style={styles.list}>
                {section.list.map((item, idx) => (
                  <li key={idx} style={styles.listItem}>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}

      {/* Sección de médicos */}
      <div style={styles.doctorsSection}>
        <h2 style={styles.sectionTitle}>Nuestros Especialistas</h2>
        <div style={styles.doctorsGrid}>
          <DoctorCard
            name="Dr. José Carlos Cháidez Reyes"
            image="/img/dr_jose.avif"
            description="Certificado por el Consejo Mexicano de Ortopedia y Traumatología. Alta Especialidad en Cirugía Articular y Artroscopia y en Reconstrucción Articular Cadera y Rodilla. Experiencia en INR, Barcelona, Hospital 450, UJED y múltiples asociaciones."
          />
          <DoctorCard
            name="Dra. Lorena Lara Alvarado"
            image="/img/dra_lorena.avif"
            description="Certificada por el Consejo Mexicano de Medicina de Rehabilitación. Posgrado en Rehabilitación Ortopédica y Deportiva. Experiencia internacional en HSS New York. Amplia formación en terapias modernas."
          />
        </div>
        <h3 style={styles.sectionTitle}>Equipo de Fisioterapeutas</h3>
        <div style={styles.doctorsGrid}>
          <DoctorCard
            name="LTF Erika Michel Díaz Benítez"
            image="/img/michel.avif"
            description="Egresada DIF CREE Durango. Certificaciones en Dynamic Tape, braille, neuromuscular y más."
          />
          <DoctorCard
            name="LTF Salvador Ayala Valles"
            image="/img/salvador.avif"
            description="Especialista en neurorehabilitación, kinesiotaping, movilización neuromeningea."
          />
          <DoctorCard
            name="LTF Diana Sarahi Barraza Frausto"
            image="/img/diana.avif"
            description="Experta en terapia manual, hipopresivos, ejercicios y kinesiotaping."
          />
          <DoctorCard
            name="LTF Gabriela Pérez Saldaña"
            image="/img/gabriela.avif"
            description="Formada en CREE. Punción seca, terapia manual, neuromeningea."
          />
          <DoctorCard
            name="LTF Marco Antonio Pulido Martínez"
            image="/img/marco.avif"
            description="Fisioterapeuta de Leñadores de Durango. Experto en dry needling y kinesiotaping avanzado."
          />
          <DoctorCard
            name="LTF Rocio Luna Leal"
            image="/img/rocio.avif"
            description="Formada en CREE. Experta en masoterapia, punción seca y primeros auxilios."
          />
        </div>
        <h3 style={styles.sectionTitle}>Recepción</h3>
        <div style={styles.doctorsGrid}>
          <DoctorCard
            name="Yessica Monserrath Chávez Ávila"
            image="/img/yessica.avif"
            description="Recepción CRYOLD/AMCCI"
          />
          <DoctorCard
            name="Lic. Fernanda Elizabeth Torrecillas Herrera"
            image="/img/fernanada.avif"
            description="Recepción CRYOLD/AMCCI"
          />
        </div>
      </div>
    </div>
  );
};

const DoctorCard = ({ name, image, description }) => {
  const isFirstTwoDoctors =
    name === "Dr. José Carlos Cháidez Reyes" ||
    name === "Dra. Lorena Lara Alvarado";

  const imageStyle = isFirstTwoDoctors
    ? styles.doctorImage
    : {
        ...styles.doctorImage,
        maxWidth: "220px",
        aspectRatio: "3 / 3",
      };

  return (
    <div style={styles.doctorCard}>
      <img src={image} alt={name} style={imageStyle} />
      <h4 style={styles.doctorName}>{name}</h4>
      <p style={styles.doctorDescription}>{description}</p>
    </div>
  );
};

const styles = {
  container: {
    padding: "30px 20px 60px", // Menos padding arriba para subir el título y contenido
    textAlign: "center",
  },
  mainTitle: {
    fontSize: "2.8rem",     // Tamaño más discreto
    fontWeight: "500",      // menos peso para discreción
    color: "#003366",
    marginBottom: "25px",   // Menor margen para que quede más compacto y arriba
  },
  sectionContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "40px",
    marginBottom: "60px",
    flexWrap: "wrap",
  },
  sectionImage: {
    width: "100%",
    maxWidth: "500px",
    borderRadius: "16px",
    objectFit: "cover",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  },
  sectionContent: {
    maxWidth: "600px",
    textAlign: "justify",
  },
  sectionTitle: {
    fontSize: "2rem",
    fontWeight: "600",
    color: "#003366",
    marginBottom: "20px",
  },
  paragraph: {
    fontSize: "1rem",
    color: "#444",
    lineHeight: "1.6",
  },
  list: {
    marginTop: "20px",
    paddingLeft: "20px",
    textAlign: "left",
    color: "#444",
  },
  listItem: {
    marginBottom: "8px",
  },
  doctorsSection: {
    paddingTop: "60px",
    backgroundColor: "#fff",
  },
  doctorsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "30px",
    padding: "20px",
  },
  doctorCard: {
    background: "#f9fbff",
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.05)",
    textAlign: "center",
  },
  doctorImage: {
    width: "100%",
    maxWidth: "300px",
    aspectRatio: "4 / 3",
    objectFit: "cover",
    borderRadius: "15px",
    marginBottom: "15px",
    filter: "drop-shadow(1px 2px 4px rgba(0,0,0,0.12))",
  },
  doctorName: {
    fontSize: "1.3rem",
    fontWeight: "600",
    marginBottom: "10px",
    color: "#222",
  },
  doctorDescription: {
    fontSize: "0.9rem",
    color: "#555",
    lineHeight: 1.4,
  },
};

export default Informacion;
