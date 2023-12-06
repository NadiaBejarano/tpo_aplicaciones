// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKAlert from "components/MKAlert";

function SimpleAlerts() {
  return (
    <MKBox component="section" py={6}>
      <Container>
        <Grid container item xs={12} lg={10} mx="auto">
          <Grid item xs={12}>
            <MKAlert color="info">¡Contraseña errónea!</MKAlert>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default SimpleAlerts;
