/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Author page sections
import Mensaje from "./sections/Mensaje";
import DropdownAndDropup from "../Desplegable";
import Footer from "../Author/sections/Footer";

// Routes
import routes from "routes";

// Images
import educacion20 from "assets/images/examples/educacion20.png";

function CambioDeEstado() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          route: "",
          label: "Cerrar sesión",
          color: "info",
        }}
        transparent
        light
      />
      <MKBox bgColor="white">
        <MKBox
          minHeight="25rem"
          width="100%"
          sx={{
            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.8),
                rgba(gradients.dark.state, 0.8)
              )}, url(${educacion20})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "grid",
            placeItems: "center",
          }}
        />
        <Mensaje />
        <DropdownAndDropup />
        <Footer />
      </MKBox>
    </>
  );
}

export default CambioDeEstado;
