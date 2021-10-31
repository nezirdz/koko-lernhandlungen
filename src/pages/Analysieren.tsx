import { TextField, Typography } from "@mui/material";
import { graphql, useStaticQuery } from "gatsby";
import { ImageDataLike } from "gatsby-plugin-image";
import React from "react";
import ImageCard from "../components/images/ImageCard";
import { WrappingPaper } from "../components/pages/WrappingPaper";
import { PageWrapper } from "../utils/pageWrapper/PageWrapper";

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
            Überlege, welche Körperteile / Muskeln strapaziert werden, und
            überlege, ob sie ziehend oder streckend strapaziert werden
            {/* <pre>{JSON.stringify(texts)}</pre> */}
          </Typography>
          <TextField fullWidth label='Beschreibung' multiline rows={10} />
        </ImageCard>
      </WrappingPaper>
    );
  });

  return <>{elements}</>;
};

const Analysieren: React.FC<Props> = () => {
  const description: string =
    "Situationen oder Komplexe Handlungen werden in einfache verständliche Komponenten zerlegt, und somit diese auf Ihren Ursprung zurückführen.";

  return (
    <PageWrapper title='Analysieren' shortDescription={description}>
      <Typography>
        Um die Posen für Analyse Aufgaben zu verwenden müssen wir kreativ sein.{" "}
        <br />
        Hierfür gibt es die Aufgabe, eine Liste der Körperteile zu erstellen,
        deren Muskeln für die Pose besonders stark strapaziert werden. Diese
        Analyse kann noch vertieft werden, indem die Überlegung erweitert wird,
        ob der Muskel des genannten Körperteilt <strong>
          ziehend
        </strong> oder <strong>streckend</strong> belasted wird.
      </Typography>
      <Images />
    </PageWrapper>
  );
};

export default Analysieren;
