import { graphql, useStaticQuery } from "gatsby";
import React, { useEffect } from "react";
import { CardTemplate } from "../../../utils/card";

export const Schreiben: React.FC = () => {
  const text: string =
    "Hierbei ist es wichtig, nicht wortwörtliche Kopien zu erstellen, sondern sinngemäße Kopien zu erstellen – in eigenen Worten zusammengefasst.";

  const data: any = useStaticQuery(graphql`
    query {
      file(name: { eq: "schreiben" }) {
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
      title='Schreiben'
      text={text}
      image={data.file.childImageSharp.fluid.src}
      to='/Schreiben'
      alt='schreiben'
    />
  );
};
