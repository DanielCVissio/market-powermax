import React from 'react';
import { Grid, Typography} from '@material-ui/core';
import products from '../data/product-data';
import {makeStyles} from '@material-ui/core/styles'
import CheckoutCard from './CheckoutCard';
import { Total } from './Total';

const useStyles = makeStyles((theme)=>({
    root:{
        flexGrow:1,
        padding:'2rem',
    },
}));

export default function CheckoutPage(){
    const classes = useStyles();

    function FormRow(){
        return(
            <React.Fragment>
                {products.map((item)=>(
                    <Grid item xs={12} sm={8} md={6} lg={4}>
                        <CheckoutCard key={item.id} product={item}/>
                    </Grid>
                ))}
            </React.Fragment>
        );
    };

    return(
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography align='center' gutterBottom variant='h4'>
                        Shopping Cart
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={8} md={9} container spacing={2}>
                    <FormRow />
                </Grid>
                <Grid item xs={12} sm={4} md={3}>
                    <Typography ali gn='center' gutterBottom variant='h4'>
                        <Total/>
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
};
