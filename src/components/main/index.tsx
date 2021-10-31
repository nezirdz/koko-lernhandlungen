import { Grid } from "@mui/material";
import React from "react";
import { Sprechen } from "./handlungen/Sprechen";
import { Verstehen } from "./handlungen/Verstehen";
import { Schreiben } from "./handlungen/Schreiben";
import { Reduzieren } from "./handlungen/Reduzieren";
import { Zeichnen } from "./handlungen/Zeichnen";
import { Einschatzen } from "./handlungen/Einschaetzen";
import { Analysieren } from "./handlungen/Analysieren";
import { Entwickeln } from "./handlungen/Entwickeln";

export const Main: React.FC = () => {
  return (
    <Grid
      container
      direction='row'
      justifyContent='center'
      alignItems='center'
      spacing={4}>
      {/* <Grid item>
        <Verstehen />
      </Grid> */}
      <Grid item>
        <Schreiben />
      </Grid>
      <Grid item>
        <Sprechen />
      </Grid>
      <Grid item>
        <Reduzieren />
      </Grid>
      <Grid item>
        <Zeichnen />
      </Grid>
      <Grid item>
        <Einschatzen />
      </Grid>
      <Grid item>
        <Analysieren />
      </Grid>
      <Grid item>
        <Entwickeln />
      </Grid>
    </Grid>
  );
};
