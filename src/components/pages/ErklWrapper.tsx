import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { DefaultAccordion } from "./DefaultAccordion";
import { WrappingPaper } from "./WrappingPaper";

interface Props {
  reihe: string;
  answer: number;
  children: (string | React.ReactElement<any, any>)[];
}

export const ErkWrapper: React.FC<Props> = ({ children, reihe, answer }) => {
  return (
    <WrappingPaper dark>
      <Box mb={3}>
        <Typography variant='h6'>Vervollständige die Reihe</Typography>
        <Typography variant='body1'>
          <strong>{reihe} *_*</strong>{" "}
        </Typography>
      </Box>

      <DefaultAccordion title='Lösung'>
        <Typography variant='h6' style={{ color: "blue" }}>
          {answer}
        </Typography>
        <Typography variant='body1'>{children}</Typography>
      </DefaultAccordion>
    </WrappingPaper>
  );
};
