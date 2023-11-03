import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function FullWidthGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
          <Item>
            Variable
            <ul>
              <li>Gasses Attenuation = </li>
              <li>Clouds Attenuation =</li>
              <li>Rain Attenuation =</li>
              <li>Scintillation Attenuatin =</li>
              <li>Atmospheric Attenuation = </li>
            </ul>
          </Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item>
            Value
            <ul>
              <li>ex:930.3335323675848</li>
            </ul>
          </Item>
        </Grid>
        <Grid item xs={6} md={8}>
          <Item>
            Unit
            <ul>
              <li>ex. db</li>
            </ul>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
