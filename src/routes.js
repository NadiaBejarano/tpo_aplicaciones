// @mui material components
import Icon from "@mui/material/Icon";

// @mui icons

// Pages
import AboutUs from "layouts/pages/landing-pages/about-us";
import ContactUs from "layouts/pages/landing-pages/contact-us";
import Author from "layouts/pages/landing-pages/author";
import Login from "layouts/pages/landing-pages/login";

// Sections
import ClasesAjedrez from "pages/LandingPages/ClasesDeAjedrez";
import ClaseFrances from "pages/LandingPages/ClasesDeFrances";
import ClasesIngles from "pages/LandingPages/ClasesDeIngles/Index";
import ClasesPortugues from "pages/LandingPages/ClasesDePortugues";
import ClasesCanto from "pages/LandingPages/ClasesDeCanto";
import ClasesGuitarra from "pages/LandingPages/ClasesDeGuitarra";
import ClasesTrompeta from "pages/LandingPages/ClasesDeTrompeta";
import FundamentosProgramacion from "pages/LandingPages/FundamentosEnProgramacio";
import CrearCuenta from "pages/LandingPages/CrearCuenta";
import ClasesCocina from "pages/LandingPages/ClasesCocinaBasica";
import CrearServicio from "pages/LandingPages/CrearServicio";
import MensajeDeError from "pages/LandingPages/MensajeDeError";
const routes = [
  {
    name: "Tutorías",
    icon: <Icon>biotech</Icon>,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        collapse: [
          {
            name: "Clases de Matemáticas",
            route: "/pages/landing-pages/about-us",
            component: <AboutUs />,
          },
          {
            name: "Clases de Lengua",
            route: "/pages/landing-pages/contact-us",
            component: <ContactUs />,
          },
          {
            name: "Clases de Geografía",
            route: "/pages/landing-pages/author",
            component: <Author />,
          },
        ],
      },
    ],
  },
  {
    name: "Idiomas",
    icon: <Icon>book</Icon>,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        collapse: [
          {
            name: "Clases De Frances",
            route: "/pages/landing-pages/clase-frances",
            component: <ClaseFrances />,
          },
          {
            name: "Clases De Ingles",
            route: "/pages/landing-pages/clases-ingles",
            component: <ClasesIngles />,
          },
          {
            name: "Clases De Portugués",
            route: "/pages/landing-pages/clases-portugues",
            component: <ClasesPortugues />,
          },
        ],
      },
    ],
  },
  {
    name: "Clases de Música",
    icon: <Icon>lyrics</Icon>,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        collapse: [
          {
            name: "Clases De Canto",
            route: "/pages/landing-pages/clases-canto",
            component: <ClasesCanto />,
          },
          {
            name: "Clases De Guitarra",
            route: "/pages/landing-pages/clases-guitarra",
            component: <ClasesGuitarra />,
          },
          {
            name: "Clases De Trompeta",
            route: "/pages/landing-pages/clases-trompeta",
            component: <ClasesTrompeta />,
          },
        ],
      },
    ],
  },
  {
    name: "Cursos Cortos",
    icon: <Icon>computer</Icon>,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        collapse: [
          {
            name: "Fundamentos En Programación",
            route: "/pages/landing-pages/fundamentos-programacion",
            component: <FundamentosProgramacion />,
          },
          {
            name: "Clases De Cocina Básica",
            route: "/pages/landing-pages/clases-cocina",
            component: <ClasesCocina />,
          },
          {
            name: "Aprende Ajedrez",
            route: "/pages/landing-pages/clases-de-ajedrez",
            component: <ClasesAjedrez />,
          },
        ],
      },
    ],
  },
  {
    name: "Búsqueda",
    icon: <Icon>search</Icon>,
    collapse: [
      {
        name: "Clases Grupales",
        description: "Aprende en grupo",
        dropdown: true,
        collapse: [
          {
            name: "Clases de Matemáticas",
            route: "/pages/landing-pages/about-us",
            component: <AboutUs />,
          },
        ],
      },
      {
        name: "Clases Individuales",
        description: "Acomoda las clases a tu ritmo de estudio",
        dropdown: true,
        collapse: [
          {
            name: "Clases De Canto",
            route: "/pages/landing-pages/clases-canto",
            component: <ClasesCanto />,
          },
          {
            name: "Clases De Guitarra",
            route: "/pages/landing-pages/clases-guitarra",
            component: <ClasesGuitarra />,
          },
          {
            name: "Clases De Trompeta",
            route: "/pages/landing-pages/clases-trompeta",
            component: <ClasesTrompeta />,
          },
          {
            name: "Clases De Frances",
            route: "/pages/landing-pages/clase-frances",
            component: <ClaseFrances />,
          },
          {
            name: "Clases De Ingles",
            route: "/pages/landing-pages/clases-ingles",
            component: <ClasesIngles />,
          },
          {
            name: "Clases De Portugués",
            route: "/pages/landing-pages/clases-portugal",
            component: <ClasesPortugues />,
          },
        ],
      },
      {
        name: "Frecuencia",
        description: "Elige la opción que mejor se acomode a tus horarios",
        dropdown: true,
        collapse: [
          {
            name: "Clases De Frances",
            route: "/pages/landing-pages/clase-frances",
            component: <ClaseFrances />,
          },
          {
            name: "Clases De Canto",
            route: "/pages/landing-pages/clases-canto",
            component: <ClasesCanto />,
          },
          {
            name: "Aprende Ajedrez",
            route: "/pages/landing-pages/clases-de-ajedrez",
            component: <ClasesAjedrez />,
          },
        ],
      },
      {
        name: "Califación",
        description: "Encuentra las clases con mejores reseñas",
        dropdown: true,
        collapse: [
          {
            name: "Mejor Calificadas",
            route: "/pages/landing-pages/clases-portugues",
            component: <ClasesPortugues />,
          },
        ],
      },
      {
        name: "Categorías",
        description: "Encuentra todas las clases en un solo lugar",
        dropdown: true,
        collapse: [
          {
            name: "Clases de Matemáticas",
            route: "/pages/landing-pages/about-us",
            component: <AboutUs />,
          },
          {
            name: "Clases de Lengua",
            route: "/pages/landing-pages/contact-us",
            component: <ContactUs />,
          },
          {
            name: "Clases de Geografía",
            route: "/pages/landing-pages/author",
            component: <Author />,
          },
          {
            name: "Clases de Frances",
            route: "/pages/landing-pages/clase-frances",
            component: <ClaseFrances />,
          },
          {
            name: "Clases de Ingles",
            route: "/pages/landing-pages/clases-ingles",
            component: <ClasesIngles />,
          },
          {
            name: "Clases de Portugués",
            route: "/pages/landing-pages/clases-portugues",
            component: <ClasesPortugues />,
          },
          {
            name: "Clases de Canto",
            route: "/pages/landing-pages/clases-canto",
            component: <ClasesCanto />,
          },
          {
            name: "Clases de Guitarra",
            route: "/pages/landing-pages/contact-us",
            component: <ContactUs />,
          },
          {
            name: "Clases de Trompeta",
            route: "/pages/landing-pages/clases-trompeta",
            component: <ClasesTrompeta />,
          },
          {
            name: "Fundamentos En Programación",
            route: "/pages/landing-pages/fundamentos-programacion",
            component: <FundamentosProgramacion />,
          },
          {
            name: "Clases De Cocina Básica",
            route: "/pages/landing-pages/clases-cocina",
            component: <ClasesCocina />,
          },
          {
            name: "Aprende Ajedrez",
            route: "/pages/landing-pages/clases-de-ajedrez",
            component: <ClasesAjedrez />,
          },
        ],
      },
    ],
  },
  {
    collapse: [
      {
        route: "/pages/landing-pages/login",
        component: <Login />,
      },
    ],
  },
  {
    collapse: [
      {
        route: "/pages/landing-pages/crear-cuenta",
        component: <CrearCuenta />,
      },
    ],
  },
  {
    collapse: [
      {
        route: "/pages/landing-pages/crear-servicio",
        component: <CrearServicio />,
      },
    ],
  },
  {
    collapse: [
      {
        route: "/pages/landing-pages/mensaje-de-error",
        component: <MensajeDeError />,
      },
    ],
  },
];

export default routes;
