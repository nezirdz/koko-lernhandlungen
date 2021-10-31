import { Modal } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

interface Props {
  children: JSX.Element | null | JSX.Element[];
  opened: boolean;
  key?: any;
  image: any;
  name: string;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  bgcolor: "background.paper",
  display: "flex",
};

export const ImageWrapper: React.FC<Props> = ({
  children,
  opened,
  image,
  name,
}) => {
  const [open, setOpen] = useState(opened);
  const toggleOpen = () => setOpen(!open);

  return (
    <>
      <Modal open={open} onClose={toggleOpen}>
        <Box sx={style}>
          <img
            src={image}
            alt={name}
            style={{ margin: "auto", maxWidth: "100%" }}
            onClick={toggleOpen}
          />
        </Box>
      </Modal>
      {children}
    </>
  );
};
