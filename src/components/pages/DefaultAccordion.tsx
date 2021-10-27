import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import React from "react";

interface Props {
  children: JSX.Element | JSX.Element[] | null;
  title: string;
}

export const DefaultAccordion: React.FC<Props> = ({ children, title }) => {
  return (
    <Accordion>
      <AccordionSummary>{title}</AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};
