// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";
import MKTypography from "components/MKTypography";

// Images
import profilePicture from "assets/images/ivan-square.jpg";

function ClasesTrompeta() {
  return (
    <MKBox component="section" py={{ xs: 6, sm: 12 }}>
      <Container>
        <Grid container item xs={12} justifyContent="center" mx="auto">
          <MKBox mt={{ xs: -16, md: -20 }} textAlign="center">
            <MKAvatar src={profilePicture} alt="Burce Mars" size="xxl" shadow="xl" />
          </MKBox>
          <Grid container justifyContent="center" py={6}>
            <Grid item xs={12} md={7} mx={{ xs: "auto", sm: 6, md: 1 }}>
              <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <MKTypography variant="h3">Gonzalo Alfaro </MKTypography>
              </MKBox>
              <Grid container spacing={3} mb={3}>
                <Grid item>
                  <MKTypography component="span" variant="body2" color="text">
                    Responsable
                  </MKTypography>
                </Grid>
              </Grid>
              <MKTypography variant="body1" fontWeight="light" color="text">
                Despierta tu músico interior. Embárcate en un viaje musical emocionante con nuestra
                clases de trompeta diseñadas para todos, desde principiantes hasta aficionados
                experimentados.
                <br />
              </MKTypography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default ClasesTrompeta;
