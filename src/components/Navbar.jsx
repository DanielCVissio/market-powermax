import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from '../assets/powermax.png';
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme=>({
  image:{
    marginRight:"10px",
    height:'3rem'
  },
  root:{
    flexGrow:1,
    marginBottom:'4rem'
  },
  grow:{
    flexGrow:20
  }
}))

export default function Navbar() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <AppBar position="fixed" style={{backgroundColor:'whitesmoke'}} >
        <Toolbar >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img src={logo} className={classes.image} />
          </IconButton>
          <div className={classes.grow}/>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Hello Daniel Vissio
          </Typography>
          <Button variant='outlined' color="secondary"><strong>Sing in</strong></Button>

            <IconButton aria-label='show cart items' color='inherit'>
               <Badge badgeContent={2} color="warning">
                 <ShoppingCartIcon fontSize='large' color='primary'/>
               </Badge>
            </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


