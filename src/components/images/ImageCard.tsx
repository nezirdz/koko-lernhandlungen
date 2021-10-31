import {
  Card,
  CardContent,
  CardMedia,
  Modal,
  useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

interface Props {
  children: JSX.Element | null | JSX.Element[];
  imageRight?: boolean;
  image: string;
  fluid: string;
  alt: string;
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

const ImageCard: React.FC<Props> = ({
  children,
  imageRight,
  image,
  fluid,
  alt,
}) => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);

  const small: boolean = useMediaQuery("(min-width:600px)");
  const direction = imageRight ? "row" : "row-reverse";
  const mobile = small ? direction : "column";
  const textWidth = small ? "53%" : "100%";

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: mobile,
        justifyContent: "space-between",
        alignItems: "center",
      }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifySelf: "center",
        }}>
        <CardMedia
          width={small ? "500" : "100%"}
          // height={small ? "500" : "170"}
          component={"img"}
          image={image}
          alt={alt}
          onClick={toggleOpen}
        />
        <Modal open={open} onClose={toggleOpen}>
          <Box sx={style}>
            <img
              src={fluid}
              alt={alt}
              style={{ margin: "auto", maxWidth: "100%" }}
              onClick={toggleOpen}
            />
          </Box>
        </Modal>
      </Box>
      <Box
        sx={{
          maxWidth: textWidth,
          display: "flex",
          flexDirection: "column",
        }}>
        <CardContent>{children}</CardContent>
      </Box>
    </Card>
  );
};

export default ImageCard;
