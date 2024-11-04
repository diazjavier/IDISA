import {
  NewspaperIcon,
  BriefcaseIcon,
  GlobeAltIcon,
  // FaceSmileIcon,
  // ChartBarSquareIcon,
  // CursorArrowRaysIcon,
  // DevicePhoneMobileIcon,
  // AdjustmentsHorizontalIcon,
  // SunIcon,
} from "@heroicons/react/24/solid";

import grupo_1 from "../../public/img/grupo_1.jpg";

const quienesSomos = {
  reference: "about",
  preTitle: "Sobre nosotros",
  title: "Quiénes somos",
  desc: "Nuestro equipo está formado por profesionales de primer nivel en áreas como epidemiología, salud pública, economía de la salud y tecnología. Nuestra misión es asegurar que los estudios que realizamos contribuyan al bienestar de la población, sin influencias externas. Trabajamos con un compromiso firme por la transparencia, la equidad y la accesibilidad.",
  destination: "/about",
  destinationText: "Conocenos",
};

const quienesSomos2 = {
  reference: "about",
  preTitle: "Independencia científica y compromiso social",
  title: "Nuestro equipo",
  desc: "Conocé al grupo de profesionales altamente calificados que colaboran con IDISA",
  //  destination: "/about",
  //  destinationText: "Conocenos",
};

const contactanos = {
  reference: "contact",
  preTitle: "Independencia científica y compromiso social",
  title: "Ponete en contacto con nosotros",
  desc: `Completá el formulario de contacto y envianos tu consulta, envianos un email o llamanos.
          Estamos aquí para ayudarte a conocer más sobre nuestra labor y cómo colaboramos para mejorar la salud pública.`,
  //  destination: "/about",
  //  destinationText: "Conocenos",
};

const servicios = {
  //reference: "about",
  preTitle:
    "Promovemos investigaciones imparciales para políticas de salud más justas",
  title: "Nuestras áreas de Investigación",
  desc: "En IDISA nos enfocamos en proyectos de investigación que impacten directamente en la mejora de las políticas de salud pública. Algunas de nuestras áreas de investigación incluyen:",
  //  destination: "/about",
  //  destinationText: "Conocenos",
};

const proyectosHeader = {
  //reference: "about",
  preTitle: "Investigaciones que impactan en la vida de las personas",
  title: "Nuestros Proyectos",
  desc: "En IDISA, cada proyecto de investigación tiene como objetivo generar cambios reales en la salud pública. Aquí te presentamos algunos de nuestros estudios más recientes que ya están generando impacto",
  //  destination: "/about",
  //  destinationText: "Conocenos",
};

const areas = {
  data: [
    {
      img: "/img/politicas.jpg",
      title: "Políticas de salud",
      text: "Apoyamos la creación de políticas basadas en evidencia científica que promuevan la accesibilidad y universalidad de la asistencia sanitaria.",
      destination: "/",
    },
    {
      img: "/img/estadistica.jpg",
      title: "Epidemiología y salud pública",
      text: "Realizamos estudios sobre la prevención de enfermedades y el acceso a tratamientos de calidad.",
      destination: "/",
    },
    {
      img: "/img/economia3.jpg",
      title: "Economía de la salud",
      text: "Analizamos cómo mejorar la eficiencia en los recursos sanitarios para reducir los desperdicios y optimizar las intervenciones.",
      destination: "/",
    },
  ],
};

const actividades = {
  title: "Nuestras actividades",
  desc: "En IDISA, creemos en la ciencia independiente como herramienta para mejorar la vida de las personas. Nuestras investigaciones no solo buscan resultados, sino también un impacto positivo y tangible en la salud pública.",
  image: grupo_1,
  bullets: [
    {
      title: "Servicios / Áreas de Investigación",
      desc: "Promovemos investigaciones imparciales para políticas de salud más justas.",
      icon: <GlobeAltIcon />,
      destination: "/services",
    },
    {
      title: "Proyectos / Investigaciones",
      desc: "Investigaciones que impactan en la vida de las personas.",
      icon: <BriefcaseIcon />,
      destination: "/projects",
    },
    {
      title: "Blog / Noticias",
      desc: "Últimas Novedades en Salud Pública y Ciencia Independiente.",
      icon: <NewspaperIcon />,
      destination: "/news",
    },
  ],
};

const about = {
  data: [
    {
      imagen: "/img/macchia.jpg",
      nombre: "Alejandro Macchia",
      rol: "Presidente",
      twitter: "https://twitter.com/elonmusk",
      facebook: "https://www.facebook.com/groups/elonmusk1/",
      instagram: "https://www.instagram.com/elonmusk__official__/reels/?hl=en",
      linkedin:
        "https://www.linkedin.com/company/dablim-solu%C3%A7%C3%B5es-gr%C3%A1ficas/",
    },
    {
      imagen: "/img/mautalen.jpg",
      nombre: "Satiago Mautalén",
      rol: "Secretario",
      twitter: "https://x.com/realdonaldtrump?lang=en",
      facebook: "https://www.facebook.com/DonaldTrump/",
      instagram: "https://www.instagram.com/realdonaldtrump/?hl=en",
      linkedin: "https://www.linkedin.com/in/donald-trump-jr-4454b862/",
    },
    {
      imagen: "/img/ferrante.jpg",
      nombre: "Daniel Ferrante",
      rol: "Prosecretario",
      twitter: "https://x.com/DaniFerrante15",
      facebook: "https://es-la.facebook.com/public/Daniel-Ferrante",
      instagram: "https://www.instagram.com/ferrantehdaniel/",
      linkedin:
        "https://www.linkedin.com/in/daniel-ferrante-1b24858a/?originalSubdomain=ar",
    },
    {
      imagen: "/img/baum.jpg",
      nombre: "Analia Baum",
      rol: "Tesorera",
      twitter: "https://x.com/anitabaum?lang=en",
      facebook: "https://es-la.facebook.com/public/Anal%C3%ADa-Baum",
      instagram: "https://www.instagram.com/analiabaum/",
      linkedin: "https://www.linkedin.com/in/analiabaum/?originalSubdomain=ar",
    },
  ],
};

const proyectos = {
  data: [
    {
      //img: "/img/politicas.jpg",
      title: "Plataforma de Transparencia de Precios de Medicamentos",
      items: [
        {
          itemTitle: "Descripción:",
          itemContent:
            "Desarrollar una plataforma en línea que recopile y publique información sobre los precios de medicamentos en diferentes regiones y farmacias.",
        },
        {
          itemTitle: "Objetivos:",
          itemContent:
            "Objetivos: Aumentar la transparencia en la fijación de precios y empoderar a los pacientes para que tomen decisiones informadas sobre sus tratamientos.",
        },
        {
          itemTitle: "Actividades:",
          itemContent:
            "Recolección de datos de precios, desarrollo de la plataforma, campañas de sensibilización para promover su uso.",
        },
      ],
      destination: "/",
    },
    {
      //img: "/img/politicas.jpg",
      title: "Análisis de Costo-Efectividad de Intervenciones de Salud Pública",
      items: [
        {
          itemTitle: "Descripción:",
          itemContent:
            "Realizar un estudio que evalúe el costo-efectividad de diferentes intervenciones de salud pública en un contexto específico (por ejemplo, vacunación, programas de prevención.",
        },
        {
          itemTitle: "Objetivos:",
          itemContent:
            "Proporcionar evidencia para optimizar el uso de recursos en el sistema de salud y mejorar la asignación de presupuesto.",
        },
        {
          itemTitle: "Actividades:",
          itemContent:
            "Recolección de datos sobre costos y resultados de salud, modelado económico y presentación de hallazgos a tomadores de decisiones.",
        },
      ],
      destination: "/",
    },
    {
      //img: "/img/politicas.jpg",
      title: "Evaluación del Impacto del Cambio Climático en la Salud Pública",
      items: [
        {
          itemTitle: "Descripción:",
          itemContent:
            "Desarrollar un estudio para evaluar cómo el cambio climático afecta la salud de la población, enfocándose en enfermedades relacionadas con el clima (como enfermedades respiratorias y vectoriales).",
        },
        {
          itemTitle: "Objetivos:",
          itemContent:
            "Identificar riesgos y proponer estrategias de adaptación para proteger la salud pública ante los efectos del cambio climático.",
        },
        {
          itemTitle: "Actividades:",
          itemContent:
            "Análisis de datos climatológicos y de salud, encuestas a comunidades afectadas y elaboración de un informe con recomendaciones para políticas de salud pública.",
        },
      ],
      destination: "/",
    },
  ],
};

const noticiasHeader = {
  //reference: "about",
  preTitle: "Últimas Novedades en Salud Pública y Ciencia Independiente",
  title: "Noticias relevantes para el ámbito de la salud",
  desc: "Explorá los temas más recientes en investigación de salud pública, políticas de salud y ciencia independiente. En este espacio compartimos nuestras reflexiones, avances y estudios.",
  //  destination: "/about",
  //  destinationText: "Conocenos",
};

const noticias = {
  data: [
    {
      icon: <NewspaperIcon />,
      date: "Viernes 01/09/2024 12:32hs",
      title:
        "El impacto del calentamiento global en la salud pública: ¿Estamos preparados?",
      desc: "Explora cómo el cambio climático está afectando la salud pública en Argentina y el mundo, desde el aumento de enfermedades respiratorias hasta la vulnerabilidad ante desastres naturales. Incluye recomendaciones basadas en investigaciones científicas.",
      destination: "https://www.lanacion.com.ar/deportes/futbol/despues-del-desplante-marcelo-fue-despedido-de-fluminense-escribio-un-mensaje-y-ya-hay-sospechas-de-nid04112024/",
    },
    {
      icon: <NewspaperIcon />,
      date: "Lunes 28/10/2024 17:50hs",
      title:
        "El impacto del calentamiento global en la salud pública: ¿Estamos preparados?",
      desc: "Explora cómo el cambio climático está afectando la salud pública en Argentina y el mundo, desde el aumento de enfermedades respiratorias hasta la vulnerabilidad ante desastres naturales. Incluye recomendaciones basadas en investigaciones científicas.",
      destination: "/",
    },
    {
      icon: <NewspaperIcon />,
      date: "Martes 22/10/2024 09:34hs",
      title:
        "El impacto del calentamiento global en la salud pública: ¿Estamos preparados?",
      desc: "Explora cómo el cambio climático está afectando la salud pública en Argentina y el mundo, desde el aumento de enfermedades respiratorias hasta la vulnerabilidad ante desastres naturales. Incluye recomendaciones basadas en investigaciones científicas.",
      destination: "/",
    },
  ],
};

export {
  quienesSomos,
  quienesSomos2,
  actividades,
  about,
  servicios,
  areas,
  proyectosHeader,
  proyectos,
  noticiasHeader,
  noticias,
  contactanos
};
