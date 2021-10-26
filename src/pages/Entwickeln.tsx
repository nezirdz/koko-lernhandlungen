import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Paper,
  Typography,
} from "@mui/material";
import { PageWrapper } from "../utils/pageWrapper/PageWrapper";
import { Box } from "@mui/system";
import { graphql, useStaticQuery } from "gatsby";
import { ErkWrapper } from "../components/pages/ErklWrapper";

const Entwickeln: React.FC = () => {
  const data: any = useStaticQuery(graphql`
    query {
      file(name: { eq: "zeichnen" }) {
        name
        childImageSharp {
          fluid {
            src
          }
        }
      }
    }
  `);

  const description: string =
    "Manche Situationen oder Probleme haben konkrete Lösungen. Das Herbeiführen einer oder mehrerer Lösungen zu gewissen Problemen setzt voraus, sich mit dem Sachverhalt intensiv und anspruchsvoll auseinanderzusetzen.";

  return (
    <PageWrapper
      title='Entwickeln'
      shortDescription={description}
      image={data.file.childImageSharp.fluid.src}>
      <Box mb={3}>
        <Typography variant='body1'>
          Auf dieser Seite sind einige Beispiele von mathematischen Problemen,
          deren Lösung besseres Verständnis für die zugrundeliegende Struktur
          verstärkt. <br />
          Viel Spaß beim Erkunden!
        </Typography>
      </Box>
      <ErkWrapper reihe=' 2 4 6 8 10 12 14 16' answer={18}>
        {" "}
        Bei dieser Zahlenreihe wird die nächste Zahl immer mit 2 addiert. <br />
        (+2){" "}
      </ErkWrapper>
      <ErkWrapper reihe=' 87 83 79 75 71 67' answer={63}>
        Bei dieser Zahlenreihe wird die nächste Zahl immer um 4 subtrahiert.{" "}
        <br />
        (-4)
      </ErkWrapper>
      <ErkWrapper reihe=' 99 105 83 89 67 73' answer={51}>
        Hier wird die erste Zahl mit 6 addiert und die zweite Zahl mit 22
        subtrahiert. <br />
        (+6 -22 +6 -22)
      </ErkWrapper>
      <ErkWrapper reihe=' 33 34 36 39 43 48' answer={54}>
        Es wird jede Zahl mit einer nächst höheren Zahl addiert, beginnend mit
        der Zahl 1. <br />
        (+1 +2 +3 +4 +5 +6)
      </ErkWrapper>
      <ErkWrapper reihe=' 2 3 5 7 11 13 17 19' answer={23}>
        Diese Reihe von Zahlen besteht aus Primzahlen in aufsteigender
        Reihenfolge. <br />
        Die nächste Primzahl nach 19 ist 23.
      </ErkWrapper>
    </PageWrapper>
  );
};

export default Entwickeln;
