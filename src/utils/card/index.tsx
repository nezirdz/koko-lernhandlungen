import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

interface Props {
  image?: string;
  alt?: string;
  title: string;
  text?: string;
  to?: string;
}

const cardHeight = {
  height: "15vh",
};

export const CardTemplate: React.FC<Props> = ({
  image,
  alt,
  title,
  text,
  to,
}) => {
  console.log(image);
  return (
    <Card elevation={4} sx={{ maxWidth: 345 }}>
      <CardMedia component='img' height='140' image={image} alt={alt} />
      <CardContent style={cardHeight}>
        <Typography gutterBottom variant='h5' component='div'>
          {title}
        </Typography>
        {text && (
          <Typography variant='body2' color='text.secondary'>
            {text}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Button size='small' href={to}>
          Mehr erfahren
        </Button>
      </CardActions>
    </Card>
  );
};
