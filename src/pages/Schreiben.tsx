import React from "react";
import { TextField, Typography } from "@mui/material";
import { graphql, useStaticQuery } from "gatsby";
import { WrappingPaper } from "../components/pages/WrappingPaper";
import { PageWrapper } from "../utils/pageWrapper/PageWrapper";
import { ImageDataLike } from "gatsby-plugin-image";
import { DefaultAccordion } from "../components/pages/DefaultAccordion";
import ImageCard from "../components/images/ImageCard";
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
          <Typography variant='body1'>
            Beschreibe die Pose so, dass du anhand deines Textes die Pose
            nachstellen kannst.
            {/* <pre>{JSON.stringify(texts)}</pre> */}
          </Typography>
          <TextField
            fullWidth
            label='Beschreibung'
            multiline
            rows={10}
            placeholder={texts.text[index]}
          />
        </ImageCard>

        <DefaultAccordion title='Beispiel'>
          <Typography variant='body2'>{texts.text[index]}</Typography>
        </DefaultAccordion>
      </WrappingPaper>
    );
  });

  return <>{elements}</>;
};

const Schreiben: React.FC<Props> = () => {
  const description: string =
    "Hierbei ist es wichtig, nicht wortwörtliche Kopien zu erstellen, sondern sinngemäße Kopien zu erstellen – in eigenen Worten zusammengefasst. Eigene Überlegungen sollten hierbei mit einfließen.";

  return (
    <PageWrapper title='Schreiben' shortDescription={description}>
      <Images />
    </PageWrapper>
  );
};

export default Schreiben;
