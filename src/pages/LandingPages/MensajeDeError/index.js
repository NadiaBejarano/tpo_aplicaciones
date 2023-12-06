// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Author page sections
//import Profile from "pages/LandingPages/Author/sections/Profile";
//import Posts from "pages/LandingPages/Author/sections/Posts";

import SimpleAlerts from "./sections/MensajeError";

// Routes
import routes from "routes";

// Images
import educacion6 from "assets/images/examples/educacion6.jpeg";

function MensajeDeError() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "internal",
          route: "/pages/landing-pages/login/mensaje-de-error",
          label: "",
          color: "info",
        }}
        sticky
      />
      <MKBox bgColor="white">
        <MKBox
          minHeight="6rem"
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
        <SimpleAlerts />
      </MKBox>
    </>
  );
}

export default MensajeDeError;
