import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { PageWrapper } from "../utils/pageWrapper/PageWrapper";
import { Box } from "@mui/system";
import { graphql, useStaticQuery } from "gatsby";

const Zeichnen: React.FC = () => {
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
    "Wenn Sachverhalte strukturiert oder systematisch sind, hilft es oft, diese visuell darzustellen, z.B. in Flowcharts, Venn Diagrammen, Prozessabläufen, etc.";

  return (
    <PageWrapper
      title='Zeichnen'
      shortDescription={description}
      image={data.file.childImageSharp.fluid.src}>
      <Box mb={3}>
        <Typography variant='body1'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          tempora, omnis odit, amet ad ullam deleniti totam non temporibus porro
          eligendi alias quidem? Esse ipsum perspiciatis veniam commodi
          voluptates ipsa assumenda laboriosam, doloremque, amet sequi sapiente
          praesentium odit, mollitia ad!
        </Typography>
      </Box>
      <Accordion id='panel1a-header'>
        <AccordionSummary>Aufgabe 1</AccordionSummary>
        <AccordionDetails>
          <Typography variant='body1'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
            dolor quos magnam omnis nihil in inventore laborum quisquam tenetur
            consequatur debitis vitae voluptates ab fugiat, nobis ea eveniet,
            laudantium, quam placeat suscipit dignissimos. Earum tenetur
            reiciendis incidunt, exercitationem, voluptatem aperiam ad
            blanditiis praesentium sed obcaecati autem iste eaque facere ipsam
            nesciunt aut, maxime perspiciatis minus in! Quaerat nihil culpa
            veritatis.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </PageWrapper>
  );
};

export default Zeichnen;
