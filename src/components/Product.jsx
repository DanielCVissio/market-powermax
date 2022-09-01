import * as React from 'react';
import { styled } from '@mui/material/styles';
import {Card, CardHeader, CardMedia, CardContent,CardActions, Collapse, IconButton, Typography  }from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AddShoppingCart } from '@material-ui/icons';
import accounting from "accounting";


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Product({product: {id,name,productType, image, price, rating, description}}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardHeader
        action={
          <Typography
            variant='h5'
            color='textSecondary'
          >
            {accounting.formatMoney(price)}
          </Typography>
        }
        title={name}
        subheader="in Stock"
      />
      <CardMedia
        component="img"
        height="300"
        image={image}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {productType}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to Cart">
          <AddShoppingCart fontSize='large' />
        </IconButton>
        {/* creamos un arreglo pasamos el rating, o el 4, y lo rellenamos con el codigo de la estrella */}    
        {Array(rating)
          .fill()
          .map((_, i)=>(
            <p>&#11088;</p>
          ))}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
            <Typography>
              {description}
            </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

