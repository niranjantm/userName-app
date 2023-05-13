import React, { useState } from "react"
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";



function App() {
  const [cartShown,setCartShown] = useState(false)

  const cartShownHandler = ()=>{
    setCartShown(true);
  }

  const cartCloseHandler = ()=>{
    setCartShown(false);
  }

  return (
    <React.Fragment>
    <Header onShown = {cartShownHandler}></Header>
    { cartShown && <Cart onClose = {cartCloseHandler}></Cart>}
    <Meals></Meals>
    </React.Fragment>
  );
}

export default App;
