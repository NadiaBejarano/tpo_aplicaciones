/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Material Kit 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Navbar.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `name` key is used for the name of the route on the Navbar.
  2. The `icon` key is used for the icon of the route on the Navbar.
  3. The `collapse` key is used for making a collapsible item on the Navbar that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  4. The `route` key is used to store the route location which is used for the react router.
  5. The `href` key is used to store the external links location.
  6. The `component` key is used to store the component of its route.
  7. The `dropdown` key is used to define that the item should open a dropdown for its collapse items .
  8. The `description` key is used to define the description of
          a route under its name.
  9. The `columns` key is used to define that how the content should look inside the dropdown menu as columns,
          you can set the columns amount based on this key.
  10. The `rowsPerColumn` key is used to define that how many rows should be in a column.
*/

// @mui material components
import Icon from "@mui/material/Icon";

// @mui icons

// Pages
import AboutUs from "layouts/pages/landing-pages/about-us";
import ContactUs from "layouts/pages/landing-pages/contact-us";
import Author from "layouts/pages/landing-pages/author";
import Login2 from "layouts/pages/landing-pages/login";

// Sections
import PageHeaders from "layouts/sections/page-sections/page-headers";
import Features from "layouts/sections/page-sections/featuers";
import Navbars from "layouts/sections/navigation/navbars";
import NavTabs from "layouts/sections/navigation/nav-tabs";
import Pagination from "layouts/sections/navigation/pagination";
import Inputs from "layouts/sections/input-areas/inputs";
import Forms from "layouts/sections/input-areas/forms";
import Alerts from "layouts/sections/attention-catchers/alerts";
import Modals from "layouts/sections/attention-catchers/modals";
import TooltipsPopovers from "layouts/sections/attention-catchers/tooltips-popovers";
import Avatars from "layouts/sections/elements/avatars";
import Badges from "layouts/sections/elements/badges";
import BreadcrumbsEl from "layouts/sections/elements/breadcrumbs";
import Buttons from "layouts/sections/elements/buttons";
import Dropdowns from "layouts/sections/elements/dropdowns";
import ProgressBars from "layouts/sections/elements/progress-bars";
import Toggles from "layouts/sections/elements/toggles";
import Typography from "layouts/sections/elements/typography";

const routes = [
  {
    name: "Tutorías",
    icon: <Icon>book</Icon>,
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
          {
            name: "Clases de Login",
            route: "/pages/landing-pages/login",
            component: <Login2 />,
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
            route: "/pages/landing-pages/about-us",
            component: <AboutUs />,
          },
          {
            name: "Clases De Ingles",
            route: "/pages/landing-pages/contact-us",
            component: <ContactUs />,
          },
          {
            name: "Clases De Portugués",
            route: "/pages/landing-pages/author",
            component: <Author />,
          },
        ],
      },
    ],
  },
  {
    name: "Clases de Música",
    icon: <Icon>book</Icon>,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        collapse: [
          {
            name: "Clases De Canto",
            route: "/pages/landing-pages/about-us",
            component: <AboutUs />,
          },
          {
            name: "Clases De Guitarra",
            route: "/pages/landing-pages/contact-us",
            component: <ContactUs />,
          },
          {
            name: "Clases De Trompeta",
            route: "/pages/landing-pages/author",
            component: <Author />,
          },
        ],
      },
    ],
  },
  {
    name: "Cursos Cortos",
    icon: <Icon>book</Icon>,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        collapse: [
          {
            name: "Fundamentos En Programación",
            route: "/pages/landing-pages/about-us",
            component: <AboutUs />,
          },
          {
            name: "Clases De Cocina Básica",
            route: "/pages/landing-pages/contact-us",
            component: <ContactUs />,
          },
          {
            name: "Aprende Ajedrez",
            route: "/pages/landing-pages/author",
            component: <Author />,
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
            name: "page headers",
            route: "/sections/page-sections/page-headers",
            component: <PageHeaders />,
          },
          {
            name: "features",
            route: "/sections/page-sections/features",
            component: <Features />,
          },
        ],
      },
      {
        name: "Clases Individuales",
        description: "See all navigations",
        dropdown: true,
        collapse: [
          {
            name: "navbars",
            route: "/sections/navigation/navbars",
            component: <Navbars />,
          },
          {
            name: "nav tabs",
            route: "/sections/navigation/nav-tabs",
            component: <NavTabs />,
          },
          {
            name: "pagination",
            route: "/sections/navigation/pagination",
            component: <Pagination />,
          },
        ],
      },
      {
        name: "Frecuencia",
        description: "Elige la opción que mejor se acomode a tus horarios",
        dropdown: true,
        collapse: [
          {
            name: "Clase Única",
            route: "/sections/input-areas/inputs",
            component: <Inputs />,
          },
          {
            name: "Semanal",
            route: "/sections/input-areas/forms",
            component: <Forms />,
          },
          {
            name: "Mensual",
            route: "/sections/input-areas/inputs",
            component: <Inputs />,
          },
          {
            name: "forms",
            route: "/sections/input-areas/forms",
            component: <Forms />,
          },
        ],
      },
      {
        name: "Califación",
        description: "See all examples",
        dropdown: true,
        collapse: [
          {
            name: "Mejor Calificadas",
            route: "/sections/attention-catchers/alerts",
            component: <Alerts />,
          },
          {
            name: "modals",
            route: "/sections/attention-catchers/modals",
            component: <Modals />,
          },
          {
            name: "tooltips & popovers",
            route: "/sections/attention-catchers/tooltips-popovers",
            component: <TooltipsPopovers />,
          },
        ],
      },
      {
        name: "Categorías",
        description: "See all 32 examples",
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
            route: "/pages/landing-pages/about-us",
            component: <AboutUs />,
          },
          {
            name: "Clases de Ingles",
            route: "/pages/landing-pages/contact-us",
            component: <ContactUs />,
          },
          {
            name: "Clases de Portugués",
            route: "/pages/landing-pages/author",
            component: <Author />,
          },
          {
            name: "Clases de Canto",
            route: "/pages/landing-pages/about-us",
            component: <AboutUs />,
          },
          {
            name: "Clases de Guitarra",
            route: "/pages/landing-pages/contact-us",
            component: <ContactUs />,
          },
          {
            name: "Clases de Trompeta",
            route: "/pages/landing-pages/author",
            component: <Author />,
          },
          {
            name: "Fundamentos En Programación",
            route: "/pages/landing-pages/about-us",
            component: <AboutUs />,
          },
          {
            name: "Clases De Cocina Básica",
            route: "/pages/landing-pages/contact-us",
            component: <ContactUs />,
          },
          {
            name: "Aprende Ajedrez",
            route: "/pages/landing-pages/author",
            component: <Author />,
          },
          {
            name: "avatars",
            route: "/sections/elements/avatars",
            component: <Avatars />,
          },
          {
            name: "badges",
            route: "/sections/elements/badges",
            component: <Badges />,
          },
          {
            name: "breadcrumbs",
            route: "/sections/elements/breadcrumbs",
            component: <BreadcrumbsEl />,
          },
          {
            name: "buttons",
            route: "/sections/elements/buttons",
            component: <Buttons />,
          },
          {
            name: "dropdowns",
            route: "/sections/elements/dropdowns",
            component: <Dropdowns />,
          },
          {
            name: "progress bars",
            route: "/sections/elements/progress-bars",
            component: <ProgressBars />,
          },
          {
            name: "toggles",
            route: "/sections/elements/toggles",
            component: <Toggles />,
          },
          {
            name: "typography",
            route: "/sections/elements/typography",
            component: <Typography />,
          },
        ],
      },
    ],
  },
];

export default routes;
