import * as Types from '../constants/ActionType'

    var initialState = []

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.FECTH_PRODUCT:
            state = action.products;
            return [...state]
        case Types.DELETE_PRODUCT:
            const newState = state.filter((product) => {
                return product.id !== action.id;
            })
            return [...newState];
        default:
            return [...state];
    }   
}

export default myReducer