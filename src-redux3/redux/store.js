import { configureStore } from "@reduxjs/toolkit";
import configItem from './reducers/configItem'
export default configureStore({
    reducer:{
        configItem: configItem
    }
})