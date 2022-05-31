import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CharacterCard = ({ character}) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    const name = character.name.replace(/\s+/g, '+');
    navigate(`character/${name}`);
  };
  const handleOnClick = () => {
    handleNavigate();
  };
  

  return (
    <Grid item xs={3}>
      <Card sx={{ maxWidth: 400 }}>
        <CardActionArea onClick={handleOnClick}>
          <CardMedia
            component="img"
            height="300px"
            image={character.img}
            alt={character.name}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              align="center"
            >
              {character.name}
            </Typography>
            <Typography variant="body1" align="center">
              {character.category}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default CharacterCard;
