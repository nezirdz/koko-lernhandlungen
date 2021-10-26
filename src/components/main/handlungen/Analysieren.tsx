import { graphql, useStaticQuery } from "gatsby";
import React, { useEffect } from "react";
import { CardTemplate } from "../../../utils/card";

export const Analysieren: React.FC = () => {
  const text: string =
    "Situationen oder Komplexe Handlungen werden in einfache verständliche Komponenten zerlegt, und somit diese auf Ihren Ursprung zurückführen.";

  const data: any = useStaticQuery(graphql`
    query {
      file(name: { eq: "analysieren" }) {
        name
        childImageSharp {
          fluid(maxWidth: 345) {
            src
          }
        }
      }
    }
  `);
  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <CardTemplate
      title='Analysieren'
      text={text}
      image={data.file.childImageSharp.fluid.src}
      alt='analysieren'
    />
  );
};
