import { Typography } from "@mui/material";
import { graphql, useStaticQuery } from "gatsby";
import { ImageDataLike } from "gatsby-plugin-image";
import React from "react";
import { DefaultAccordion } from "../components/pages/DefaultAccordion";
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

const Sprechen: React.FC = () => {
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

  const description =
    "Das Sprechen behandelt mehrere Möglichkeiten, sich mit dem Inhalt auseinanderzusetzen. Eine Möglichkeit ist, den Sachverhalt anderen zu erklären, und sich dadurch mit der Materia vertieft zu befassen. Je öfter man erklärt, desto leichter fällt es, den Inhalt zu verstehen.";
  const [...images]: Nodes[] = data.images.edges;
  const sortedImages = images.sort((a, b) =>
    a.node.name.localeCompare(b.node.name)
  );

  return (
    <PageWrapper title='Sprechen' shortDescription={description}>
      <WrappingPaper>
        <Typography variant='h6'>
          In dieser Aufgabe geht es darum, Informationen Sprechend zu
          wiederholen.
        </Typography>
        <br />
        <Typography>
          Hierfür kannst du entweder mit dir selbst, gegen Gegenstände,
          Haustiere oder Menschen sprechen. Im Unterricht empfehlen wir, dir
          einen Partner zu suchen, und gemeinsam die Übungen durchzuführen. Die
          Übung kann zu zweit oder mit mehreren Personen durchgeführt werden.
          Der Sprecher hat die Aufgabe, die Pose dem/n Zuhörer/n so zu erklären,
          dass diese/r sie korrekt nachzeichnen kann.
        </Typography>
        {sortedImages.map((image, index) => {
          <DefaultAccordion key={image.node.id}>
            <img />
          </DefaultAccordion>;
        })}
      </WrappingPaper>
    </PageWrapper>
  );
};

export default Sprechen;
