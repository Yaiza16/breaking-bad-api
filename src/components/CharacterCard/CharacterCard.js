import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

function CharacterCard({ character }) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    const name = character.name.replace(/\s+/g, '+');
    navigate(`character/${name}`);
  };
  const handleOnClick = () => {
    handleNavigate();
  };

  return (
    // <Grid item xs={4} lg={3}>
    //   <Card sx={{ maxWidth: 350 }}>
    //     <CardActionArea onClick={handleOnClick} data-test-id="clickCard">
    //       <CardMedia
    //         component="img"
    //         height="300px"
    //         image={character.img}
    //         alt={character.name}
    //       />
    //       <CardContent>
    //         <Typography
    //           gutterBottom
    //           variant="h6"
    //           component="div"
    //           align="center"
    //         >
    //           {character.name}
    //         </Typography>
    //         <Typography variant="body1" align="center">
    //           {character.category}
    //         </Typography>
    //       </CardContent>
    //     </CardActionArea>
    //   </Card>
    // </Grid>
    <Card
      sx={{ maxWidth: 250, width: 250, minWidth: 250 }}
      className="character-card"
    >
      <CardActionArea onClick={handleOnClick} data-test-id="clickCard">
        <CardMedia
          component="img"
          height="300px"
          style={{ objectPosition: 'top' }}
          image={character.img}
          alt={character.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" align="center">
            {character.name}
          </Typography>
          <Typography variant="body1" align="center">
            {character.category}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

CharacterCard.propTypes = { character: PropTypes.shape.isRequired };

export default CharacterCard;
