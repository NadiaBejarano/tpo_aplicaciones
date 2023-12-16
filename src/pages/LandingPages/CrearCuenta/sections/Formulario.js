// import { useState } from "react";
import api from "api/api";

// react-router-dom components
// import { useNavigate } from "react-router-dom";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

function Form() {
  const handleRegister = async () => {
    console.log("Register--------------------------------");
    try {
      const usuarioData = {
        email: "patricianazame2@gmail.com",
        password: "123456",
        nombre: "Patricia",
        apellido: "Azame",
        titulo: "Profesora de Cocina",
      };

      const data = await api.registrarUsuario(usuarioData);
      // navigate("");

      // Lógica después de una solicitud exitosa
      console.log("Respuesta del servidor para registro de usuario:", data);
    } catch (error) {
      // Manejo de errores
      console.error("Error al registrar usuario:", error.message);
    }
  };
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container item justifyContent="center" xs={10} lg={7} mx="auto" textAlign="center">
          <MKTypography variant="h3" mb={1}>
            Crear Cuenta
          </MKTypography>
        </Grid>
        <Grid container item xs={12} lg={7} sx={{ mx: "auto" }}>
          <MKBox width="100%" component="form" method="post" autocomplete="off">
            <MKBox p={3}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <MKInput variant="standard" label="Nombre Completo" fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                  <MKInput variant="standard" label="Apellido" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <MKInput variant="standard" type="email" label="Email" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <MKInput variant="standard" type="celular" label="Celular" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <MKInput variant="standard" type="contraseña" label="Contraseña" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <MKInput variant="standard" type="con" label="Confirmar contraseña" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <MKInput variant="standard" label="Certificados" multiline fullWidth rows={6} />
                </Grid>
                <Grid item xs={12}>
                  <MKInput variant="standard" label="Experiencia" multiline fullWidth rows={6} />
                </Grid>
              </Grid>
              <Grid container item justifyContent="center" xs={12} my={2}>
                <MKButton
                  type="submit"
                  variant="gradient"
                  color="dark"
                  fullWidth
                  onClick={handleRegister}
                >
                  Enviar
                </MKButton>
              </Grid>
            </MKBox>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Form;
