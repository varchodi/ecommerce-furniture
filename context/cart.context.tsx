"use client"

import { furnitureType } from '@/common.types'
import React from 'react'
import { createContext,Dispatch,useReducer } from 'react'

export type StateType = {
    items: furnitureType[],
    total:number,
}

type ActionType = { type: "INCREMENT" | "DECREMENT" | "ADD" | "REMOVE", payload: furnitureType }

 const localStorageCart: StateType = JSON.parse(localStorage.getItem("cart")!);

const initialState:StateType= {
    items: [],
    total:0,
}



const reducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
      case "ADD":
        const existingItem = state.items.find(item => item._id === action.payload._id);
  
        if (existingItem) {
          // If the item already exists, update its quantity
          const updatedItems = state.items.map(item =>
            item._id === action.payload._id ? { ...item, quantity: item.quantity + action.payload.quantity } : item
          );
          state= {
            ...state,
            items: updatedItems,
            total: updatedItems.reduce((sum, item: furnitureType) => sum + item.quantity * item.price, 0),
            };
            //strore in local storage
             localStorage.setItem("cart", JSON.stringify(state));
            return state;
        } else {
          // If the item does not exist, add it to the state
          return {
            ...state,
            items: [...state.items, { ...action.payload }],
            total: state.items.reduce((sum, item: furnitureType) => sum + item.quantity * item.price, 0) + action.payload.quantity * action.payload.price,
          };
        }
  
        case "REMOVE":
            state = {
                ...state,
                items: state.items.filter(item => item._id !== action.payload._id),
                total: state.items.reduce((sum, item: furnitureType) => sum + item.quantity * item.price, 0) // state.items.find(item => item._id === action.payload._id)?.quantity * action.payload.price??0,
            };
            //strore in local storage
             localStorage.setItem("cart", JSON.stringify(state));
             return state;
      case "INCREMENT":
        const incrementedItems = state.items.map(item =>
          item._id === action.payload._id ? { ...item, quantity: item.quantity + 1 } : item
        );
        state= {
          ...state,
          items: incrementedItems,
          total: incrementedItems.reduce((sum, item: furnitureType) => sum + item.quantity * item.price, 0),
            };
            //save to loc storage
             localStorage.setItem("cart", JSON.stringify(state));
             return state;
      case "DECREMENT":
        const decrementedItems = state.items.map(item =>
          item._id === action.payload._id ? { ...item, quantity: item.quantity - 1 } : item
        );
        state ={
          ...state,
          items: decrementedItems,
          total: decrementedItems.reduce((sum, item: furnitureType) => sum + item.quantity * item.price, 0),
            };
            //save to loc storage
             localStorage.setItem("cart", JSON.stringify(state));
             return state;
  
      default:
        return state;
    }
  };
  

export const cartContext = createContext < {state: StateType; dispatch:Dispatch<ActionType>}>({state:initialState,dispatch:()=>null}) 


export const CartContextProvider = ({ children }:{children:React.ReactNode}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
      <cartContext.Provider value={{state,dispatch}}>
        {children}
      </cartContext.Provider>
    )
}
  
