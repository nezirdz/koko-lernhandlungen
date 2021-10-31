import { Textsms } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { graphql, useStaticQuery } from "gatsby";
import { ImageDataLike } from "gatsby-plugin-image";
import React from "react";
import ImageCard from "../components/images/ImageCard";
import { WrappingPaper } from "../components/pages/WrappingPaper";
import { PageWrapper } from "../utils/pageWrapper/PageWrapper";
const texts = require("../components/pages/description.json");

interface Nodes {
  node:
    | ImageDataLike & {
        id: string;
        name: string;
        childImageSharp: {
          fluid: {
            src: string;
          };
          fixed: {
            src: string;
          };
        };
      };
}

interface Props {
  children: JSX.Element | null | JSX.Element[];
}

export const Images: React.FC = () => {
  const data: any = useStaticQuery(graphql`
    query {
      images: allFile(filter: { name: { regex: "/Pose/" } }) {
        edges {
          node {
            id
            name
            childImageSharp {
              fixed(toFormat: WEBP, width: 500, height: 500) {
                src
              }
              fluid {
                src
              }
            }
          }
        }
      }
    }
  `);

  const [...images]: Nodes[] = data.images.edges;
  // const image = getImage();

  const sortedImages = images.sort((a, b) =>
    a.node.name.localeCompare(b.node.name)
  );

  const elements = sortedImages.map((image, index) => {
    let right: boolean | undefined = index % 2 ? true : false;
    return (
      <WrappingPaper key={image.node.name} dark>
        <ImageCard
          imageRight={right}
          image={image.node.childImageSharp.fixed.src}
          fluid={image.node.childImageSharp.fluid.src}
          alt={image.node.name}>
          <Typography
            variant='h4'
            style={{
              textAlign: "center",
              textDecoration: "underline",
              marginBottom: "1rem",
            }}>
            {image.node.name}
          </Typography>
          <Typography
            sx={{
              flex: "1 0 auto",
            }}
            variant='h6'>
            Beschreibe die Pose so, dass du anhand deines Textes die Pose
            nachstellen kannst.
            <br />
            <br />
            <Typography variant='body1'>{texts.text[index]}</Typography>
          </Typography>
        </ImageCard>

        {/* <DefaultAccordion title='Beispiel'>
          <Typography variant='body2'>{texts.text[index]}</Typography>
        </DefaultAccordion> */}
      </WrappingPaper>
    );
  });

  return <>{elements}</>;
};

const Zeichnen: React.FC<Props> = () => {
  const description: string =
    "Wenn Sachverhalte strukturiert oder systematisch sind, hilft es oft, diese visuell darzustellen, z.B. in Flowcharts, Venn Diagrammen, Prozessabläufen, etc.";

  return (
    <PageWrapper title='Zeichnen' shortDescription={description}>
      <Typography>
        Verwende die zur Verfügung gestellte Beschreibung, um ein Flow-Chart
        (Pfeil-Diagramm) mit den Schritten in richtiger Reihenfolge zu
        erstellen, welche notwendig sind, um von einer kerzengeraden Pose in die
        beschriebene Pose zu kommen.
      </Typography>
      <Images />
    </PageWrapper>
  );
};

export default Zeichnen;
