import { Typography } from "@mui/material";
import React from "react";
import { WrappingPaper } from "../components/pages/WrappingPaper";
import { PageWrapper } from "../utils/pageWrapper/PageWrapper";

const Reduzieren: React.FC = () => {
  const description: string =
    "Beim Reduzieren wird wesentliches hervorgehoben und gut strukturiert abgebildet. Das herausfinden, was als wesentliches qualifiziert wird, setzt voraus, dass man sich mit der Materie intensiv befasst. Diese Effekte kennt man, wenn man Spickzettel schreibt (wie in MACS). Diese funktionieren so gut, dass man sie in vielen Fällen gar nicht braucht.";
  return (
    <PageWrapper title='Reduzieren' shortDescription={description}>
      <WrappingPaper>
        <Typography> Reduction Tasks here</Typography>
      </WrappingPaper>
    </PageWrapper>
  );
};

export default Reduzieren;
