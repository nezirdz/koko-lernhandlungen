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

  return (
    <Card sx={{ display: "flex", flexDirection: mobile }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardMedia
          height={small ? "500" : "170"}
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
          display: "flex",
          flexDirection: "column",
        }}>
        <CardContent
          sx={{
            flex: "1 0 auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}>
          {children}
        </CardContent>
      </Box>
    </Card>
  );
};

export default ImageCard;
