import { graphql, useStaticQuery } from "gatsby";
import React, { useEffect } from "react";
import { CardTemplate } from "../../../utils/card";

export const Einschatzen: React.FC = () => {
  const text: string =
    "Einschätzen bedeutet, Sachverhalte zu Kenntnis zu nehmen und sie mit bestimmten Kriterien zu betrachten.";

  const data: any = useStaticQuery(graphql`
    query {
      file(name: { eq: "einschätzen" }) {
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
      title='Einschätzen'
      text={text}
      image={data.file.childImageSharp.fluid.src}
      to='/Einschaetzen'
      alt='einschätzen'
    />
  );
};
