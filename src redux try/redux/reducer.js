import { createSlice } from "@reduxjs/toolkit";

const Creducer = createSlice({
    name: 'reducer',
    initialState: {
        value:0
    },
    reducers:{
        increment: state=>{
            state.value+=1;
        },
        incrementPro: (state,action)=>{
            state.value+=action.payload;
        }
    }
})

export const {increment,incrementPro} =Creducer.actions;
export default Creducer.reducer;