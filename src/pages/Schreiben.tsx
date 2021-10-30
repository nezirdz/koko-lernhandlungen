import React from "react";
import { Typography } from "@mui/material";
import { graphql, useStaticQuery } from "gatsby";
import { WrappingPaper } from "../components/pages/WrappingPaper";
import { PageWrapper } from "../utils/pageWrapper/PageWrapper";
import { getImage, ImageDataLike, StaticImage } from "gatsby-plugin-image";
import { ImageWrapper } from "../components/images/ImageWrapper";
import { ImageCard } from "../components/images/imageCard";

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
      <WrappingPaper key={image.node.name}>
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
        </ImageCard>
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
