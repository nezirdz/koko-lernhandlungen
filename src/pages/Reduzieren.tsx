import {
  Box,
  Button,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import { DefaultAccordion } from "../components/pages/DefaultAccordion";
import { WrappingPaper } from "../components/pages/WrappingPaper";
import { PageWrapper } from "../utils/pageWrapper/PageWrapper";

interface Texts {
  text: string[];
}
const texts: Texts = require("../components/pages/description.json");

interface Props {
  children: JSX.Element | null | JSX.Element[];
}

type Items = string[];
interface ListItems {
  mobile: boolean;
}

export const ListItems: React.FC<ListItems> = ({ mobile }) => {
  const [items, setItems] = useState<Items>([]);
  const [value, setValue] = useState("");
  const direction = mobile ? "column" : "column-reverse";
  const mobilePadding = mobile ? "2rem" : "0";

  const handleClick = (value: string) => {
    if (value !== "") {
      const newList = [...items, value];
      setItems(newList);
      setValue("");
    }
  };

  const removeItem = (index: number) => {
    const newList = [...items];
    newList.splice(index, 1);
    setItems(newList);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Box
      sx={{
        width: "100%",
        padding: mobilePadding,
        maxWidth: "100%",
        display: "flex",
        flexDirection: direction,
        alignItems: "end",
        justifyContent: "end",
      }}>
      <ul style={{ width: "100%" }}>
        {items.map((item, index) => {
          return (
            <li
              key={index}
              style={{
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
                maxWidth: "100%",
              }}>
              <Typography variant='body1'>{item}</Typography>
              <Button onClick={() => removeItem(index)}>
                <strong>X</strong>
              </Button>
            </li>
          );
        })}
      </ul>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "end",
          alignItems: "end",
        }}>
        <TextField
          fullWidth
          label={"Bulletpoint"}
          value={value}
          onChange={handleChange}
        />
        <Button onClick={() => handleClick(value)}>HINZUFÜGEN</Button>
      </Box>
    </Box>
  );
};

export const ExampleAccordion: React.FC = () => {
  const small: boolean = useMediaQuery("(min-width:600px)");
  const mobile = small ? "row" : "column";
  const textWidth = small ? "48%" : "100%";

  return (
    <>
      {texts.text.map((text, index) => (
        <DefaultAccordion title={"Pose " + (index + 1)} key={index}>
          <Box
            sx={{
              display: "flex",
              flexDirection: mobile,
              justifyContent: "space-between",
              alignItems: "start",
            }}>
            <Box
              sx={{
                maxWidth: textWidth,
              }}>
              <Typography>{text}</Typography>
            </Box>
            <ListItems mobile={small} />
          </Box>
        </DefaultAccordion>
      ))}
    </>
  );
};

const Reduzieren: React.FC<Props> = () => {
  const description: string =
    "Beim Reduzieren wird wesentliches hervorgehoben und gut strukturiert abgebildet. Das herausfinden, was als wesentliches qualifiziert wird, setzt voraus, dass man sich mit der Materie intensiv befasst. Diese Effekte kennt man, wenn man Spickzettel schreibt (wie in MACS). Diese funktionieren so gut, dass man sie in vielen Fällen gar nicht braucht.";
  return (
    <PageWrapper title='Reduzieren' shortDescription={description}>
      <WrappingPaper dark>
        <Typography>
          {" "}
          Erstelle eine Liste von Bulletpoints zu jeder textuellen Beschreibung,
          mit der du das Wesentliche zusammenfassen kannst. Ziel sind 3-5
          Bulletpoints.
        </Typography>
        <ExampleAccordion />
      </WrappingPaper>
    </PageWrapper>
  );
};

export default Reduzieren;
