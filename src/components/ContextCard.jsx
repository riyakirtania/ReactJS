import React,{createContext,useReducer,useEffect} from 'react';
import { useContext } from 'react';
import Card from "./Card";
import {products} from "./products";
import {reducer} from "./Reducer";

export const CartContext=createContext();
const initalState={
    item:products,
    totalAmount:0,
    totalItem:0,
};

const ContextCard = () => {
  const [state,dispatch]=useReducer(reducer,initalState);  

  const removeItem=(id)=>{
    return dispatch({
        type:"REMOVE_ITEM",
        payload:id
    })
  };

  const increase=(id)=>{
    return dispatch({
        type:"INCREASE",
        payload:id
    });
  }

  const decrease=(id)=>{
    return dispatch({
        type:"DECREASE",
        payload:id
    });
  }

  useEffect(()=>{
    return dispatch({type:"GET_TOTAL"})
  },[state.item]);

  return (
    <CartContext.Provider value={{...state,removeItem,increase,decrease}}>
      <Card/>
    </CartContext.Provider>
  )
}

export const UseGlobalContext = () => {
    return useContext(CartContext);
  };

export default ContextCard;
