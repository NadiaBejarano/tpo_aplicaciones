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

// import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
// import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";

// @mui icons

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";

// Material Kit 2 React example components
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import SimpleFooter from "examples/Footers/SimpleFooter";

// Material Kit 2 React page layout routes
import routes from "routes";
import api from "api/api";

// Images
import educacion3 from "assets/images/examples/educacion3.jpeg";

function SignInBasic() {
  const handleForget = async () => {
    try {
      const email = "patricianazame@gmail.com"; // Puedes obtener el email de tu estado o de algún otro lugar
      const data = await api.recuperarPassword(email);

      // Lógica después de una solicitud exitosa
      console.log("Respuesta del servidor para recuperar contraseña:", data);
    } catch (error) {
      // Manejo de errores
      console.error("Error al recuperar contraseña:", error.message);
    }
  };

  const handleResetPassword = async () => {
    try {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTZkMjNlZjdiYzRiMWEzNDlmN2QwY2IiLCJpYXQiOjE3MDE2NjA4MjEsImV4cCI6MTcwMTY2NDQyMX0.Bma52HgiCpgypHyoxEKspsF2ztspFhzDbd-nFeygYnE";
      // Debes obtener el token de alguna manera
      const newPassword = "654321"; // Debes obtener la nueva contraseña de alguna manera

      const data = await api.resetearPassword(token, newPassword);

      // Lógica después de una solicitud exitosa
      console.log("Respuesta del servidor para resetear contraseña:", data);
    } catch (error) {
      // Manejo de errores
      console.error("Error al resetear contraseña:", error.message);
    }
  };

  const handleLogin = async () => {
    console.log("Se hizo clic en el botón");

    try {
      const data = await api.login("patricianazame@gmail.com", "654321");
      console.log("Respuesta del servidor:", data);
      // Almacenar el token en localStorage
      localStorage.setItem("token", data.token);
    } catch (error) {
      console.error("Error:", error.message);
      // Manejo de errores
    }
  };
  const handleRegister = async () => {
    try {
      const usuarioData = {
        email: "patricianazame2@gmail.com",
        password: "123456",
        nombre: "Patricia",
        apellido: "Azame",
        titulo: "Profesora de Cocina",
      };

      const data = await api.registrarUsuario(usuarioData);

      // Lógica después de una solicitud exitosa
      console.log("Respuesta del servidor para registro de usuario:", data);
    } catch (error) {
      // Manejo de errores
      console.error("Error al registrar usuario:", error.message);
    }
  };

  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "/pages/landing-pages/login",
        }}
        transparent
        light
      />
      <MKBox
        position="absolute"
        top={0}
        left={0}
        zIndex={1}
        width="100%"
        minHeight="100vh"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${educacion3})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <MKBox px={1} width="100%" height="100vh" mx="auto" position="relative" zIndex={2}>
        <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            <Card>
              <MKBox
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                mx={2}
                mt={-3}
                p={2}
                mb={1}
                textAlign="center"
              >
                <MKTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                  Bienvenido
                </MKTypography>
              </MKBox>
              <MKBox pt={4} pb={3} px={3}>
                <MKBox component="form" role="form">
                  <MKBox mb={2}>
                    <MKInput type="email" label="Email" fullWidth />
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput type="password" label="Contraseña" fullWidth />
                  </MKBox>
                  <MKBox mt={4} mb={1}>
                    <MKButton variant="gradient" color="info" fullWidth onClick={handleLogin}>
                      Iniciar sesion
                    </MKButton>
                  </MKBox>
                  <MKBox mt={3} mb={1} textAlign="center">
                    <MKTypography variant="button" color="text">
                      Falta formulario de Reset Password{" "}
                      <MKTypography
                        component={Link}
                        to="/authentication/sign-up/cover"
                        variant="button"
                        color="info"
                        fontWeight="medium"
                        textGradient
                        onClick={handleResetPassword}
                      >
                        Reset
                      </MKTypography>
                    </MKTypography>
                  </MKBox>
                  <MKBox mt={3} mb={1} textAlign="center">
                    <MKTypography variant="button" color="text">
                      Olvidaste tu contraseña?{" "}
                      <MKTypography
                        component={Link}
                        to="/authentication/sign-up/cover"
                        variant="button"
                        color="info"
                        fontWeight="medium"
                        textGradient
                        onClick={handleForget}
                      >
                        Recuperar
                      </MKTypography>
                    </MKTypography>
                  </MKBox>
                  <MKBox mt={3} mb={1} textAlign="center">
                    <MKTypography variant="button" color="text">
                      No encuentro el formulario de cuenta?{" "}
                      <MKTypography
                        component={Link}
                        to="/authentication/sign-up/cover"
                        variant="button"
                        color="info"
                        fontWeight="medium"
                        textGradient
                        onClick={handleRegister}
                      >
                        Crear cuenta Default
                      </MKTypography>
                    </MKTypography>
                  </MKBox>
                </MKBox>
              </MKBox>
            </Card>
          </Grid>
        </Grid>
      </MKBox>
      <MKBox width="100%" position="absolute" zIndex={2} bottom="1.625rem">
        <SimpleFooter light />
      </MKBox>
    </>
  );
}

export default SignInBasic;
