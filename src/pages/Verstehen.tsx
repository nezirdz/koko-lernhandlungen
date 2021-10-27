import { Typography } from "@mui/material";
import React from "react";
import { WrappingPaper } from "../components/pages/WrappingPaper";
import { PageWrapper } from "../utils/pageWrapper/PageWrapper";

const Verstehen: React.FC = () => {
  const description: string =
    "Das Nachvollziehen eines Sachverhalts trägt dazu bei, sich mit der Materie vertieft auseinander zu setzen. Durch den Versuch, den Sachverhalt zu verstehen, werden oft Verknüpfungen zum Vorwissen aufgebaut.";
  return (
    <PageWrapper title='Verstehen' shortDescription={description}>
      <WrappingPaper>
        <Typography> Reduction Tasks here</Typography>
      </WrappingPaper>
    </PageWrapper>
  );
};

export default Verstehen;
