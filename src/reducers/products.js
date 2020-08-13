import * as Types from '../constants/ActionType'

var initialState = [

]

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.FECTH_PRODUCT:
            state = action.products;
            return [...state]
        default:
            return [...state];
    }   
}

export default myReducer