import { Typography } from "@mui/material";
import React from "react";
import { WrappingPaper } from "../components/pages/WrappingPaper";
import { PageWrapper } from "../utils/pageWrapper/PageWrapper";

const Einschaetzen: React.FC = () => {
  const description: string =
    "Einschätzen bedeutet, Sachverhalte zu Kenntnis zu nehmen und sie mit bestimmten Kriterien zu betrachten.Ein gutes Beispiel hierfür ist das Erstellen von Feedbacks. Ein weiteres, etwas systematischeres Beispiel wären die Softwareauswahl Methoden, die wir in EinWi behandelt haben. ";

  return (
    <PageWrapper title='Einschätzen' shortDescription={description}>
      <WrappingPaper>
        <Typography> Estimation Tasks here</Typography>
      </WrappingPaper>
    </PageWrapper>
  );
};

export default Einschaetzen;
