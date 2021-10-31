import { Box, Modal, Typography } from "@mui/material";
import { graphql, useStaticQuery } from "gatsby";
import { ImageDataLike } from "gatsby-plugin-image";
import React, { useState } from "react";
import { DefaultAccordion } from "../components/pages/DefaultAccordion";
import { WrappingPaper } from "../components/pages/WrappingPaper";
import { PageWrapper } from "../utils/pageWrapper/PageWrapper";

interface Props {
  src: string;
  img: string;
  alt: string;
}

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

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  bgcolor: "background.paper",
  display: "flex",
};

export const ImageModal: React.FC<Props> = ({ src, img, alt }) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);

  return (
    <>
      <img
        onClick={toggleOpen}
        src={img}
        alt={alt}
        style={{ maxWidth: "100%", margin: "auto" }}
      />
      <Modal open={open} onClose={toggleOpen}>
        <Box sx={style}>
          <img
            src={src}
            alt={alt}
            style={{ margin: "auto", maxWidth: "100%" }}
            onClick={toggleOpen}
          />
        </Box>
      </Modal>
    </>
  );
};

export const ImageAccordions: React.FC = () => {
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
  const sortedImages = images.sort((a, b) =>
    a.node.name.localeCompare(b.node.name)
  );
  return (
    <>
      {sortedImages.map((image, index) => (
        <DefaultAccordion title={image.node.name} key={image.node.id}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <ImageModal
              src={image.node.childImageSharp.fluid.src}
              img={image.node.childImageSharp.fixed.src}
              alt={image.node.name}
            />
          </div>
        </DefaultAccordion>
      ))}
    </>
  );
};

const Einschaetzen: React.FC = () => {
  const description: string =
    "Einschätzen bedeutet, Sachverhalte zu Kenntnis zu nehmen und sie mit bestimmten Kriterien zu betrachten.Ein gutes Beispiel hierfür ist das Erstellen von Feedbacks. Ein weiteres, etwas systematischeres Beispiel wären die Softwareauswahl Methoden, die wir in EinWi behandelt haben. ";

  return (
    <PageWrapper title='Einschätzen' shortDescription={description}>
      <WrappingPaper dark>
        <Typography>
          Für die unterschiedlichen Posen gibt es wenige Kriterien, welche für
          Einschätzungen erheblich sind. <br />
          Daher bieten sich für diese Aufgabe folgende Überlegungen an:
          <ul>
            <li>Wie lange kannst du eine diese Pose halten?</li>
            <li>Welche Kleidung wäre dafür unterstützend? Welche hindernd?</li>
            <li>
              Wie lange müsstest du trainieren, um die Pose für 20 Sekunden
              halten zu können?
            </li>
            <li>Was wäre an der Pose am Schwierigsten für dich?</li>
          </ul>
          <br />
        </Typography>
        <ImageAccordions />
      </WrappingPaper>
    </PageWrapper>
  );
};

export default Einschaetzen;
