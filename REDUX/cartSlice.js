import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[],
        quantity:0,
        totalQuantity:0
    },
    reducers:{
        addToCart(state,action){
            const newItem=action.payload;
            const existItem=state.items.find(item=>item.id===newItem.id);
            if(existItem){
                existItem.quantity++;
                existItem.totalPrice+=newItem.price;
            }
            else{
                state.items.push({
                    id:newItem.id,
                    name:newItem.name,
                    url:newItem.url,
                    price:newItem.price,
                    quantity:1,
                    totalPrice:newItem.price
                })

                state.totalQuantity++
            }

        },
        removeFromCart(state,action){
           const id=action.payload;
           const exist=state.items.find(item=>item.id===id);
           if(exist.quantity===1){
            state.items=state.items.filter(item=>item.id!==id)
            state.totalQuantity--
           }
           else{
            exist.quantity--;
            exist.totalPrice-=exist.price
           }

        }
    }
    
})

export const cartActions=cartSlice.actions
export default cartSlice