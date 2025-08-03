import { createSlice } from "@reduxjs/toolkit";

const Reducer = createSlice({
    name: 'configItem',
    initialState:{
        items:[]
    },
    reducers:{
        add: (state,action)=>{
            console.log('add');
            state.items.splice(0,0,action.payload)
        }
    }
})

export const {add} = Reducer.actions

export default Reducer.reducer