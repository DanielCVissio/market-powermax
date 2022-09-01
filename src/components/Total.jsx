import { Button, makeStyles } from "@material-ui/core";
import accounting from "accounting";

const useStyles = makeStyles((theme)=>({
    root:{
        display:'flex',
        flexDirection:"column",
        justifyContent:'center',
        alignItems:'center',
        height:'20vh'
    },
    button:{
        marginTop:'1rem'
    }
}))

export const Total = () => {
    const classes =  useStyles();
  return (
    <div className={classes.root}>
        <h5>Total items: 4</h5>
        <h5>{accounting.formatMoney(50)}</h5>
        <Button className={classes.button} variant='contained' color='secundary'>
            Check Out
        </Button>
    </div>
  )
}
