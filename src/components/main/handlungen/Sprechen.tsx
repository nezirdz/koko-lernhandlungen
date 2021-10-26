import { graphql, useStaticQuery } from "gatsby";
import React, { useEffect } from "react";
import { CardTemplate } from "../../../utils/card";

export const Sprechen: React.FC = () => {
  const text: string =
    "Das Sprechen behandelt mehrere Möglichkeiten, sich mit dem Inhalt auseinanderzusetzen.";

  const data: any = useStaticQuery(graphql`
    query {
      file(name: { eq: "sprechen" }) {
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
      title='Sprechen'
      text={text}
      image={data.file.childImageSharp.fluid.src}
      to='/Entwickeln'
      alt='Sprechen'
    />
  );
};
