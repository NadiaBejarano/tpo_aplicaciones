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
import Vista from "pages/LandingPages/VistaProfesor";
import Mensaje from "pages/LandingPages/CambioDeEstado";
import Opinion from "pages/LandingPages/Opiniones";
import CambiarContrasenia from "pages/LandingPages/CambiarContrasenia";
const routes = [
  {
    name: "Busqueda",
    icon: <Icon>search</Icon>,
  },
  {
    name: "Clases",
    icon: <Icon>book</Icon>,
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
        name: "Crear cuenta",
        route: "/pages/landing-pages/crear-cuenta",
        component: <CrearCuenta />,
      },
      {
        name: "Crear servicio",
        route: "/pages/landing-pages/crear-servicio",
        component: <CrearServicio />,
      },
      {
        name: "Mensaje error",
        route: "/pages/landing-pages/mensaje-de-error",
        component: <MensajeDeError />,
      },
      {
        name: "Vista",
        route: "/pages/landing-pages/vista-profesor",
        component: <Vista />,
      },
      {
        name: "Mensaje",
        route: "/pages/landing-pages/mensaje",
        component: <Mensaje />,
      },
      {
        name: "Opinion",
        route: "/pages/landing-pages/opinion",
        component: <Opinion />,
      },
      {
        name: "Cambiar contraseña",
        route: "/pages/landing-pages/cambiar-contrasenia",
        component: <CambiarContrasenia />,
      },
    ],
  },
];

export default routes;
