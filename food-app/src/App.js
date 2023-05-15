import React, { useState ,useReducer} from "react"
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import { useContext } from "react";
import InputContext from "./Components/Store/inputContext"

const defaultState = []

const reducer=(state,action)=>{
  let addNewList=[];
let removeNewList=[];
let flag=false;
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
 
    if(updatedObj){
      addNewList = [...state];
      addNewList[index] = updatedObj;
      return(addNewList)
    }
  }
    
      return([...state,action.item])
  }
  else if (action.type==="REMOVE"){
   
    let itemIndex = 0;
  
    state.forEach((item)=>{
      
      if(item.id===action.itemId){
        if(item.amount=== 1){

          console.log("inside 1")
          removeNewList = state.filter((item1)=>{
            return(item1.id!=item.id)
          })
      
          flag=!flag
          
        }
        else{
       
          let newObj  ={...state[itemIndex],amount:state[itemIndex].amount-1};
        removeNewList = [...state];
        removeNewList[itemIndex]=newObj;
        console.log(removeNewList)
        console.log(state)
       
     
      }}

      itemIndex++
      
    })
  }

 if(flag==true){
  return (removeNewList)
 }

  else if (removeNewList.length>0)
  {
    return (removeNewList)
  }


  else if(addNewList.length>0)
  {
    return(addNewList )
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
  const removeItemHandler=(id) =>{
    dispatchAction({type:"REMOVE",itemId:id})
  }



 
  return (
  <InputContext.Provider value={{cartItems:cartItems,
  onaddItem:AddItemHandler,onItemRemove:removeItemHandler}}>
    <Header onShown = {cartShownHandler}></Header>
    { cartShown && <Cart onClose = {cartCloseHandler}></Cart>}
    <Meals></Meals>
    </InputContext.Provider>
  );
}

export default App;
