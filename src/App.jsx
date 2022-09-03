import Navbar from "./components/Navbar"
import CheckoutPage from "./components/CheckoutPage"
import Products from './components/Products'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import { useEffect } from "react";
import { auth } from "./firbase/firebase"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { actionTypes } from "./reducer"
import {useStateValue} from './StateProvider'
import Checkout from "./components/CheckoutForm/Checkout"

function App() {
  const [{user}, dispatch]= useStateValue();
  const auth = getAuth()
  useEffect(() => {
    onAuthStateChanged(auth,(authUser)=>{
      console.log(authUser);
      if(authUser){
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser
        })
      }
    })
  }, [])
  

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Products/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/checkoutpage' element={<CheckoutPage/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

//2:40