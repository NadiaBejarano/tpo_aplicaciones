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
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import educacion6 from "assets/images/examples/educacion6.jpeg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={educacion6}
                icon="touch_app"
                title={
                  <>
                    Educación
                    <br />A tu alcance
                  </>
                }
                description="Aprende desde cualquier lugar de Argentina"
              />
              <RotatingCardBack
                image={educacion6}
                title=""
                description=" Clases 100% online
                ."
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  title="Clases grupales o individuales"
                  description=" Las clases grupales están diseñadas para que compartas con otros alumnos con intereses y objetivos similares a los tuyos. Mientras que las clases individuales se adaptan a tus requerimientos académicos."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  title="Clases 100% on line"
                  description=" Las clases son 100% online y remotas, podes tomarlas sin que te muevas de tu casa."
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  title="Frecuencia unica, semanal o mensual"
                  description=" Podes elegir tus clases con la frecuencia acorde a tus tiempos y requerimientos. Podes optar por clases una vez a la semana, una vez al mes, o por clases únicas."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  title="Servicios especiales"
                  description=" También contamos con servicios para cuidados de niños, clases de música, idiomas y mucho mas."
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
