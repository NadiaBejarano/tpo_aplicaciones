// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Author page sections
import FundamentosProgramacion from "./sections/FundamentosProgramacion";
import Posts from "pages/LandingPages/Author/sections/Posts";
import Contact from "pages/LandingPages/Author/sections/Contact";
import Testimonials from "pages/Presentation/sections/Testimonials";
import Footer from "pages/LandingPages/Author/sections/Footer";

// Routes
import routes from "routes";

// Images
import educacion6 from "assets/images/examples/educacion6.jpeg";

function FundamentosEnProgramacion() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          route: "layouts/pages/authentication/sign-in",
          label: "Iniciar sesión",
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
              )}, url(${educacion6})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "grid",
            placeItems: "center",
          }}
        />
        <FundamentosProgramacion />
        <Posts />
        <Testimonials />
        <Contact />
        <Footer />
      </MKBox>
    </>
  );
}

export default FundamentosEnProgramacion;