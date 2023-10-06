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
import Divider from "@mui/material/Divider";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";

// Images

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h2">Opiniones</MKTypography>
          <MKTypography variant="h2" color="info" textGradient mb={2}>
            Conoce las opiniones sobre las clases.
          </MKTypography>
          <MKTypography variant="body1" color="text" mb={2}>
            Conoces algunas de sus opiniones sobre nuestros docentes e instructores.
          </MKTypography>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 8 }}>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="Greta Julian"
              date="Hace un año"
              review="Las clases de profesor Lopez son geniales.La manera que tiene de explicar las matematicas es de otro nivel. Sin dudas una de las mejores elecciones"
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              color="info"
              name="Sebastian Ruli"
              date="Hace 2 semanas"
              review="Estoy tomando clases de Guitarra con el profesor Enrique Perez, me parece muy dinamicas y el profesor es muy claro al explicar"
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="Manuel Sanchez"
              date="Hace 2 dias"
              review="Estoy tomando el curso de cocina basica, me parece super recomendable, sobre todo porque es a distancia y lo podes hacer desde tu casa."
              rating={4}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="Samuel Kamuli"
              date="Hace 3 semanas"
              review="Nunca crei que aprender Ingles seria tan facil y divertido."
              rating={4}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              color="info"
              name="Shailesh Kushwaha"
              date="Hace una semana"
              review="Las clases de canto son increibles, me gusta que puedo coordinar los horarios con la profesora."
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="Nicolas Alvarez"
              date="Hace 3 semanas"
              review="Las clases de geografia ayudaron a que mi hijo mejore notablemente las notas en el colegio. Recomiendo 100%."
              rating={5}
            />
          </Grid>
        </Grid>
        <Divider sx={{ my: 6 }} />
        <Grid container spacing={3} justifyContent="center"></Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
