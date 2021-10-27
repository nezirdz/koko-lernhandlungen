import { Typography } from "@mui/material";
import React from "react";
import { WrappingPaper } from "../components/pages/WrappingPaper";
import { PageWrapper } from "../utils/pageWrapper/PageWrapper";

const Analysieren: React.FC = () => {
  const description: string =
    "Situationen oder Komplexe Handlungen werden in einfache verständliche Komponenten zerlegt, und somit diese auf Ihren Ursprung zurückführen.";

  return (
    <PageWrapper title='Analysieren' shortDescription={description}>
      <WrappingPaper>
        <Typography> Analysis Tasks here</Typography>
      </WrappingPaper>
    </PageWrapper>
  );
};

export default Analysieren;
