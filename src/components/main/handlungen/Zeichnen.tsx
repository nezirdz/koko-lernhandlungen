import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { CardTemplate } from "../../../utils/card";

export const Zeichnen: React.FC = () => {
  const text: string =
    "Wenn Sachverhalte strukturiert oder systematisch sind, hilft es oft, diese visuell darzustellen, z.B. in Flowcharts, Venn Diagrammen, Prozessabläufen, etc.";

  const data: any = useStaticQuery(graphql`
    query {
      file(name: { eq: "zeichnen" }) {
        name
        childImageSharp {
          fluid(maxWidth: 345) {
            src
          }
        }
      }
    }
  `);

  return (
    <CardTemplate
      title='Zeichnen'
      text={text}
      image={data.file.childImageSharp.fluid.src}
      to='/Zeichnen'
      alt='zeichnen'
    />
  );
};
