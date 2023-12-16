//import { useState } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
//import Switch from "@mui/material/Switch";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

function CambioContrasenia() {
  //const [checked, setChecked] = useState(true);

  //const handleChecked = () => setChecked(!checked);

  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container item justifyContent="center" xs={10} lg={7} mx="auto" textAlign="center">
          <MKTypography variant="h3" mb={1}>
            Cambiar Contraseña
          </MKTypography>
        </Grid>
        <Grid container item xs={12} lg={7} sx={{ mx: "auto" }}>
          <MKBox width="100%" component="form" method="post" autocomplete="off">
            <MKBox p={3}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <MKInput variant="standard" type="contraseña" label="Contraseña" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <MKInput variant="standard" type="con" label="Confirmar contraseña" fullWidth />
                </Grid>
                <Grid item xs={12} alignItems="center" ml={-1}></Grid>
              </Grid>
              <Grid container item justifyContent="center" xs={12} my={2}>
                <MKButton type="submit" variant="gradient" color="dark" fullWidth>
                  Cambiar Contraseña
                </MKButton>
              </Grid>
            </MKBox>
          </MKBox>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default CambioContrasenia;
