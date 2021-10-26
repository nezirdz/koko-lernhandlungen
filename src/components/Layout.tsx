import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Header } from "./header";

interface Props {
  children: JSX.Element | null | JSX.Element[];
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <Box mt={3} mb={10}>
        <Container>{children}</Container>
      </Box>
    </>
  );
};
