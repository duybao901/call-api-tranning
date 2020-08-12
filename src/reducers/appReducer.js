import { combineReducers } from 'redux'

import products from './products'

var appReducer = combineReducers({
    products
})

export default appReducer;