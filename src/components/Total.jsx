import { Button, makeStyles } from "@material-ui/core";
import accounting from "accounting";
import { getBasketTotal } from "../reducer";
import { useStateValue } from "../StateProvider";
import {Link as RouteLink} from 'react-router-dom';

const useStyles = makeStyles((theme)=>({
    root:{
        display:'flex',
        flexDirection:"column",
        justifyContent:'center',
        alignItems:'center',
        height:'25vh'
    },
    button:{
        marginTop:'1rem'
    }
}))

export const Total = () => {
    const classes =  useStyles();
    const [{basket}, dispatch]= useStateValue();
    return (
        <div className={classes.root}>
            <h5>Total items: {basket?.length}</h5>
            <h5>{accounting.formatMoney(getBasketTotal(basket))}</h5>
            <Button className={classes.button} variant='contained' color='secundary'>
                <RouteLink to='/checkout'>
                    Check Out
                </RouteLink>
            </Button>
        </div>
    )
}
