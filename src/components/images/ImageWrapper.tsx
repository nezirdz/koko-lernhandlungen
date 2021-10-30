import { Modal } from "@mui/material";
import { Box } from "@mui/system";
import { GatsbyImage } from "gatsby-plugin-image";
import React, { useState } from "react";

interface Props {
  image: any;
  name: string;
}

// const boxStyle = {
//   position: "absolute" as "absolute",
//   top: "35%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: "40vw",
//   height: "60vh",
//   bgcolor: "background.paper",
//   boxShadow: 24,
//   p: 4,
// };

const style = {
  maxWidth: "60vw",
  // maxHeight: "70vh",
};

export const ImageWrapper: React.FC<Props> = ({ name, image }) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);

  return (
    <>
      <GatsbyImage
        imgStyle={{ width: "100%" }}
        image={image}
        alt={name}
        onClick={() => toggleOpen()}
      />
      <Modal
        open={open}
        onClose={toggleOpen}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <Box style={style}>
          <GatsbyImage image={image} alt={name} imgStyle={{ width: "100%" }} />
        </Box>
      </Modal>
    </>
  );
};
