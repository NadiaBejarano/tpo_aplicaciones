// @mui material components

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Author page sections
import ClasesCocina from "./sections/ClasesCocina";
import Posts from "pages/LandingPages/Author/sections/Posts";
import Contact from "pages/LandingPages/Author/sections/Contact";
import Testimonials from "pages/Presentation/sections/Testimonials";
import Footer from "pages/LandingPages/Author/sections/Footer";

// Routes
import routes from "routes";

// Images
import educacion28 from "assets/images/examples/educacion28.jpeg";

function ClasesCocinaBasica() {
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
              )}, url(${educacion28})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "grid",
            placeItems: "center",
          }}
        />
        <ClasesCocina />
        <Posts />
        <Testimonials />
        <Contact />
        <Footer />
      </MKBox>
    </>
  );
}

export default ClasesCocinaBasica;
