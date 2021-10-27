import { Typography } from "@mui/material";
import React from "react";
import { WrappingPaper } from "../components/pages/WrappingPaper";
import { PageWrapper } from "../utils/pageWrapper/PageWrapper";

const Schreiben: React.FC = () => {
  const description: string =
    "Hierbei ist es wichtig, nicht wortwörtliche Kopien zu erstellen, sondern sinngemäße Kopien zu erstellen – in eigenen Worten zusammengefasst. Eigene Überlegungen sollten hierbei mit einfließen.";
  return (
    <PageWrapper title='Schreiben' shortDescription={description}>
      <WrappingPaper>
        <Typography> Reduction Tasks here</Typography>
      </WrappingPaper>
    </PageWrapper>
  );
};

export default Schreiben;
