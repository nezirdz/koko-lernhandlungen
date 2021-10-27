import { Typography } from "@mui/material";
import React from "react";
import { WrappingPaper } from "../components/pages/WrappingPaper";
import { PageWrapper } from "../utils/pageWrapper/PageWrapper";

const Sprechen: React.FC = () => {
  const description =
    "Das Sprechen behandelt mehrere Möglichkeiten, sich mit dem Inhalt auseinanderzusetzen. Eine Möglichkeit ist, den Sachverhalt anderen zu erklären, und sich dadurch mit der Materia vertieft zu befassen. Je öfter man erklärt, desto leichter fällt es, den Inhalt zu verstehen.";

  return (
    <PageWrapper title='Sprechen' shortDescription={description}>
      <Typography variant='h6'>
        In dieser Aufgabe geht es darum, Informationen Sprechend zu wiederholen.
      </Typography>
      <br />
      <Typography>
        Hierfür kannst du entweder mit dir selbst, gegen Gegenstände, Haustiere
        oder Menschen sprechen. Im Unterricht empfehlen wir, dir einen Partner
        zu suchen, und gemeinsam die Übungen durchzuführen.
      </Typography>
      <WrappingPaper>
        <Typography variant='h6'>
          In dieser Aufgabe geht es darum, Informationen Sprechend zu
          wiederholen.
        </Typography>
        <br />
        <Typography>
          Hierfür kannst du entweder mit dir selbst, gegen Gegenstände,
          Haustiere oder Menschen sprechen. Im Unterricht empfehlen wir, dir
          einen Partner zu suchen, und gemeinsam die Übungen durchzuführen.
        </Typography>
      </WrappingPaper>
    </PageWrapper>
  );
};

export default Sprechen;
