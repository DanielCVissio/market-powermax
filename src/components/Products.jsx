import * as React from 'react';
import products from '../data/product-data'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Product from './Product';
import { makeStyles } from '@material-ui/styles';

const useStyle=makeStyles((theme)=>({
    root:{
        flexGrow:1,
        padding:5,
    }

}))
export default function Products() {
    const classes = useStyle();
  return (
    <Box className={classes.root}sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
            {
                products.map(product=>(
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Product key={product.id} product={product}/>
                    </Grid>
                ))
            }
        </Grid>
    </Box>
  );
}
