import {applyMiddleware, createStore} from 'redux'
import {thunk} from 'redux-thunk'

import reducer from './reduce'

export default createStore(reducer,applyMiddleware(thunk))