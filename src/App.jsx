import Navbar from "./components/Navbar"
import CheckoutPage from "./components/CheckoutPage"
import Products from './components/Products'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Products/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/checkoutpage' element={<CheckoutPage/>}/>
          <Route path='/signup' element={<SignUp/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App

//2:40