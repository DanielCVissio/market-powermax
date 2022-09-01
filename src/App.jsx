// import CheckoutPage from "./components/CheckoutPage" 
import Navbar from "./components/Navbar"
// import { Routes, Route, BrowserRouter } from "react-router-dom"
// import Product from "./components/Product"
// import CheckoutPage from "./components/CheckoutPage"
import Products from './components/Products'

function App() {
  return (
    // <BrowserRouter>
      <div className="App">
        <Navbar/>
        {/* <Routes> */}
        <Products/>
        {/* <CheckoutPage/> */}
        {/* <Product/> */}
          {/* <Route path='/checkoutpage' element={<CheckoutPage/>}/>  */}
          {/* <Route path='/' element={<Products/>}/>    */}
        {/* </Routes> */}
      </div>
    // {/* </BrowserRouter> */}
  )
}

export default App

//2:40