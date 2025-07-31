// import {createStore} from 'redux'
import { configureStore } from '@reduxjs/toolkit'

import Creducer from './reducer.js'

// export default createStore(reducer)

export default configureStore({
    reducer:{
        counter:Creducer
    }
})