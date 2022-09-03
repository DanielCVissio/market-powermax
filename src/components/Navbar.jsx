import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Badge} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from '../assets/powermax.png';
import {makeStyles} from '@material-ui/core/styles'
import { Link, useNavigate } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { getAuth, signOut } from 'firebase/auth';
import { actionTypes } from '../reducer';

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
  const[{basket, user},dispatch]=useStateValue();
  const navigate = useNavigate();

  const handleAuth =()=>{
    const auth = getAuth()
    if(user){
      signOut(auth);
      dispatch({
        type:actionTypes.EMPTY_BASKET,
        basket:[],
      });
      dispatch({
        type:actionTypes.SET_USER,
        user:null,
      });
      navigate('/')
    }
  }

  return (
    <Box className={classes.root}>
      <AppBar position="fixed" style={{backgroundColor:'whitesmoke'}} >
        <Toolbar >
          <Link to="/">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <img src={logo} className={classes.image} />
            </IconButton>
          </Link>

          <div className={classes.grow}/>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Hello, {user ? user.email : 'Guest'}
          </Typography>
          <Link to='/signin'>
            <Button variant='outlined' color="secondary" onClick={handleAuth}>
              <strong>{user ? 'Sign Out' : 'Sign In'}</strong>
            </Button>
          </Link>
          <Link to='/checkoutpage'>
            <IconButton aria-label='show cart items' color='inherit'>
              <Badge badgeContent={basket?.length} color="warning">
                <ShoppingCartIcon fontSize='large' color='primary'/>
              </Badge>
            </IconButton>
          </Link>

        </Toolbar>
      </AppBar>
    </Box>
  );
}


