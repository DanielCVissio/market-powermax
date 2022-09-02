import * as React from 'react';
import {Card, CardHeader, CardMedia,CardActions, IconButton, Typography  }from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import accounting from "accounting";
import {makeStyles} from '@material-ui/core/styles'
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';


const useStyles = makeStyles((theme)=>({
    cardActions:{
        display:'flex',
        justifyContent:'space-between',
        textAlign:'center'
    },
    cardRating:{
        display:'flex'
    }
}));



export default function CheckoutCard({product: {id,name,productType, image, price, rating, description}}) {

  const classes = useStyles();
  const [{basket}, dispatch]= useStateValue();

  const removeItem=()=>dispatch({
    type: actionTypes.REMOVE_ITEM,
    id: id,
  });
  
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
      <CardMedia component="img" height="300"image={image} title={name}/>

      <CardActions disableSpacing className={classes.cardActions}>
        <div className={classes.cardRating}>
            {Array(rating)
                .fill()
                .map((_, i)=>(
                <p>&#11088;</p>
            ))}
        </div>
        <IconButton>
            <DeleteIcon fontSize='large' onClick={removeItem}/>
        </IconButton>
      </CardActions>
    </Card>
  );
}