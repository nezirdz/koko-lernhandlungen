import { graphql, useStaticQuery } from "gatsby";
import React, { useEffect } from "react";
import { CardTemplate } from "../../../utils/card";

export const Verstehen: React.FC = () => {
  const text: string =
    "Das Nachvollziehen eines Sachverhalts trägt dazu bei, sich mit der Materie vertieft auseinander zu setzen. ";

  const data: any = useStaticQuery(graphql`
    query {
      file(name: { eq: "verstehen" }) {
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
      title='Verstehen'
      text={text}
      image={data.file.childImageSharp.fluid.src}
      to='/Entwickeln'
      alt='verstehen'
    />
  );
};
