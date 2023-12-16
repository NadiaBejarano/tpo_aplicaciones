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
import MKTypography from "components/MKTypography";

// Material Kit 2 React components
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";

// Images
import post1 from "assets/images/examples/Blog1.jpg";

function Information() {
  return (
    <MKBox component="section" py={2}>
      <Container>
        <Grid container item xs={12} lg={6}>
          <MKTypography variant="h3" mb={6}>
            Servicios
          </MKTypography>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post1}
              title="Clase uno"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus."
              action={{
                type: "internal",
                route: "",
                color: "info",
                label: "Ver",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post1}
              title="Clase dos"
              description="Semanal: Un encuentro por semana. Dias Martes, Jueves. Duración: 60 minutos"
              action={{
                type: "internal",
                route: "",
                color: "info",
                label: "ver",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post1}
              title="Clase tres"
              description="Cuota mensual: $10.000 ARS. Formas de pago: Tarjeta de credito, Transferencia Bancaria"
              action={{
                type: "internal",
                route: "",
                color: "info",
                label: "Leer",
              }}
            />
          </Grid>
        </Grid>
        <Grid container item xs={12} lg={6}>
          <MKTypography variant="h3" mb={6}>
            Contrataciones
          </MKTypography>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post1}
              title="Nuevo Mensaje"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus."
              action={{
                type: "internal",
                route: "",
                color: "info",
                label: "Ver",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post1}
              title="Nuevo mensaje"
              description="Semanal: Un encuentro por semana. Dias Martes, Jueves. Duración: 60 minutos"
              action={{
                type: "internal",
                route: "",
                color: "info",
                label: "ver",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post1}
              title="Nuevo Mensaje"
              description="Cuota mensual: $10.000 ARS. Formas de pago: Tarjeta de credito, Transferencia Bancaria"
              action={{
                type: "internal",
                route: "",
                color: "info",
                label: "Leer",
              }}
            />
          </Grid>
        </Grid>
        <Grid container item xs={12} lg={6}>
          <MKTypography variant="h3" mb={6}>
            Opiniones
          </MKTypography>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post1}
              title="Opinion reciente"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus."
              action={{
                type: "internal",
                route: "",
                color: "info",
                label: "Ver",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post1}
              title="Opinion reciente"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus."
              action={{
                type: "internal",
                route: "",
                color: "info",
                label: "Ver",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <TransparentBlogCard
              image={post1}
              title="Opinion reciente"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus."
              action={{
                type: "internal",
                route: "",
                color: "info",
                label: "ver",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
