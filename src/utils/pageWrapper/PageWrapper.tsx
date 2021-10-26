import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Layout } from "../../components/Layout";
import Divider from "@mui/material/Divider";

interface Props {
  children: JSX.Element | null | JSX.Element[];
  title: string;
  shortDescription: string;
  image?: string;
}

export const PageWrapper: React.FC<Props> = ({
  children,
  title,
  shortDescription,
  image,
}) => {
  const headerStyle: React.CSSProperties | undefined = {
    textAlign: "center",
    marginBottom: "2rem",
  };

  return (
    <Layout>
      <Box mb={4}>
        <Typography variant='h2' style={headerStyle}>
          {title}
        </Typography>
        <Typography variant='h5' style={headerStyle}>
          {shortDescription}
        </Typography>
        <Divider />
        <Box mt={7}>{children}</Box>
      </Box>
      <Button variant='contained' href='/'>
        Zurück
      </Button>
    </Layout>
  );
};
