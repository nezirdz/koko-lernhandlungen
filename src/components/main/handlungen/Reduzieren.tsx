import { graphql, useStaticQuery } from "gatsby";
import React, { useEffect } from "react";
import { CardTemplate } from "../../../utils/card";

export const Reduzieren: React.FC = () => {
  const text: string =
    "Beim Reduzieren wird wesentliches hervorgehoben und gut strukturiert abgebildet.";

  const data: any = useStaticQuery(graphql`
    query {
      file(name: { eq: "reduzieren" }) {
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
      title='Reduzieren'
      text={text}
      image={data.file.childImageSharp.fluid.src}
      to='/Reduzieren'
      alt='reduzieren'
    />
  );
};
