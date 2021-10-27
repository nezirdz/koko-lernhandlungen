import { Paper } from "@mui/material";
import React from "react";

interface Props {
  children: JSX.Element | JSX.Element[] | null;
  dark?: boolean;
}

export const WrappingPaper: React.FC<Props> = ({ children, dark }) => {
  const theme: string = dark ? "rgb(251 251 251)" : "white";
  return (
    <Paper
      elevation={3}
      style={{
        padding: "1rem",
        marginBottom: "1rem",
        marginTop: "1rem",
        backgroundColor: theme,
      }}>
      {children}
    </Paper>
  );
};
