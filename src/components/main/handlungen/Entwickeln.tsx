import { graphql, useStaticQuery } from "gatsby";
import React, { useEffect } from "react";
import { CardTemplate } from "../../../utils/card";

export const Entwickeln: React.FC = () => {
  const text: string =
    "Manche Situationen oder Probleme haben konkrete Lösungen. Das Herbeiführen einer oder mehrerer Lösungen zu gewissen Problemen setzt voraus, sich mit dem Sachverhalt intensiv und anspruchsvoll auseinanderzusetzen.";

  const data: any = useStaticQuery(graphql`
    query {
      file(name: { eq: "entwickeln" }) {
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
      title='Entwickeln'
      text={text}
      image={data.file.childImageSharp.fluid.src}
      to='/Entwickeln'
      alt='entwickeln'
    />
  );
};
