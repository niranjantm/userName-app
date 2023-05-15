import React, { useState ,useReducer} from "react"
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import { useContext } from "react";
import InputContext from "./Components/Store/inputContext"

const defaultState = []

const reducer=(state,action)=>{
  if(action.type ==="ADD"){


    const index = state.findIndex((item)=>{
      console.log(action.item.id)
      return(item.id===action.item.id)
    }) 
    console.log(index)
    
    if(index!= -1)
    {

    const updatedObj = {
      ...state[index],
      amount:state[index].amount+action.item.amount
    }
    let updatedList;
    if(updatedObj){
      updatedList = [...state];
      updatedList[index] = updatedObj;
      return(updatedList)
    }
  }
    
      return([...state,action.item])
    

  }
  return(state)
}


function App() {
  const [cartShown,setCartShown] = useState(false)

  const cartShownHandler = ()=>{
    setCartShown(true);
  }

  const cartCloseHandler = ()=>{
    setCartShown(false);
  }

  
  // const [cartItems,setCartItems]=useState([])
  const [cartItems,dispatchAction] = useReducer(reducer,defaultState);

  const AddItemHandler=(item)=>{
    dispatchAction({type:"ADD",item:item})
  }



 
  return (
  <InputContext.Provider value={{cartItems:cartItems,
  onaddItem:AddItemHandler}}>
    <Header onShown = {cartShownHandler}></Header>
    { cartShown && <Cart onClose = {cartCloseHandler}></Cart>}
    <Meals></Meals>
    </InputContext.Provider>
  );
}

export default App;
