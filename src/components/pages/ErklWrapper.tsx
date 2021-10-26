import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Paper,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

interface Props {
  reihe: string;
  answer: number;
  children: (string | React.ReactElement<any, any>)[];
}

export const ErkWrapper: React.FC<Props> = ({ children, reihe, answer }) => {
  return (
    <Paper style={{ padding: "1rem", marginBottom: "2rem" }}>
      <Box mb={3}>
        <Typography variant='h6'>Vervollständige die Reihe</Typography>
        <Typography variant='body1'>
          <strong>{reihe} *_*</strong>{" "}
        </Typography>
      </Box>

      <Accordion id='panel1a-header'>
        <AccordionSummary>Lösung</AccordionSummary>
        <AccordionDetails>
          <Typography variant='h6' style={{ color: "blue" }}>
            {answer}
          </Typography>
          <Typography variant='body1'>{children}</Typography>
        </AccordionDetails>
      </Accordion>
    </Paper>
  );
};
